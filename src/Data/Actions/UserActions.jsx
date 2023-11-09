import {
	LOGIN_USER,
	LOGIN_USER_FAIL,
	LOGOUT,
	TOKEN,
	GET_USER,
	GET_USER_LOADING,
	GET_USER_FAIL,
	GET_ERRORS_TEXT,
	REGISTER_USER,
	UPDATE_USER,
	REGISTER_USER_FAIL,
	UPDATE_USER_FAIL,
	UPDATE_PASSWORD,
	UPDATE_PASSWORD_FAIL,
	// SET_SUCCESS,
	GET_USER_TYPE,
	GET_USER_TYPE_FAIL,
	GET_PLANS,
} from "./ActionTypes";
import { SetAuthToken } from "../Config";
import axios from "axios";
import { toast } from "react-toastify";
import { clearErrors, returnErrors } from "../Reducers/ErrorReducer";
import { getDiscussions, getNotify } from "./NotificationAction";
import {
	getCourses,
	getCoursesToEnroll,
	manageSession,
	manageTasks,
} from "./CoursesAction";
import { getAllMessages } from "../Reducers/ChatReducer";

// LOGOUT
export const logoutUser = () => async dispatch => {
	dispatch({ type: LOGOUT });
	dispatch(clearErrors());
	dispatch(getCourses());
};

// GET USER INFO
export const loadUser = () => async dispatch => {
	let token = localStorage.getItem(TOKEN);
	if (token) SetAuthToken(token);

	dispatch({ type: GET_USER_LOADING });
	dispatch(clearErrors());
	try {
		let res = await axios.get(`/api/v1/user`);
		if (res?.data?.data?.privilege === "student") {
			dispatch({
				type: GET_USER,
				payload: res.data,
			});
			dispatch(getCourses());
			dispatch(getNotify());
			dispatch(getDiscussions());
			dispatch(manageTasks());
			dispatch(manageSession());
			dispatch(getCoursesToEnroll());
			dispatch(getAllMessages("load"));
		} else {
			dispatch({ type: GET_USER_FAIL });
		}
	} catch (err) {
		if (err) console.log(err.response?.data?.data, { err });
		if (err?.response?.status === 429) toast.error(err?.response?.data);
		dispatch({ type: GET_USER_FAIL });
		dispatch({
			type: GET_ERRORS_TEXT,
			payload: err?.response?.data?.data
				? err?.response?.data?.data?.[0]?.msg
				: err?.response?.data
				? err?.response?.data
				: err?.message,
		});
	}
};

// LOGIN ACTION
export const loginUser = userData => async dispatch => {
	try {
		let res = await axios.post(`/api/v1/user/login`, { ...userData });
		dispatch(clearErrors());

		if (res?.data?.data?.privilege === "student") {
			dispatch({
				type: LOGIN_USER,
				payload: res.data,
			});
			dispatch(loadUser());
			toast.success(res.data.msg, { autoClose: 5000 });
		} else {
			dispatch({ type: LOGIN_USER_FAIL });
			dispatch(
				returnErrors({ error: [{ msg: "Unauthorised User", param: "auth" }] })
			);
		}
	} catch (err) {
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		console.log({ err });
		let error = err.response?.data?.data;
		if (error) {
			dispatch(returnErrors({ error, status: err?.response?.status }));
		}
		dispatch({ type: LOGIN_USER_FAIL });
	}
};

// REGISTER ACTION
export const registerUser = userData => async dispatch => {
	dispatch(clearErrors());
	console.log({ userData });
	try {
		var res = await axios.post("/api/v1/user", { ...userData });

		dispatch({
			type: REGISTER_USER,
			payload: res.data,
		});
		toast.success(res.data.msg, { autoClose: 5000 });
	} catch (err) {
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		console.log({ err });
		let error = err.response?.data?.data;
		if (error) {
			dispatch(returnErrors({ error, status: err?.response?.status }));
		}
		dispatch({ type: REGISTER_USER_FAIL });
	}
};

export const updatePassword = userData => async dispatch => {
	dispatch(clearErrors());

	try {
		var res = await axios.put(`/api/v1/user/update-password`, { ...userData });

		dispatch({
			type: UPDATE_PASSWORD,
			payload: res.data,
		});
		// dispatch({ type: SET_SUCCESS, payload: res?.data?.msg })
		toast.success(res?.data?.msg);
	} catch (err) {
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		console.log({ err });
		let error = err.response?.data?.data;
		if (error) {
			dispatch(returnErrors({ error, status: err?.response?.status }));
		}
		dispatch({ type: UPDATE_PASSWORD_FAIL });
	}
};

export const updateUser = (userData, type) => async dispatch => {
	dispatch(clearErrors());

	try {
		var avatar, res;
		if (type === "profile-image") {
			let media = await imageUpload([userData.logo]);
			avatar = media[0];
			// console.log({ avatar, media, userData });
			res = await axios.put(`/api/v1/user/update-avatar`, {
				...userData,
				avatar,
			});
		} else {
			res = await axios.put(`/api/v1/user`, { ...userData });
		}

		dispatch({
			type: UPDATE_USER,
			payload: res.data,
		});
		// dispatch({ type: SET_SUCCESS, payload: res?.data?.msg })
		toast.success(res?.data?.msg);
	} catch (err) {
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		console.log({ err });
		let error = err.response?.data?.data;
		if (error) {
			dispatch(returnErrors({ error, status: err?.response?.status }));
		}
		dispatch({ type: UPDATE_USER_FAIL });
	}
};

export const getPlans = () => async dispatch => {
	try {
		let res = await axios.get(`/api/v1/plan`)
		dispatch({
			type: GET_PLANS,
			payload: res.data,
		})
	} catch (err) {
		if (err) console.log(err.response?.data?.data, { err })
		if (err?.response?.status === 429) toast.error(err?.response?.data)
	}
}

export const getUserType = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/v1/user-type?type=student`);
    dispatch({
      type: GET_USER_TYPE,
      payload: res.data,
    });
  } catch (err) {
    if (err) console.log(err.response?.data?.data, { err });
    if (err?.response?.status === 429) toast.error(err?.response?.data);
    dispatch({ type: GET_USER_TYPE_FAIL });
  }
};

export const imageUpload = async (images) => {
  let imgArr = [];
  for (const item of images) {
    // console.log({ item });
    let post = new FormData();
    post.append(`file`, item);

    let res = await axios.post(`/api/v1/file`, post, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = await res?.data?.data;
    // console.log({ data });
    Array.isArray(data) ? (imgArr = [...imgArr, ...data]) : imgArr.push(data);
  }
  return imgArr;
};
