import {
	ADD_SESSION,
	ADD_SESSION_FAIL,
	GET_COURSES,
	GET_COURSES_FAIL,
	GET_COURSES_LOADING,
	GET_COURSES_TO_ENROLL,
	GET_COURSES_TO_ENROLL_LOADING,
	GET_SESSION,
	GET_TASK,
	GET_TASK_FAIL,
	SEARCH_COURSES,
	SEARCH_COURSES_LOADING,
	SEARCH_COURSES_TO_ENROLL,
	SEARCH_COURSES_TO_ENROLL_LOADING,
	UPDATE_COURSES,
	UPDATE_SESSION,
	UPDATE_TASK,
} from "./ActionTypes";
import axios from "axios";
import { toast } from "react-toastify";
import { returnErrors } from "../Reducers/ErrorReducer";

export const getCourses = (data, type) => async dispatch => {
	if (data?.search)
		dispatch({ type: SEARCH_COURSES_LOADING, payload: data?.search });
	if (!data?.search && !data?.page) dispatch({ type: GET_COURSES_LOADING });
	try {
		let res = await axios.get(
			`/api/v1/course?type=${type || "all"}${
				data?.page ? `&page=${data?.page}` : ""
			}${data?.search ? `&search=${data?.search}` : ""}`
		);
		dispatch({
			type: data?.search ? SEARCH_COURSES : GET_COURSES,
			payload: res.data,
			data,
		});
	} catch (err) {
		if (err) console.log(err.response?.data?.data, { err });
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		dispatch({
			type: GET_COURSES_FAIL,
		});
	}
};

export const getCoursesToEnroll = (data, type) => async dispatch => {
	if (data?.search)
		dispatch({ type: SEARCH_COURSES_TO_ENROLL_LOADING, payload: data?.search });
	if (!data?.search && !data?.page)
		dispatch({ type: GET_COURSES_TO_ENROLL_LOADING });
	try {
		let res = await axios.get(
			`/api/v1/course?type=${type || "all"}&enroll=yes${
				data?.page ? `&page=${data?.page}` : ""
			}${data?.search ? `&search=${data?.search}` : ""}`
		);
		dispatch({
			type: data?.search ? SEARCH_COURSES_TO_ENROLL : GET_COURSES_TO_ENROLL,
			payload: res.data,
			data,
		});
	} catch (err) {
		if (err) console.log(err.response?.data?.data, { err });
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		dispatch({
			type: GET_COURSES_FAIL,
		});
	}
};

export const manageCourses = (data, type) => async dispatch => {
	try {
		let res = await axios.post(`/api/v1/reviews${type ? `${type}` : ""}`, {
			...data,
		});
		dispatch({
			type: UPDATE_COURSES,
			payload: res.data,
		});
		toast.success(res?.data?.msg, { autoClose: 3000 });
	} catch (err) {
		if (err) console.log(err.response?.data?.data, { err });
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		dispatch({
			type: GET_COURSES_FAIL,
		});
		let error = err.response?.data?.data;
		if (error) dispatch(returnErrors({ error, status: err?.response?.status }));
	}
};

export const manageTasks = (data, update) => async dispatch => {
	try {
		var res;

		if (update)
			res = await axios.put(`/api/v1/tasks${update ? `${update}` : ""}`, {
				...data,
			});
		else
			res = await axios.get(
				`/api/v1/tasks?type=${data?.type || "all"}${
					data?.page ? `&page=${data?.page}` : ""
				}${data?.search ? `&search=${data?.search}` : ""}`
			);

		dispatch({
			type: update ? UPDATE_TASK : GET_TASK,
			payload: res.data,
		});
		if (update) toast.success(res.data.msg, { autoClose: 5000 });
	} catch (err) {
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		console.log({ err });
		let error = err.response?.data?.data;
		if (error) {
			dispatch(returnErrors({ error, status: err?.response?.status }));
		}
		dispatch({ type: GET_TASK_FAIL });
	}
};

export const manageSession = (type, data, update) => async dispatch => {
	try {
		var res;

		if (update)
			res = await axios.put(`/api/v1/booking${update ? `${update}` : ""}`, {
				...data,
			});
		else if (type === "post")
			res = await axios.post(`/api/v1/booking`, {
				...data,
			});
		else
			res = await axios.get(
				`/api/v1/booking?type=${data?.type || "all"}${
					data?.page ? `&page=${data?.page}` : ""
				}${data?.search ? `&search=${data?.search}` : ""}`
			);

		dispatch({
			type: update
				? UPDATE_SESSION
				: type === "post"
				? ADD_SESSION
				: GET_SESSION,
			payload: res.data,
		});
		if (update || type === "post")
			toast.success(res.data.msg, { autoClose: 5000 });
	} catch (err) {
		if (err?.response?.status === 429 || err?.response?.status === 405)
			toast.error(err?.response?.data ? err?.response?.data : err?.message);
		console.log({ err });
		let error = err.response?.data?.data;
		if (error) {
			dispatch(returnErrors({ error, status: err?.response?.status }));
		}
		dispatch({ type: ADD_SESSION_FAIL });
	}
};