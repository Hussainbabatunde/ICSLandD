import {
	GET_COURSES,
	GET_COURSES_FAIL,
	GET_COURSES_LOADING,
	GET_COURSES_TO_ENROLL,
	GET_COURSES_TO_ENROLL_LOADING,
	GET_TASK,
	GET_TASK_FAIL,
	LOGOUT,
	SEARCH_COURSES,
	SEARCH_COURSES_LOADING,
	SEARCH_COURSES_TO_ENROLL,
	SEARCH_COURSES_TO_ENROLL_LOADING,
	UPDATE_COURSES,
	UPDATE_TASK,
} from "../Actions/ActionTypes";
import { EditData, MergedData } from "./UserReducer";

const initialState = {
	isLoading: false,
	data: [],
	isUpdated: false,
	paginate: null,
	search: "",
	mainSearch: [],
	search_paginate: null,
	dashboard: null,
};

export const CourseReducer = (state = initialState, action) => {
	const { type, payload } = action;
	let data = payload?.data ? payload?.data : payload;

	switch (type) {
		case SEARCH_COURSES:
			return {
				...state,
				isLoading: false,
				mainSearch:
					payload?.seach === state?.search
						? MergedData(state?.mainSearch, data)
						: state?.mainSearch,
				search_paginate: !state?.search_paginate
					? payload?.paginate
					: payload?.seach === state?.search
					? {
							...state?.search_paginate,
							result:
								payload?.paginate?.result + state?.search_paginate?.result,
					  }
					: state?.search_paginate,
			};
		case SEARCH_COURSES_LOADING:
			return {
				...state,
				search: action.search,
				searchLoading: true,
			};
		case GET_COURSES:
			return {
				...state,
				isLoading: false,
				data: action?.data?.page ? MergedData(state?.data, data) : data,
				paginate: !state?.paginate
					? payload?.paginate
					: action?.data?.page
					? {
							...state?.paginate,
							result: payload?.paginate?.result + state?.paginate?.result,
					  }
					: payload?.paginate,
			};
		case GET_COURSES_LOADING:
			return { ...state, isLoading: true };
		case UPDATE_COURSES:
			return {
				...state,
				isUpdated: true,
				data: EditData(state?.data, data),
				mainSearch: EditData(state?.mainSearch, data),
			};
		case GET_COURSES_FAIL:
			return {
				...state,
				isLoading: false,
				isUpdated: false,
				isAdded: false,
				isDeleted: false,
			};
		case LOGOUT:
			return { ...initialState, data: state?.data, paginate: state?.paginate };
		default:
			return state;
	}
};

const initialState6 = {
	isLoading: false,
	data: [],
	isUpdated: false,
	paginate: null,
	search: "",
	mainSearch: [],
	search_paginate: null,
	dashboard: null,
};

export const CourseEnrollReducer = (state = initialState6, action) => {
	const { type, payload } = action;
	let data = payload?.data ? payload?.data : payload;

	switch (type) {
		case SEARCH_COURSES_TO_ENROLL:
			return {
				...state,
				isLoading: false,
				mainSearch:
					payload?.seach === state?.search
						? MergedData(state?.mainSearch, data)
						: state?.mainSearch,
				search_paginate: !state?.search_paginate
					? payload?.paginate
					: payload?.seach === state?.search
					? {
							...state?.search_paginate,
							result:
								payload?.paginate?.result + state?.search_paginate?.result,
					  }
					: state?.search_paginate,
			};
		case SEARCH_COURSES_TO_ENROLL_LOADING:
			return {
				...state,
				search: action.search,
				searchLoading: true,
			};
		case GET_COURSES_TO_ENROLL:
			return {
				...state,
				isLoading: false,
				data: action?.data?.page ? MergedData(state?.data, data) : data,
				paginate: !state?.paginate
					? payload?.paginate
					: action?.data?.page
					? {
							...state?.paginate,
							result: payload?.paginate?.result + state?.paginate?.result,
					  }
					: payload?.paginate,
			};
		case GET_COURSES_TO_ENROLL_LOADING:
			return { ...state, isLoading: true };
		case GET_COURSES_FAIL:
			return {
				...state,
				isLoading: false,
				isUpdated: false,
				isAdded: false,
				isDeleted: false,
			};
		case LOGOUT:
			return { ...initialState6, data: state?.data, paginate: state?.paginate };
		default:
			return state;
	}
};

let initialTask = {
	data: [],
	paginate: null,
	isUpdated: false,
};

export const TaskReducer = (state = initialTask, action) => {
	let { type, payload } = action,
		data = payload?.data ? payload?.data : payload;
	switch (type) {
		case GET_TASK:
			return {
				data: MergedData(state?.data, data),
				paginate: payload?.paginate,
			};
		case UPDATE_TASK:
			return { ...state, data: EditData(state?.data, data), isUpdated: true };
		case GET_TASK_FAIL:
			return { ...state, isAdded: false, isUpdated: false };
		case LOGOUT:
			return initialTask;
		default:
			return state;
	}
};