import React from "react";
import { RightSide, LeftSide } from "../../Components/Chats";
import { useChatLeftSide } from "../../Components/Chats/useChat";

const SingleMessage = () => {
	const { stateChatsUser } = useChatLeftSide();
	return (
		<section className="tw-mt-5 container">
			<div className="md:tw-flex tw-gap-4">
				<LeftSide stateChatsUser={stateChatsUser} css="tw-hidden md:tw-block" />
				<RightSide stateChatsUser={stateChatsUser} css="tw-block" />
			</div>
		</section>
	);
};

export default SingleMessage;
