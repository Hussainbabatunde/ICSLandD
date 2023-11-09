import { combineReducers } from "redux";
import UserReducer, { SessionReducer } from "./UserReducer";
import ErrorReducer, {
	DiscussionReducer,
	NotificationReducer,
	PlanReducer,
} from "./ErrorReducer";
import {
	CourseEnrollReducer,
	CourseReducer,
	TaskReducer,
} from "./CourseReducer";
import ChatReducer, { socketReducer } from "./ChatReducer";

const rootReducer = combineReducers({
	auth: UserReducer,
	error: ErrorReducer,
	plan: PlanReducer,
	course: CourseReducer,
	notification: NotificationReducer,
	discussion: DiscussionReducer,
	tasks: TaskReducer,
	enroll: CourseEnrollReducer,
	socket: socketReducer,
	chats: ChatReducer,
	session: SessionReducer,
});

export default rootReducer;
