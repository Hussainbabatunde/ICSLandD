import {
	ADD_SESSION,
	ADD_SESSION_FAIL,
	GET_SESSION,
	GET_USER,
	GET_USER_FAIL,
	GET_USER_LOADING,
	GET_USER_TYPE,
	LOGIN_USER,
	LOGIN_USER_FAIL,
	LOGOUT,
	REGISTER_USER,
	REGISTER_USER_FAIL,
	TOKEN,
	UPDATE_PASSWORD,
	UPDATE_PASSWORD_FAIL,
	UPDATE_SESSION,
	UPDATE_USER,
	UPDATE_USER_FAIL,
} from "../Actions/ActionTypes";

const initialState = {
	user: null,
	token: localStorage.getItem(TOKEN),
	isAuth: false,
	loading: false,
	isRegistered: false,
	isLoggedIn: false,
	isUpdated: false,
	isPassword: null,
	regCase: "",
	userType: null,
};

const AuthReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN_USER:
			localStorage.setItem(TOKEN, payload.token);
			return {
				...state,
				isLoggedIn: true,
				token: payload.token,
				user: payload?.data,
			};
		case REGISTER_USER:
			return {
				...state,
				isRegistered: true,
				regCase: payload?.data,
			};
		case LOGIN_USER_FAIL:
		case REGISTER_USER_FAIL:
			return {
				...state,
				isLoggedIn: false,
				isThirdPartyLoading: false,
				isRegistered: false,
			};
		case GET_USER:
			if (payload?.token) {
				localStorage.setItem(TOKEN, payload?.token);
			}
			return {
				...state,
				user: payload?.data ? payload?.data : null,
				isAuth: payload?.data ? true : false,
				loading: false,
			};
		case GET_USER_TYPE:
			return { ...state, userType: payload?.data ? payload?.data : payload };
		case GET_USER_FAIL:
			return {
				...state,
				loading: false,
				isAuth: false,
			};
		case GET_USER_LOADING:
			return {
				...state,
				loading: true,
			};
		case UPDATE_USER:
			return {
				...state,
				isUpdated: true,
				user: payload?.data,
			};
		case UPDATE_USER_FAIL:
			return { ...state, isUpdated: false };
		case UPDATE_PASSWORD:
			return { ...state, isPassword: true };
		case UPDATE_PASSWORD_FAIL:
			return { ...state, isPassword: false };
		case LOGOUT:
			localStorage.removeItem(TOKEN);
			return initialState;
		default:
			return state;
	}
};

export default AuthReducer;

export const MergedData = (data, payload) => {
	let ids = new Set(payload.map(d => d._id));
	let updatateData = [...payload, ...data.filter(d => !ids.has(d._id))];
	return updatateData?.sort((a, b) => a?.createdAt - b?.createdAt);
};

export const EditData = (data, payload) => {
	let updatateData =
		data?.length > 0
			? data.map(item => (item._id !== payload._id ? item : payload))
			: data;
	return updatateData;
};

export const DeleteData = (data, payload) => {
	let filterItem =
		data?.length > 0 ? [...data.filter(item => item._id !== payload._id)] : [];
	return filterItem;
};

let initialSession = {
	data: [],
	paginate: null,
	isAdded: false,
	isUpdated: false,
};

export const SessionReducer = (state = initialSession, action) => {
	let { type, payload } = action,
		data = payload?.data ? payload?.data : payload;
	switch (type) {
		case GET_SESSION:
			return {
				data: MergedData(state?.data, data),
				paginate: payload?.paginate,
			};
		case UPDATE_SESSION:
			return { ...state, data: EditData(state?.data, data), isUpdated: true };
		case ADD_SESSION:
			return { ...state, data: [data, ...state?.data], isAdded: true };
		case ADD_SESSION_FAIL:
			return { ...state, isAdded: false, isUpdated: false };
		case LOGOUT:
			return initialSession;
		default:
			return state;
	}
};