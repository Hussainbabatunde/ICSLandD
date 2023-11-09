// import ChatComponent from "../../Components/chatComponent";
// import { BsDot } from "react-icons/bs";

import { DefaultRight, LeftSide } from "../../Components/Chats";
import { useChatLeftSide } from "../../Components/Chats/useChat";

const Chats = () => {
	const { stateChatsUser } = useChatLeftSide();

	return (
		<section className="tw-mt-5 container">
			<div className="md:tw-flex tw-gap-4">
				{/* <div className="md:tw-w-1/3">
					<div className="tw-flex tw-gap-4 bg-white tw-p-2 tw-rounded-lg tw-mx-2">
						<p
							className="tw-italic tw-bg-[#4D73AC] tw-py-4 tw-w-1/2 text-center text-white tw-rounded-lg tw-cursor-pointer"
							style={{ fontFalmily: "Sansation_light" }}>
							Students
						</p>
						<p
							className="tw-italic tw-py-4 tw-w-1/2 text-center tw-cursor-pointer"
							style={{ fontFalmily: "Sansation_light" }}>
							Tutors
						</p>
					</div>
					<div>
						<ChatComponent />
						<ChatComponent />
						<ChatComponent />
						<ChatComponent />
						<ChatComponent />
					</div>
				</div>
				<div className="tw-hidden md:tw-block tw-w-2/3 tw-bg-[#EAF6FF] tw-p-8">
					<div className="tw-flex tw-items-center tw-gap-4 tw-p-4 tw-rounded-xl tw-mt-4">
						<img src={require("../../assets/chat-2.png")} alt="" />
						<div>
							<p
								className="tw-text-lg"
								style={{ fontFamily: "Sansation_bold" }}>
								Admin Name
							</p>
							<span
								className="tw-text-sm tw-text-[#007DB3] tw-flex tw-items-center tw-gap2"
								style={{ fontFamily: "Sansation_light" }}>
								<span>
									<BsDot size={"20px"} />
								</span>{" "}
								Online
							</span>
						</div>
					</div>
				</div> */}
				<LeftSide stateChatsUser={stateChatsUser} css="tw-block" />
				<DefaultRight css="tw-hidden md:tw-block" />
			</div>
		</section>
	);
};

export default Chats;
