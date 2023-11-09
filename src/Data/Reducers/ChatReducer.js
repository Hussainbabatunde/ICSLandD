import { toast } from "react-toastify";
import axios from "axios";
import {
	CHAT_ADD_MESSAGE,
	CHAT_ADD_MESSAGE_FAIL,
	CHAT_GET_MESSAGES,
	CHAT_GET_MESSAGES_FAIL,
	CHAT_LOADING,
	CHAT_LOADING_MAIN,
	CHAT_RELOAD,
	CHAT_UPDATE_MESSAGE,
	CHAT_UPDATE_MESSAGE_FAIL,
	GET_CHAT,
	GET_CHAT_LOADING,
	LOGOUT,
	SOCKET,
	SOCKET_ONLINE,
} from "../Actions/ActionTypes";
import { imageUpload } from "../Actions/UserActions";

const initialSocket = {
	socket: null,
	user: [],
};

export const socketReducer = (state = initialSocket, { type, payload }) => {
	switch (type) {
		case SOCKET:
			return {
				...state,
				socket: payload,
			};
		case SOCKET_ONLINE:
			return { ...state, user: payload };
		case LOGOUT:
			return initialSocket;
		default:
			return state;
	}
};

export const socketProfile = socket => async dispatch => {
	dispatch({ type: SOCKET, payload: socket });
};

export const socketOnline = socket => async dispatch => {
	dispatch({ type: SOCKET_ONLINE, payload: socket });
};

const initialState = {
	isOpened: false,
	messages: [],
	isSent: false,
	mainLoading: false,
	loading: false,
	chats: [],
	isLoading: false,
	newMessage: null,
	isUpdated: null,
	allChats: [],
};

const ChatReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHAT_GET_MESSAGES:
			return { ...state, messages: payload, mainLoading: false };
		case GET_CHAT:
			return { ...state, chats: payload, isLoading: false };
		case GET_CHAT_LOADING:
			return { ...state, isLoading: true };
		case CHAT_ADD_MESSAGE:
			return {
				...state,
				newMessage: payload,
				isSent: true,
				loading: false,
				allChats: [...state.allChats, payload],
			};
		case CHAT_UPDATE_MESSAGE:
			return {
				...state,
				isUpdated: true,
				newMessage: payload,
			};
		case CHAT_GET_MESSAGES_FAIL:
		case CHAT_ADD_MESSAGE_FAIL:
		case CHAT_UPDATE_MESSAGE_FAIL:
			return {
				...state,
				messages: state.messages,
				isSent: false,
				mainLoading: false,
				loading: false,
				isLoading: false,
				chats: state.chats,
				isUpdated: false,
			};
		case CHAT_RELOAD:
			return { ...state, isSent: false, isUpdated: false };
		case CHAT_LOADING:
			return { ...state, loading: true };
		case CHAT_LOADING_MAIN:
			return { ...state, mainLoading: true };
		default:
			return state;
	}
};

export default ChatReducer;

export const getAllMessages = data => async dispatch => {
	if (data === "load") dispatch({ type: CHAT_LOADING_MAIN });
	try {
		let res = await axios.get(`/api/v1/chat`);

		dispatch({ type: CHAT_GET_MESSAGES, payload: res?.data?.data });

		// console.log(res.data);
	} catch (err) {
		let error = err?.response?.data?.error;
		if (error) {
			error.forEach(error => toast.error(error.msg));
			dispatch({ type: CHAT_GET_MESSAGES_FAIL });
		}
		console.log({ err: err.response, error });
		if (err?.response?.status === 429) toast.error(err?.response?.data);
	}
};

export const getChatMessage = id => async dispatch => {
	dispatch({ type: GET_CHAT_LOADING });
	try {
		let res = await axios.get(`/api/v1/chat/${id}`);

		dispatch({ type: GET_CHAT, payload: res?.data?.data });

		// console.log(res.data);
	} catch (err) {
		let error = err?.response?.data?.error;
		if (error) {
			error.forEach(error => toast.error(error.msg));
			dispatch({ type: CHAT_GET_MESSAGES_FAIL });
		}
		console.log({ err: err.response, error });
		if (err?.response?.status === 429) toast.error(err?.response?.data);
	}
};

export const createSendChat = data => async dispatch => {
	try {
		dispatch({ type: CHAT_LOADING });
		let media;
		if (data?.type === "file") {
			media = await imageUpload(data?.file);
		}
		let res = await axios.post(
			`/api/v1/chat`,
			data?.type === "file" ? { ...data, file: media } : { ...data }
		);
		dispatch({ type: CHAT_ADD_MESSAGE, payload: res.data.data });
	} catch (err) {
		console.log({ err: err?.response });
		let error = err.response?.data?.data;
		console.log({ error });
		if (error) {
			error.forEach(error => toast.error(error.msg));
			dispatch({ type: CHAT_ADD_MESSAGE_FAIL });
		}
		if (err?.response?.status === 429) toast.error(err?.response?.data);
	}
};

export const reloadSendChatbox = () => async dispatch => {
	dispatch({ type: CHAT_RELOAD });
};

export const updateDeliveredSeen = id => async dispatch => {
	try {
		if (id) {
			await axios.put(`/api/v1/chat/${id}`);
		}
	} catch (err) {
		let error = err.response?.data?.data;
		if (error) {
			error.forEach(error => toast.error(error.msg));
			dispatch({ type: CHAT_UPDATE_MESSAGE_FAIL });
		}
		console.log({ err: err.response, error });
		if (err?.response?.status === 429) toast.error(err?.response?.data);
	}
};

export const socketAddUserMessage = data => async dispatch => {
	dispatch({ type: CHAT_ADD_MESSAGE, payload: data });
};

export const socketUpdateMessage = data => async dispatch => {
	// dispatch({ type: CHAT_UPDATE_MESSAGE, payload: data });
	dispatch(getChatMessage(data?.chatId));
};
