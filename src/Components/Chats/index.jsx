import { useContext, useEffect, useState, useMemo } from "react";
import {
	Link,
	useNavigate,
	useParams,
	useSearchParams,
} from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { GlobalState } from "../../Data/Context";
import moment from "moment";
import logo from "../../assets/logo.png";
import useUser from "./useUser";
import {
	BiArrowBack,
	BiCheck,
	BiCheckDouble,
	BiLink,
	BiLoader,
} from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import { Buttons, EmptyComponent } from "../../Utils";
import { RiSendPlaneFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { Container } from "reactstrap";

export const LeftSide = ({ stateChatsUser, css }) => {
	const { chats, auth } = useContext(GlobalState);

	let [chatList, setChatList] = useState(null),
		[active, setActive] = useState("admin");

	useMemo(() => {
		if (stateChatsUser) {
			setChatList(
				stateChatsUser?.filter(item => {
					let user = item?.recipients?.filter(
						list => list?._id !== auth?.user?._id
					);
					return active === "admin"
						? user?.[0]?.isAdmin
						: user?.[0]?.privilege === active;
				})
			);
		}
	}, [stateChatsUser, auth?.user, active]);

	// console.log({ stateChatsUser, chatList });

	return (
		<>
			<div className={`md:tw-w-1/3 aboutScreen ${css || ""}`}>
				<div className="">
					{chats?.mainLoading ? (
						<div className="d-flex justify-content-center align-items-center mt-4">
							<MoonLoader className="textColor2" size={24} />
						</div>
					) : (
						<>
							<div className="tw-flex tw-gap-4 bg-white tw-p-2 tw-rounded-lg tw-mx-2">
								<p
									className={`"tw-italic tw-py-4 tw-w-1/2 text-center tw-cursor-pointer ${
										active === "admin"
											? "tw-bg-[#4D73AC] text-white tw-rounded-lg"
											: ""
									}`}
									onClick={() => setActive("admin")}
									style={{ fontFalmily: "Sansation_light" }}>
									Admin
								</p>
								<p
									onClick={() => setActive("tutor")}
									className={`tw-italic tw-py-4 tw-w-1/2 text-center tw-cursor-pointer ${
										active === "tutor"
											? "tw-bg-[#4D73AC] text-white tw-rounded-lg"
											: ""
									}`}
									style={{ fontFalmily: "Sansation_light" }}>
									Tutors
								</p>
							</div>
							{chatList?.length === 0 ? (
								<EmptyComponent subtitle={"No frequent conversation yet"} />
							) : (
								chatList?.map((item, index) => (
									<div className="myCursor" key={index}>
										<SingleView message={item} />
									</div>
								))
							)}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export const DefaultRight = ({ css }) => {
	return (
		<>
			<div
				className={`${
					css ? css : ""
				} tw-w-2/3 tw-bg-[#EAF6FF] tw-p-8 tw-h-full aboutScreen`}>
				<div
					className="d-flex justify-content-center 
                align-items-center flex-column h-100 m-auto">
					<img src={logo} alt="logo" className="img-fluid my-3" />
					<small style={{ fontFamily: "Sansation_light" }} className="d-block">
						Interact with others seamlessly
					</small>
				</div>
			</div>
		</>
	);
};

const SingleView = ({ message }) => {
	const { auth, socketList } = useContext(GlobalState);
	let [stateUser, setStateUser] = useState(null);
	useEffect(() => {
		if (message && auth?.user) {
			let user = message?.recipients?.filter(
				list => list?._id !== auth?.user?._id
			);

			setStateUser(user?.[0]);
		}
	}, [message, auth?.user]);

	return (
		<>
			<Link
				className="text-dark text-decoration-none tw-flex tw-items-center tw-gap-4 tw-bg-[#F6F8FC] tw-p-4 tw-rounded-xl tw-mt-4"
				to={`/chats/${stateUser?.slug}?type=slug
				&chat=${message?._id}
			`}>
				<UserCardImage state={stateUser}>
					{socketList?.find(
						item =>
							message?.forum === "personal" &&
							item?.userId === stateUser?._id &&
							item?.isOnline
					) ? (
						<FaCircle
							className="text-success-2 position-absolute"
							style={{ bottom: 0, right: "10px" }}
						/>
					) : null}
				</UserCardImage>
				<div className="">
					<h6
						style={{ fontFamily: "Sansation_light" }}
						className="textTrunc tw-italic text-muted d-flex align-items-center">
						{stateUser?.firstName} {stateUser?.lastName}{" "}
						{/* <BadgeType state={stateUser} noBadge /> */}
						<span className="d-flex">
							<small
								style={{ fontFamily: "Sansation_light" }}
								className={`text-capitalize fontReduce ${
									message?.counter && message?.counter > 0 ? "textColor" : ""
								} tw-text-xs tw-ml-8`}>
								{moment(message?.lastMessage?.createdAt).diff(
									moment(),
									"years"
								) < 0
									? moment(message?.lastMessage?.createdAt).format("L hh:mm A")
									: moment(message?.lastMessage?.createdAt).diff(
											moment(),
											"months"
									  ) < 0
									? moment(message?.lastMessage?.createdAt).format(
											"DD/MM hh:mm A"
									  )
									: moment(message?.lastMessage?.createdAt).diff(
											moment(),
											"days"
									  ) < 0
									? moment(message?.lastMessage?.createdAt).format(
											"DD/MM hh:mm A"
									  )
									: moment(message?.lastMessage?.createdAt).format("hh:mm A")}
							</small>
							<small className="bg-select mx-auto rounded-pill px-2 fontReduce">
								{message?.counter && message?.counter > 0
									? message?.counter
									: ""}
							</small>
						</span>
					</h6>
					<small
						style={{ fontFamily: "Sansation_light" }}
						className="textTrunc fontReduce">
						{message?.lastMessage?.content}
					</small>
				</div>
			</Link>
		</>
	);
};

export const RightSide = ({ stateChatsUser, css }) => {
	const {
			auth,
			createSendChat,
			updateDeliveredSeen,
			chats,
			getAllMessages,
			getChatMessage,
		} = useContext(GlobalState),
		[user, setUser] = useState(null),
		{ stateUser } = useUser();

	let [loading, setLoading] = useState(false),
		[submit, setSubmit] = useState(false),
		[stateMessages, setStateMessages] = useState(null),
		[getSearch] = useSearchParams(),
		[loadingType, setLoadingType] = useState(""),
		[message, setMessage] = useState(""),
		[file, setFile] = useState(false),
		params = useParams(),
		navigate = useNavigate();

	useEffect(() => {
		if (submit && chats.isSent) {
			setTimeout(() => {
				setSubmit(false);
			}, 1000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [submit, chats.isSent]);

	useEffect(() => {
		if (getSearch?.get("chat")) {
			let getFunc = async () => {
				await getChatMessage(getSearch?.get("chat"));
				await updateDeliveredSeen(getSearch?.get("chat"));
			};
			getFunc();
		}
		if (getSearch?.get("user")) {
			stateChatsUser?.filter(item => {
				let user = item?.recipients?.find(
					list => list?._id === getSearch?.get("user")
				);

				if (user) {
					navigate(
						`/chats/${getSearch?.get("slug")}?chat=${
							item?._id
						}&type=slug&user=${user?.isAdmin ? "admin" : user?.privilege}`
					);
				}
				return user;
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getSearch]);

	useEffect(() => {
		if (getSearch?.get("chat") && chats?.chats) {
			if (chats?.chats?.[0]?.chatId === getSearch?.get("chat")) {
				setStateMessages(chats?.chats);
			} else {
				setStateMessages(
					chats?.allChats?.filter(
						item => item?.chatId === getSearch?.get("chat")
					)
				);
			}
		}
	}, [getSearch, chats?.chats, chats?.allChats]);

	useEffect(() => {
		if (submit && chats.isSent && chats?.newMessage) {
			if (chats?.newMessage?.chatId === getSearch?.get("chat")) {
				let newMess = stateMessages?.map(item =>
					item?.initId === chats?.newMessage?.initId ? chats?.newMessage : item
				);
				setStateMessages(newMess);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [submit, chats.isSent, chats?.newMessage]);

	useEffect(() => {
		if (chats.isSent && chats?.newMessage) {
			if (chats?.newMessage?.chatId === getSearch?.get("chat")) {
				let newMess;
				let finde = stateMessages?.find(
					item => item?.initId === chats?.newMessage?.initId
				);
				if (finde)
					newMess = stateMessages?.map(item =>
						item?.initId === chats?.newMessage?.initId
							? chats?.newMessage
							: item
					);
				else {
					newMess = stateMessages ? [...stateMessages, chats?.newMessage] : [];
				}
				setStateMessages(newMess);
				if (
					getSearch?.get("chat") &&
					chats?.newMessage?.to?._id === auth?.user?._id
				) {
					updateDeliveredSeen(getSearch?.get("chat"));
				}
				getAllMessages();
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chats.isSent, chats?.newMessage]);

	useEffect(() => {
		if (chats.isSent && chats?.newMessage && !getSearch?.get("chat")) {
			if (chats?.newMessage?.reciever?.slug === params.id) {
				let newMess;
				let finde = stateMessages?.find(
					item => item?.initId === chats?.newMessage?.initId
				);
				if (finde)
					newMess = stateMessages?.map(item =>
						item?.initId === chats?.newMessage?.initId
							? chats?.newMessage
							: item
					);
				else {
					newMess = stateMessages ? [...stateMessages, chats?.newMessage] : [];
				}
				setStateMessages(newMess);
				setFile(null);
				if (
					getSearch?.get("chat") &&
					chats?.newMessage?.to?._id === auth?.user?._id
				) {
					updateDeliveredSeen(getSearch?.get("chat"));
				}
				getAllMessages();
				navigate(
					`/chats/${chats?.newMessage?.reciever?.slug}?chat=${
						chats?.newMessage?.chatId
					}&type=slug&user=${user?.isAdmin ? "admin" : "user"}`
				);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chats.isSent, chats?.newMessage, params.id]);

	useEffect(() => {
		if (file) handleSendFile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [file]);

	let handleSendMessage = async e => {
		e.preventDefault();
		if (!message) return;
		if (message.trim().length === 0) return;
		// console.log({ message });
		setLoading(true);
		setLoadingType("message");
		// await updateChats({ content: message, chatId: mainBids?.chat?._id });

		let data = {
			content: message,
			type: "text",
			reciever: stateUser?._id,
			initTime: Date.now(),
			initId: v4(),
			sender: auth?.user,
			chatId: getSearch?.get("chat") ? getSearch?.get("chat") : "",
		};
		// console.log({ data });
		setStateMessages(stateMessages ? [...stateMessages, data] : [data]);
		setMessage("");
		window.scrollTo(0, document.body.scrollHeight);

		if (getSearch?.get("chat")) {
			await updateDeliveredSeen(getSearch?.get("chat"));
		}
		await createSendChat(data);
		setLoading(false);
		setLoadingType("");
		setSubmit(true);
	};

	let handleSendFile = async () => {
		if (!file) return;
		// console.log({ file });
		setLoading(true);
		setLoadingType("file");
		let data = {
			type: "file",
			reciever: stateUser?._id,
			initTime: Date.now(),
			initId: v4(),
			sender: auth?.user,
			chatId: getSearch?.get("chat") ? getSearch?.get("chat") : "",
			file,
		};

		setStateMessages(stateMessages ? [...stateMessages, data] : [data]);
		window.scrollTo(0, document.body.scrollHeight);

		if (getSearch?.get("chat")) {
			await updateDeliveredSeen(getSearch?.get("chat"));
		}
		await createSendChat(data);
		setLoading(false);
		setLoadingType("");
		setSubmit(true);
	};

	let handleChangeImage = e => {
		const files = [...e.target.files];
		let err = "",
			newImages = [];

		files.forEach(file => {
			if (!file) return (err = "File does not exist");
			if (!file.type.includes("image"))
				return (err = `File, ${file?.name} format not supported`);
			return newImages.push(file);
		});
		if (err) {
			return toast.error(err);
		} else {
			setFile(file ? [...file, ...newImages] : [...newImages]);
		}
	};

	useEffect(() => {
		let receptOne, item;
		if (stateChatsUser && getSearch?.get("chat")) {
			receptOne = stateChatsUser?.find(
				item => item?._id === getSearch?.get("chat")
			);
		}
		if (receptOne) {
			item = receptOne?.recipients?.find(i => i?.user?._id !== auth?.user?._id);
		}
		if (stateUser) setUser(stateUser);
		else if (stateChatsUser?.length > 0) setUser(item?.user);
	}, [stateChatsUser, stateUser, auth?.user, getSearch]);
	// console.log({ stateChatsUser });
	return (
		<>
			<div
				className={`${
					css ? css : ""
				} tw-w-2/3 tw-bg-[#EAF6FF] tw-py-4 tw-px-2 tw-h-full d-flex flex-column aboutScreen`}>
				<TopMessages user={user} />
				<div className="chatScreen pb-5 position-relative" id="div1">
					<Container>
						{chats?.loadChat ? (
							<div className="my-3 d-flex">
								<MoonLoader className="textColor2 mx-auto" size={24} />
							</div>
						) : (
							<>
								{stateMessages
									?.filter(e => e)
									?.sort(
										(itA, itB) =>
											moment(itA?.createdAt) - moment(itB?.createdAt)
									)
									?.map((item, index) => (
										<MessagePanel item={item} key={index} user={user} />
									))}
							</>
						)}
					</Container>
				</div>
				<div className="sticky-bottom mainTabs w-100 py-1 d-flex justify-content-around align-items-center bg-white mainMaxWidth mt-auto d-flex flex-column rounded-pill">
					<form className="rounded py-1 w-100 mx-2 d-flex align-items-center px-3">
						<input
							type="text"
							className="form-control py-3 w-100 me-1 fontReduce bg-transparent fontReduce borderNone border-0"
							value={message}
							onChange={e => setMessage(e.target.value)}
							placeholder="Type your message here"
							autoFocus
						/>
						<div className="d-flex align-items-center btn-group">
							<div className="file_upload d-flex myCursor btn">
								<Buttons
									// loading={loadingType === "file" && loading}
									disabled={loadingType === "file" && loading}
									loadCss={"textColor2 bg-select-2 "}
									css="bg-light"
									title=" "
									type="button"
									width={"auto"}>
									<BiLink
										title="Upload image"
										className="textColor2"
										size={20}
									/>
								</Buttons>
								<input
									title="Upload file"
									type="file"
									name="file"
									id="file"
									multiple
									className="myCursor"
									accept="image/*"
									onChange={handleChangeImage}
								/>
							</div>
							<Buttons
								// disabled={loadingType === "message" && loading}
								loadCss={"textColor2 bg-primary1 "}
								// loading={loadingType === "message" && loading}
								css="bg-light"
								title=" "
								width={"auto"}
								type={"submit"}
								onClick={handleSendMessage}>
								<RiSendPlaneFill className="textColor2" size={20} />
							</Buttons>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export let handleScroll = (setIsShadow, length) => {
	let number = length ? Number(length) : 100;
	window.onscroll = () => {
		if (window.scrollY > number) setIsShadow(true);
		else setIsShadow(false);
	};
};

export const TopMessages = ({ user, dropdown }) => {
	let navigate = useNavigate(),
		[isShadow, setIsShadow] = useState(false);

	useEffect(() => {
		handleScroll(setIsShadow);

		return () => setIsShadow(false);
	}, []);

	if (!user) return;

	return (
		<>
			<header
				className={`tw-flex tw-items-center tw-gap-4 tw-p-4 tw-rounded-xl ${
					isShadow ? "shadow" : ""
				}`}>
				<BiArrowBack
					onClick={() => navigate(-1)}
					className="myCursor pe-1"
					size={24}
				/>
				<UserCard state={user} rounded="rounded-circle" />
			</header>
		</>
	);
};

export const UserCardImage = ({ state, children, rounded }) => {
	return (
		<div className="position-relative">
			<img
				src={
					state?.avatar?.url
						? state?.avatar?.url
						: require("../../assets/chat-2.png")
				}
				loading="lazy"
				alt={state?.firstName}
				className={`me-3 ${rounded || ""}`}
				style={{ height: "3.5rem", width: "3.5rem" }}
			/>
			{children ? (
				children
			) : (
				<div className="position-absolute" style={{ bottom: 0, right: "10px" }}>
					<UserOnlineCheck state={state} />
				</div>
			)}
		</div>
	);
};

export const UserCard = ({ state, rounded = "" }) => {
	const { socketList } = useContext(GlobalState);
	// console.log({ state });
	return (
		<Link
			to={
				state?.isAdmin
					? `#`
					: state?.privilege === "tutor"
					? `/tutors/${state?.slug}`
					: `/students/profile/${state?.slug}`
			}
			className="d-flex align-items-center text-decoration-none text-dark">
			<UserCardImage state={state} rounded={rounded} />
			<div className="">
				<h6
					style={{ fontFamily: "Sansation_bold" }}
					className="fw-bold textTrunc fontReduce m-0">
					{state?.firstName} {state?.lastName}{" "}
					{/* <BadgeType state={state} noBadge /> */}
				</h6>
				{socketList?.find(item => item?.userId === state?._id) ? (
					<span className="fontReduce">online</span>
				) : null}
			</div>
		</Link>
	);
};

export let ChatImage = ({ data, bg }) => {
	let [err, setErr] = useState(false);

	let errorHandler = () => setErr(true);

	useEffect(() => {
		return () => setErr(false);
	}, [data]);

	return (
		<div className={`${bg ? bg : "bg-white"} h-100`}>
			{err ? (
				<div className="d-flex justify-content-center align-items-center h-100">
					<p className="fontReduce text-capitalize">could not load resources</p>
				</div>
			) : (
				<img
					alt="img"
					src={data}
					className="w-100 h-100"
					onError={errorHandler}
					loading="lazy"
					style={{
						maxHeight: "40vh",
						objectFit: "contain",
					}}
				/>
			)}
		</div>
	);
};

export const MessagePanel = ({ item, user }) => {
	const { auth } = useContext(GlobalState);
	// console.log({ item });
	return (
		<div className="d-flex my-2">
			<div
				className={`w-65 p-3 ${
					item?.sender?._id === auth?.user?._id
						? "ms-auto border-rounded-1 text-white"
						: "me-auto bg-light border-rounded-2"
				}`}
				style={{
					background:
						item?.sender?._id === auth?.user?._id ? "#0F0BC7" : "#A4BCEB",
				}}>
				{item?.type === "file" ? (
					item?.file.map((ite, ini) => (
						<ChatImage
							key={ini}
							data={ite?.url ? ite?.url : URL.createObjectURL(ite)}
							bg={
								item?.sender?._id === auth?.user?._id ? "bg-white" : "bg-light"
							}
						/>
					))
				) : (
					<p
						className={`${
							item?.sender?._id === auth?.user?._id
								? "text-white"
								: "textColor2"
						} textColor2 m-0`}>
						{item?.content}
					</p>
				)}
				<div className="d-flex">
					<small className="ms-auto d-flex align-items-center">
						{moment(item?.createdAt ? item?.createdAt : item?.initTime).diff(
							moment(),
							"years"
						) < 0
							? moment(
									item?.createdAt ? item?.createdAt : item?.initTime
							  ).format("L hh:mm A")
							: moment(item?.createdAt ? item?.createdAt : item?.initTime).diff(
									moment(),
									"months"
							  ) < 0
							? moment(
									item?.createdAt ? item?.createdAt : item?.initTime
							  ).format("DD/MM hh:mm A")
							: moment(item?.createdAt ? item?.createdAt : item?.initTime).diff(
									moment(),
									"days"
							  ) < 0
							? moment(
									item?.createdAt ? item?.createdAt : item?.initTime
							  ).format("DD/MM hh:mm A")
							: moment(
									item?.createdAt ? item?.createdAt : item?.initTime
							  ).format("hh:mm A")}
						<span className="ms-2">
							{item?.sender?._id === auth?.user?._id &&
								(item?.isDeliveredTo?.includes(user?._id) ? (
									<BiCheckDouble
										className={`fontReduce ${
											item?.isSeenTo?.includes(user?._id)
												? "text-success-2"
												: "text-dark"
										}`}
									/>
								) : item?.isSent ? (
									<BiCheck className="fontReduce" />
								) : (
									<BiLoader className="fontReduce" />
								))}
						</span>
					</small>
				</div>
			</div>
		</div>
	);
};

export const UserOnlineCheck = ({ state }) => {
	let { socketList } = useContext(GlobalState);
	return (
		<>
			{socketList?.find(
				item => item?.userId === state?._id && item?.isOnline
			) ? (
				<div title="Online status" className="myCursor">
					<FaCircle className="text-success-2" />
				</div>
			) : null}
		</>
	);
};
