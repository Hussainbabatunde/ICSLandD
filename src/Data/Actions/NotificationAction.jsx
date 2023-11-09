import { returnErrors } from "../Reducers/ErrorReducer"
import {
	GET_DISCUSSION,
	GET_DISCUSSION_FAIL,
	GET_NOTIFICATION,
	GET_NOTIFICATION_FAIL,
	SEND_NOTIFICATION,
	UPDATE_DISCUSSION,
	UPDATE_NOTIFICATION,
} from "./ActionTypes";
import { toast } from "react-toastify";
import axios from "axios";

export const getNotify = data => async dispatch => {
	try {
		let res = await axios.get(
			`/api/v1/notification?type=all${data?.page ? `&page=${data?.page}` : ""}`
		);
		dispatch({
			type: GET_NOTIFICATION,
			payload: res.data,
			data,
		});
	} catch (err) {
		if (err) console.log(err.response?.data?.data, { err });
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		dispatch({
			type: GET_NOTIFICATION_FAIL,
		});
	}
};

export const manageNotify = (data, id, prior) => async dispatch => {
	try {
		let res;
		if (!id) res = await axios.post(`/api/v1/notification`, { ...data });
		else if (prior === "delete")
			res = await axios.delete(`/api/v1/notification/${id}`);
		else if (prior) res = await axios.put(`/api/v1/notification/${id}`);
		else res = await axios.post(`/api/v1/notification/${id}`);
		dispatch({
			type: id ? UPDATE_NOTIFICATION : SEND_NOTIFICATION,
			payload: res.data,
		});
		if (!id) toast.success(res?.data?.msg);
	} catch (err) {
		if (err) console.log(err.response?.data?.data, { err });
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		let error = err.response?.data?.data;
		if (error) dispatch(returnErrors({ error, status: err?.response?.status }));
		// error.forEach(error =>
		// 	error?.param
		// 		? error?.param !== "suggestion" &&
		// 		  toast.error(error.msg, { autoClose: false })
		// 		: toast.error(error.msg, { autoClose: false })
		// );
		dispatch({ type: GET_NOTIFICATION_FAIL });
	}
};

export const getDiscussions = (data, type) => async dispatch => {
	try {
		let res = await axios.get(
			`/api/v1/reviews/discussion?type=${type || "all"}${
				data?.page ? `&page=${data?.page}` : ""
			}${data?.search ? `&search=${data?.search}` : ""}`
		);
		dispatch({
			type: GET_DISCUSSION,
			payload: res.data,
		});
	} catch (err) {
		if (err) console.log(err.response?.data?.data, { err });
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		dispatch({
			type: GET_DISCUSSION_FAIL,
		});
	}
};

export const manageDiscussions = (data, id) => async dispatch => {
	try {
		let res = await axios.put(`/api/v1/reviews/discussion`, {
			action: data,
			review: id,
		});
		dispatch({
			type: UPDATE_DISCUSSION,
			payload: res.data,
		});
		toast.success(res?.data?.msg);
	} catch (err) {
		if (err) console.log(err.response?.data?.data, { err });
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		let error = err.response?.data?.data;
		if (error) dispatch(returnErrors({ error, status: err?.response?.status }));
		// error.forEach(error =>
		// 	error?.param
		// 		? error?.param !== "suggestion" &&
		// 		  toast.error(error.msg, { autoClose: false })
		// 		: toast.error(error.msg, { autoClose: false })
		// );
		dispatch({ type: GET_DISCUSSION_FAIL });
	}
};