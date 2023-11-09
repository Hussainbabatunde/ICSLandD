/* eslint-disable react/prop-types */
import { createContext } from "react";
import { BiCategoryAlt, BiBook, BiBookReader } from "react-icons/bi";
import { RxPencil2 } from "react-icons/rx";
import { BsChatSquareDots } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { ImCogs } from "react-icons/im";
import { FaScroll } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { connect, useSelector } from "react-redux";
import {
	loginUser,
	registerUser,
	updatePassword,
	updateUser,
	logoutUser,
} from "./Actions/UserActions";

import { clearErrors, returnErrors } from "./Reducers/ErrorReducer";

import { manageNotify, getNotify } from "./Actions/NotificationAction";
import {
	manageCourses,
	manageTasks,
	getCourses,
	getCoursesToEnroll,
	manageSession,
} from "./Actions/CoursesAction";
import {
	socketProfile,
	socketOnline,
	getAllMessages,
	getChatMessage,
	createSendChat,
	updateDeliveredSeen,
	socketAddUserMessage,
	socketUpdateMessage,
} from "./Reducers/ChatReducer";

export const GlobalState = createContext();

const DataProvider = ({
	children,
	loginUser,
	registerUser,
	updatePassword,
	updateUser,
	logoutUser,
	clearErrors,
	returnErrors,
	manageNotify,
	getNotify,
	manageCourses,
	manageTasks,
	getCourses,
	getCoursesToEnroll,
	socketProfile,
	socketOnline,
	getAllMessages,
	getChatMessage,
	createSendChat,
	updateDeliveredSeen,
	socketAddUserMessage,
	socketUpdateMessage,
	manageSession,
}) => {
	let handleCapitalize = word => {
		let splitter = word.trim().split(" ");
		let firstCap = splitter[0].split("");
		let remaining = splitter.slice(1, splitter.length).join(" ");

		let firstCapOne = firstCap[0].toUpperCase();
		let firstCapTwo = firstCap.slice(1, firstCap.length).join("");

		let joinFirst = `${firstCapOne}${firstCapTwo}`;

		return `${joinFirst} ${remaining}`;
	};

	let numberWithCommas = x => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	let {
		auth,
		error,
		plan,
		course,
		notification,
		discussion,
		tasks,
		enroll,
		socket,
		chats,
		session,
	} = useSelector(state => state);

	let sidebarList = [
		{
			name: "Dashboard",
			url: "/dashboard",
			icon: <BiCategoryAlt className="icon" size={24} />,
		},
		{
			name: "Courses",
			url: "/courses",
			icon: <BiBook className="icon" size={24} />,
		},
		{
			name: "Tasks",
			url: "/tasks",
			icon: <RxPencil2 className="icon" size={24} />,
		},
		{
			name: "book session",
			url: "/book-session",
			icon: <BiBookReader className="icon" size={24} />,
		},
		{
			name: "Chats",
			url: "/chats",
			icon: <SlBadge className="icon" size={24} />,
		},
		{
			name: "Notifications",
			url: "/notifications",
			icon: <BsChatSquareDots className="icon" size={24} />,
		},
		{
			name: "Enroll",
			url: "/enroll",
			icon: <FaScroll className="icon" size={24} />,
		},
		{
			name: "Certificates",
			url: "/certificates",
			icon: <TbCertificate className="icon" size={24} />,
		},
		{
			name: "Settings",
			url: "/settings",
			icon: <ImCogs className="icon" size={24} />,
		},
	];

	const state = {
		handleCapitalize,

		numberWithCommas,

		sidebarList,
		auth,
		error,
		loginUser,
		registerUser,
		updatePassword,
		updateUser,
		logoutUser,
		clearErrors,
		returnErrors,
		plan,
		course,
		notification,
		manageNotify,
		getNotify,
		discussion,
		manageCourses,
		tasks,
		manageTasks,

		enroll,
		getCourses,
		getCoursesToEnroll,
		socket,
		chats,
		socketProfile,
		socketOnline,
		getAllMessages,
		getChatMessage,
		createSendChat,
		updateDeliveredSeen,
		socketAddUserMessage,
		socketUpdateMessage,

		session,
		manageSession,
	};

	return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

export default connect(null, {
	loginUser,
	registerUser,
	updatePassword,
	updateUser,
	logoutUser,
	clearErrors,
	returnErrors,
	manageNotify,
	getNotify,
	manageCourses,
	manageTasks,
	getCourses,
	getCoursesToEnroll,
	socketProfile,
	socketOnline,
	getAllMessages,
	getChatMessage,
	createSendChat,
	updateDeliveredSeen,
	socketAddUserMessage,
	socketUpdateMessage,
	manageSession,
})(DataProvider);
