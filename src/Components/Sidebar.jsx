import React, { useContext, useState } from "react";
import "./Sidebar.css"
import { GlobalState } from "../Data/Context"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Logo } from "./Header"
import { BiAlignLeft, BiLogOutCircle } from "react-icons/bi"

const Sidebar = ({ children, auth }) => {
	const { sidebarList, logoutUser } = useContext(GlobalState),
		navigate = useNavigate(),
		location = useLocation()
	//   $("#sidebarCollapse").on("click", function () {
	//     $("#sidebar").toggleClass("active");
	//   });

	const [sideBar, setSideBar] = useState(false)
	const toggleSidebar = () => {
		setSideBar(!sideBar)
	}

	return (
		<div className={`wrapper ${auth?.isAuth ? "section" : ""}`}>
			{auth?.isAuth ? (
				<nav
					id='sidebar'
					className={`sidebar ${sideBar && "md:-tw-ml-[250px] tw-left-0"}`}>
					<div className='sidebar-header tw-relative'>
						<div className='sidebar-brand'>
							<Link to='/'>
								<Logo />
							</Link>
						</div>
						{auth?.isAuth && (
							<BiAlignLeft
								onClick={() => {
									//   $("#sidebar").toggleClass("active");
									console.log("odal")
									toggleSidebar()
								}}
								size={24}
								id='sidebarCollapse'
								className='myCursor tw-absolute -tw-right-10 tw-top-2 text-dark tw-z-50'
							/>
						)}
					</div>

					<ul className='list-unstyled components'>
						{sidebarList?.map((item, i) => (
							<li key={i}>
								<Link
									to={item?.url}
									style={{
										color: location?.pathname?.includes(item?.url)
											? "#FF9966"
											: "",
									}}
									className='align-items-center d-flex text-capitalize'>
									<span className='me-2'>{item?.icon}</span>
									{item?.name}
								</Link>
							</li>
						))}
					</ul>
					<ul className='list-unstyled'>
						<li>
							<Link
								to={"#"}
								onClick={() => {
									setTimeout(() => {
										logoutUser("")
										navigate("/")
									}, 1500)
								}}
								className='align-items-center d-flex text-capitalize'>
								<span className='me-2'>
									<BiLogOutCircle size={24} />
								</span>
								Logout
							</Link>
						</li>
					</ul>
				</nav>
			) : null}
			<div id={`${auth?.isAuth ? "content2" : "content"}`}>{children}</div>
		</div>
	)
}

export default Sidebar;
