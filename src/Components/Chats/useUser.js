import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";

const useUser = () => {
	let [stateUser, setStateUser] = useState(null),
		[loading, setLoadng] = useState(null),
		param = useParams(),
		[getSearch] = useSearchParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		let getUser = async () => {
			setLoadng(true);
			try {
				let res = await axios.get(
					`/api/v1/user/${param.id}/get-user?type=slug${
						getSearch?.get("user") ? `&user=${getSearch?.get("user")}` : ""
					}`
				);
				setStateUser(res?.data?.data);
				setLoadng(false);
			} catch (err) {
				setLoadng(false);
				let error = err.response?.data?.data;
				console.log({ err, error });
				if (error) {
					error.forEach(error => toast.error(error.msg, { autoClose: false }));
				}
				if (err?.response?.status === 429) toast.error(err?.response?.data);
			}
		};
		getUser();
	}, [param.id, getSearch]);
	return { loading, stateUser };
};

export default useUser;
