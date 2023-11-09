import { useLocation, Link } from "react-router-dom";
import { useContext, useEffect } from "react"
import { GlobalState } from "../Data/Context"
import user from "../assets/avatar3.png"
import { AiFillFire } from "react-icons/ai"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import { BiArrowBack } from "react-icons/bi"

const DefaultHeader = () => {
	const { auth } = useContext(GlobalState),
		param = useLocation()
	return (
		<section className='border-bottom py-3'>
			<section className='pe-md-5 px-2 ps-md-3 d-flex align-items-center barFont justify-content-between defaultHead'>
				<div className='w-100 ps-md-auto ps-4'>
					<h3 className='text-capitalize my-0 fontReduceBig Lexend'>
						Welcome!{" "}
						{auth?.user?.fullname
							? auth?.user?.fullname
							: param.pathname.split("/")[1]}
					</h3>
					<small>
						<AiFillFire color='#0b61c7' size={24} /> See all courses, tasks,
						track progress
					</small>
				</div>
				<header className='d-flex align-items-center my-auto justify-content-end container'>
					<Link
						className='text-dark text-decoration-none d-flex align-items-center'
						to='/settings'>
						<img
							src={auth?.user?.avatar?.url ? auth?.user?.avatar?.url : user}
							alt={`${auth?.user?.fullname} `}
							style={{
								height: "3.5rem",
								width: "3.5rem",
								objectFit: "cover",
								objectPosition: "center 15%",
							}}
							className='rounded-circle img-fluid mx-md-3'
						/>
						<h6 className='d-none d-md-flex'>
							{auth?.user?.firstName} {auth?.user?.lastName}
						</h6>
					</Link>
				</header>
			</section>
		</section>
	)
}

export default DefaultHeader

export const ModalComponents = ({
	isOpen,
	toggle,
	title,
	children,
	back,
	size,
	notHeader,
	borderNone,
	success,
}) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden"
		}
		return () => {
			document.body.style.overflow = "unset"
		}
	}, [isOpen])
	return (
		<Modal
			isOpen={isOpen}
			centered
			scrollable
			size={size}
			className={notHeader ? "p-0 overflow-hidden" : ""}>
			{!notHeader && (
				<ModalHeader
					toggle={toggle}
					className={`${borderNone ? borderNone : ""} ${
						success ? success : ""
					} text-capitalize Lexend textColor2`}>
					{back && <BiArrowBack className='me-3 myCursor' onClick={back} />}
					{title}
				</ModalHeader>
			)}
			<ModalBody className={notHeader ? "p-0 overflow-hidden" : ""}>
				{children}
			</ModalBody>
		</Modal>
	)
}