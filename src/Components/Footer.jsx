import {
  BsEnvelope,
  BsGlobe,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { Logo } from "./Header";
import { useContext } from "react";
import { GlobalState } from "../Data/Context";
import { Link } from "react-router-dom";

const Footer = () => {
  let { plan } = useContext(GlobalState);

  return (
		<div className="py-3 py-md-5 main-bg">
			<div className="container text-white">
				<div className="row mx-0 g-3 py-3 py-md-4">
					<div className="col-md-6">
						<Logo />
						<p className="py-4 w-75">
							BCT Academy is a leading tech training institute in Lagos.
						</p>
						<p className="py-2 w-50">
							10, Olusoji Idowu Street, Ilupeju, Obanikoro Bus-Stop, Lagos.
						</p>
						<button className="btn btn-white tw-flex tw-gap-2 tw-items-center rounded-pill  text-capitalize text-main px-4">
							<BsGlobe className="me-2" />
							English
						</button>
					</div>
					<div className="col-2 d-none d-md-inline">
						<h5>BCT Limited</h5>
						<ul className="list-group list-unstyled">
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								About
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								Teach on BCT
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								Roadmap
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								Careers
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								News
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								Our Team
							</li>
						</ul>
					</div>
					<div className="col-2 d-none d-md-inline">
						<h5>Community</h5>
						<ul className="list-group list-unstyled">
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								FAQ
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								Terms
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								Testimonies
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								Help Centers
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								Privacy
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0">
								Scholarships
							</li>
						</ul>
					</div>
					<div className="col-md-2">
						<h5>Contact Us</h5>
						<ul className="list-group list-unstyled">
							{/* <li className='list-group-item bg-transparent text-white border-0 px-0'>
								Contact Us
							</li> */}
							<li className="list-group-item bg-transparent text-white border-0 px-0 d-flex align-items-center">
								<BsEnvelope className="me-2" /> bct@gmail.com
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0 d-flex align-items-center">
								<FaPhone className="me-2" /> +2348135369680
							</li>
							<li className="list-group-item bg-transparent text-white border-0 px-0 py-3">
								<h5>Learning plans</h5>
							</li>
							{plan?.data
								?.sort((a, b) => a?.amount - b?.amount)
								?.map((item, i) => (
									<li
										key={i}
										className="list-group-item bg-transparent text-white border-0 px-0 text-capitalize">
										{item?.name}
									</li>
								))}
						</ul>
					</div>
				</div>
				<hr className="border" />
				<div className="d-md-flex justify-content-md-between justify-content-center align-items-center py-3 text-white">
					<div>
						<div className="d-flex">
							<div
								className="rounded-circle d-flex align-items-center justify-content-center mx-2"
								style={{
									height: "2.5rem",
									width: "2.5rem",
									background: "white",
								}}>
								<Link
									target="_blank"
									to={"https://www.facebook.com/bcodestechacademy"}>
									<FaFacebookF size={20} className="text-main" />
								</Link>
							</div>
							<div
								className="rounded-circle d-flex align-items-center justify-content-center mx-2"
								style={{
									height: "2.5rem",
									width: "2.5rem",
									background: "white",
								}}>
								{/* <Link> */}
								<BsTwitter size={20} className="text-main" />
								{/* </Link> */}
							</div>
							<div
								className="rounded-circle d-flex align-items-center justify-content-center mx-2"
								style={{
									height: "2.5rem",
									width: "2.5rem",
									background: "white",
								}}>
								<Link
									target="_blank"
									to={"http://www.instagram.com/bct_academy"}>
									<BsInstagram size={20} className="text-main" />
								</Link>
							</div>
							<div
								className="rounded-circle d-flex align-items-center justify-content-center mx-2"
								style={{
									height: "2.5rem",
									width: "2.5rem",
									background: "white",
								}}>
								<Link
									target="_blank"
									to={"https://www.linkedin.com/company/bctech-academy"}>
									<BsLinkedin size={20} className="text-main" />
								</Link>
							</div>
							<div
								className="rounded-circle d-flex align-items-center justify-content-center mx-2"
								style={{
									height: "2.5rem",
									width: "2.5rem",
									background: "white",
								}}>
								<Link
									target="_blank"
									to={
										"https://www.youtube.com/channel/UCpwBYhUH4zeswcpmkgRGUfw"
									}>
									<BsYoutube size={20} className="text-main" />
								</Link>
							</div>
						</div>
					</div>
					<div>
						{" "}
						&copy; {`${new Date().getFullYear() !== 2023 ? "2023 - " : ""}`}
						{new Date().getFullYear()} BCT, Inc. All rights reserved.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
