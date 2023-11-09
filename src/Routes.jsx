import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalState } from "./Data/Context";
import PageRender from "./PageRender";
import Home from "./Screens/home";
import { DefaultHeader, Footer, Sidebar } from "./Components";
import Home2 from "./Pages/home";
import { useLocation } from "react-router-dom"
import { ModalComponents } from "./Components/DefaultHeader"
import gif2 from "./assets/icons8-cancel.gif"
import SocketClient from "./SocketClient";

const Routers = () => {
	const { auth, error, clearErrors } = useContext(GlobalState),
		location = useLocation();

	return (
		<>
			<ToastContainer autoClose={false} position="bottom-center" />
			{auth?.isAuth && <SocketClient />}
			<Sidebar auth={auth}>
				{auth?.isAuth ? <DefaultHeader /> : null}
				<Routes>
					<Route path="/" element={auth?.isAuth ? <Home2 /> : <Home />} />
					<Route path="/:page" element={<PageRender />} />
					<Route path="/:page/:id" element={<PageRender />} />
					<Route path="/:page/:id/:step" element={<PageRender />} />
				</Routes>
			</Sidebar>
			{!auth?.isAuth
				? !["/login", "/register"]?.includes(location?.pathname) && <Footer />
				: null}
			<ModalComponents
				isOpen={error?.error?.error?.length > 0}
				title="Error"
				size={"sm"}
				success="text-danger text-danger2"
				borderNone={"borderNone"}
				toggle={() => clearErrors()}>
				<div className="downH2 d-flex flex-column">
					<div className="mx-auto mb-3">
						<img src={gif2} alt="Gif" className="img-fluid" />
					</div>
					{error?.error?.error?.map((item, i) => (
						<p key={i} className="fw-bold Lexend text-center w-100">
							<span className="fontInherit me-2">{i + 1}.</span> {item?.msg}
						</p>
					))}
					<button
						onClick={() => clearErrors()}
						className="btn tw-bg-[#0f0bc7] hover:tw-bg-[#2f35cd] text-white py-2 py-md-3 text-capitalize mx-auto my-3 px-3 px-md-5">
						close
					</button>
				</div>
			</ModalComponents>
		</>
	);
};

export default Routers;
