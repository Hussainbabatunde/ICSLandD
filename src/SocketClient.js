import React, { useContext, useEffect, useState, useRef } from "react";
import { GlobalState } from "./Data/Context";
import audio from "./assets/message-tone-checked-off.mp3";
import { io } from "socket.io-client";
import { useURL } from "./Data/Config";
import { useLocation, useSearchParams } from "react-router-dom";

const SocketClient = () => {
	const {
			socketAddUserMessage,
			auth,
			getChatMessage,
			getAllMessages,
			socketProfile,
			socketAddOrder,
			socketAddProduct,
			socketOnline,
		} = useContext(GlobalState),
		location = useLocation(),
		[getSearch] = useSearchParams(),
		audioRef = useRef();

	let [socketNew, setSocket] = useState(null);

	const setUpSocket = async () => {
		var newSocket = io(useURL, {
			query: {
				userId: auth?.user?._id,
				userType: "admin",
			},
			transports: ["websocket"],
		});
		newSocket.on("disconnect", () => {
			setSocket(null);
			setTimeout(setUpSocket, 3000);
		});
		setSocket(newSocket);
		// console.log({ ss: newSocket });
	};

	useEffect(() => {
		setUpSocket();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// console.log({ s: socketNew });
	useEffect(() => {
		if (socketNew) {
			socketProfile(socketNew);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socketNew]);

	// console.log({ socket });
	// JoinUser
	useEffect(() => {
		socketNew?.emit("checkUserOnlineAdmin");
	}, [socketNew, auth?.user]);

	// New Message
	useEffect(() => {
		socketNew?.on("newMessage", newMessage => {
			// console.log({ add: newMessage });
			if (
				location?.pathname?.includes("/chats") &&
				getSearch?.get("chat") &&
				getSearch?.get("chat") === newMessage?.chatId
			) {
				socketAddUserMessage(newMessage);
				getAllMessages();
				audioRef.current.play();
			} else {
				getAllMessages();
				audioRef.current.play();
			}
			// console.log({ socketm: socketNew });
		});
		// console.log({ socketNew });
		return () => {
			socketNew?.off("newMessage");
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socketNew, location.pathname]);

	useEffect(() => {
		socketNew?.on("newOrder", newOrder => {
			socketAddOrder(newOrder);
		});
		// console.log({ socketNew });
		return () => {
			socketNew?.off("newOrder");
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socketNew]);

	useEffect(() => {
		socketNew?.on("newProduct", newProduct => {
			socketAddProduct(newProduct);
		});
		// console.log({ socketNew });
		return () => {
			socketNew?.off("newProduct");
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socketNew]);

	useEffect(() => {
		socketNew?.on("get-online-users-admin", users => {
			socketOnline(users);
		});
		// console.log({ socketNew });
		return () => {
			socketNew?.off("get-online-users");
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socketNew, location.pathname]);

	// Update Message
	useEffect(() => {
		socketNew?.on("updateMessage", newMessage => {
			// console.log({ newMessage });
			if (
				location?.pathname?.includes("/chats") &&
				getSearch?.get("chat") &&
				getSearch?.get("chat") === newMessage?.chatId
			) {
				getChatMessage(newMessage?.chatId);
				getAllMessages();
			} else {
				getAllMessages();
			}
		});
		// console.log({ socket });
		return () => {
			socketNew?.off("updateMessage");
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socketNew]);

	return (
		<>
			<audio
				controls
				ref={audioRef}
				className="notificationSound"
				style={{ display: "none" }}>
				<source src={audio} type="audio/mp3" />
			</audio>
		</>
	);
};

export default SocketClient;
