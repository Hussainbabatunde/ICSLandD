import { useState, useEffect } from "react"
import OtpInput from "react-otp-input"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"

const Otp = () => {
	let [code, setCode] = useState(""),
		[loading, setLoading] = useState(false),
		[activate, setActivate] = useState(false),
		navigate = useNavigate(),
		handleSubmit = async e => {
			e?.preventDefault()
			if (!code) return
			setLoading(true)
			try {
				var res = await axios.post("/api/v1/user/otp", { otp: code })

				toast.success(res.data.msg)
				setActivate(true)
				setLoading(false)
			} catch (err) {
				console.log({ err })
				let error = err.response?.data?.data
				if (error) {
					error.forEach(error => toast.error(error.msg))
				}

				if (err?.response?.status === 429) toast.error(err?.response?.data)
				setLoading(false)
			}
			setLoading(false)
		}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		if (activate) {
			setActivate(false)
			setCode("")
			return navigate("/login")
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activate])

	useEffect(() => {
		if (code && code?.length === 5) {
			handleSubmit()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [code])

	return (
		<div className='container tw-py-20'>
			<div className='tw-grid md:tw-grid-cols-2 tw-gap-12'>
				<div>
					<p className='tw-text-xl tw-text-text tw-max-w-lg'>
						To complete your registration, an OTP has been sent to your email
						address for verification. Enter OTP below to sign up successfully!.
					</p>
					<div className='tw-flex tw-flex-col tw-gap-4 tw-items-center tw-justify-center tw-mt-20 tw-w-fit'>
						<OtpInput
							value={code}
							onChange={setCode}
							numInputs={5}
							disabled={loading}
							shouldAutoFocus={true}
							isInputNum={true}
							renderSeparator={<span> - </span>}
							renderInput={props => <input {...props} />}
							inputStyle={"tw-h-12 tw-border tw-text-xl  w-100"}
							containerStyle={{ width: "350px" }}
						/>
						{loading && <ClipLoader size={20} color='gold' />}
						<p className='text-muted'>01:30</p>
					</div>

					{/* <div className='tw-mt-20'>
						<p>
							Didn't receive OTP?{" "}
							<span className='tw-text-main'>Resend OTP</span> or{" "}
							<span className='tw-text-main'>change email address</span>
						</p>

						<button
							className='btn btn-primary tw-mt-14 tw-h-12 tw-text-xl'
							onClick={goToAreaOfInterest}>
							Continue to sign up
						</button>
					</div> */}
				</div>
				<div>
					<img src={require("../assets/otp.png")} alt='' className='mx-auto' />
				</div>
			</div>
		</div>
	)
}

export default Otp
