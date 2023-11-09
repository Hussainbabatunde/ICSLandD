import {
	GET_ERRORS,
	CLEAR_ERRORS,
	LOGOUT,
	GET_ERRORS_TEXT,
	SET_SUCCESS,
	SET_SUCCESS_FAIL,
	GET_PLANS,
	GET_NOTIFICATION,
	SEND_NOTIFICATION,
	GET_NOTIFICATION_FAIL,
	UPDATE_NOTIFICATION,
	GET_DISCUSSION,
	GET_DISCUSSION_FAIL,
	UPDATE_DISCUSSION,
} from "../Actions/ActionTypes"
import { EditData, MergedData } from "./UserReducer";

let initialState = {
	error: null,
	id: null,
	status: null,
	errorText: "",
};

const ErrorReducer = (state = initialState, action) => {
	let { type, payload } = action;
	switch (type) {
		case GET_ERRORS:
			return {
				error: payload?.error ? payload?.error : payload,
				id: payload.id,
				status: payload.status,
			};
		case GET_ERRORS_TEXT:
			return { ...state, errorText: payload };
		case CLEAR_ERRORS:
		case LOGOUT:
			return initialState;
		default:
			return state;
	}
};

let initialState2 = {
	msg: null,
};

export const SuccessReducer = (state = initialState2, action) => {
	let { type, payload } = action;
	switch (type) {
		case SET_SUCCESS:
			return {
				msg: payload,
			};
		case SET_SUCCESS_FAIL:
			return { msg: "" };
		case LOGOUT:
			return initialState2;
		default:
			return state;
	}
};

export default ErrorReducer;

export let returnErrors = (error, status, id = null) => {
	return {
		type: GET_ERRORS,
		payload: { error, status, id },
	};
};

// CLEAR ERRORS
export let clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
	};
};
export let restoreMsg = () => {
	return {
		type: SET_SUCCESS_FAIL,
	};
};

let initialState3 = {
	data: null,
};

export const PlanReducer = (state = initialState3, action) => {
	let { type, payload } = action;
	switch (type) {
		case GET_PLANS:
			return {
				data: payload?.data || payload,
			};
		default:
			return state;
	}
};

const initialState5 = {
	isLoading: false,
	all: [],
	isAdded: false,
	isUpdated: false,
	paginate: null,
	all_paginate: null,
	isDeleted: false,
};

export const NotificationReducer = (state = initialState5, action) => {
	const { type, payload } = action;
	let data = payload?.data ? payload?.data : payload;

	switch (type) {
		case GET_NOTIFICATION:
			return {
				...state,
				isLoading: false,
				all: action?.data?.page ? MergedData(state?.all, data) : data,
				paginate: !state?.paginate
					? payload?.paginate
					: action?.data?.page
					? {
							...state?.paginate,
							result: payload?.paginate?.result + state?.paginate?.result,
					  }
					: payload?.paginate,
			};
		case SEND_NOTIFICATION:
			return {
				...state,
				isAdded: true,
				outgoing: [data, ...state?.outgoing],
				all: [data, ...state?.all],
			};
		case GET_NOTIFICATION_FAIL:
			return {
				...state,
				isLoading: false,
				isUpdated: false,
				isAdded: false,
				isDeleted: false,
			};
		case UPDATE_NOTIFICATION:
			return {
				...state,
				isUpdated: true,
				all: EditData(state?.all, data),
			};
		case LOGOUT:
			return initialState5;
		default:
			return state;
	}
};

const initialState6 = {
	isLoading: false,
	data: [],
	isUpdated: false,
	paginate: null,
};

export const DiscussionReducer = (state = initialState6, action) => {
	const { type, payload } = action;
	let data = payload?.data ? payload?.data : payload;

	switch (type) {
		case GET_DISCUSSION:
			return {
				...state,
				isLoading: false,
				data: MergedData(state?.data, data),
				paginate: !state?.paginate
					? payload?.paginate
					: {
							...state?.paginate,
							result: payload?.paginate?.result + state?.paginate?.result,
					  },
			};
		case GET_DISCUSSION_FAIL:
			return {
				...state,
				isLoading: false,
				isUpdated: false,
				isAdded: false,
				isDeleted: false,
			};
		case UPDATE_DISCUSSION:
			return {
				...state,
				isUpdated: true,
				mainSearch: EditData(state?.mainSearch, data),
				data: EditData(state?.data, data),
			};
		case LOGOUT:
			return initialState6;
		default:
			return state;
	}
};