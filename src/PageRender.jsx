/* eslint-disable no-undef */
import { createElement, useContext, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ErrorPage } from "./Components"
import { GlobalState } from "./Data/Context"
import { Loader } from "./Utils"

const generatePage = (pageName, folder) => {
	const component = () => require(`./${folder}/${pageName}`).default
	try {
		return createElement(component())
	} catch (error) {
		return <ErrorPage />
	}
}

const PageRender = () => {
	const { auth, error, clearErrors } = useContext(GlobalState)
	const { page, id, step } = useParams(),
		navigate = useNavigate()

	useEffect(() => {
		if (!auth?.isAuth) {
			if (error?.errorText) {
				// if (page !== "login" && page !== "register") {
				//   navigate("/");
				// }
				clearErrors();
			}
		}
		if (auth?.isAuth) {
			if (page === "login" || page === "register") {
				navigate("/")
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, auth?.isAuth, navigate, error?.errorText])

	if (auth.token && auth.loading) return <Loader />

	let pageName = ""
	if (step) {
		pageName = `${page}/${id}/[id]`
	} else if (id) {
		if (page === "enroll" && ["checkout"]?.includes(id))
			pageName = `${page}/${id}`;
		else pageName = `${page}/[id]`;
	} else {
		pageName = `${page}`
	}
	return generatePage(pageName, auth?.isAuth ? "Pages" : "Screens")
}

export default PageRender;
