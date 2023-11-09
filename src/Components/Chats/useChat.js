import { useContext, useState, useMemo } from "react";
import { GlobalState } from "../../Data/Context";
import $ from "jquery";

export const useChatLeftSide = () => {
	const { chats } = useContext(GlobalState),
		[stateChatsUser, setStateChatsUser] = useState([]);
	useMemo(() => {
		setStateChatsUser(chats.messages);
		$("#div1").animate({ scrollTop: $("#div1").prop("scrollHeight") }, 1000);
	}, [chats?.messages]);
	return { stateChatsUser };
};
