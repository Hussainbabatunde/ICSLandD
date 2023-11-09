import "./App.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "react-toastify/dist/ReactToastify.css"
import { Provider } from "react-redux"
import DataProvider from "./Data/Context"
import store from "./Data/Store"
import { BrowserRouter as Router } from "react-router-dom"
import Routers from "./Routes"
import { useEffect } from "react"
import { getPlans, getUserType, loadUser } from "./Data/Actions/UserActions"
import { SetAuthToken, SetDefaultHeaders } from "./Data/Config"
import { TOKEN } from "./Data/Actions/ActionTypes"
import { getCourses } from "./Data/Actions/CoursesAction"

// Preloader
$(window).on("load", function () {
	$(".lds-ellipsis").fadeOut()
	$(".preloader").delay(333).fadeOut("slow")
	$("body").delay(333)
})

SetDefaultHeaders()

if (localStorage.getItem(TOKEN)) {
	SetAuthToken(localStorage.getItem(TOKEN))
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser())
		store.dispatch(getUserType())
		store.dispatch(getPlans())
		store.dispatch(getCourses())
	}, [])

	return (
		<Provider store={store}>
			<DataProvider>
				<Router>
					<Routers />
				</Router>
			</DataProvider>
		</Provider>
	)
}

export default App;
