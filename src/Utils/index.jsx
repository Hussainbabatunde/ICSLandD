/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
import { DotLoader, ClipLoader, PacmanLoader } from "react-spinners";
import { FaTimes } from "react-icons/fa";
import OtpInput from "react18-otp-input";
import empty from "../assets/empty.png";
import $ from "jquery";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ReactPaginate from "react-paginate";

export const ImageView = ({
	loading,
	images,
	setImages,
	file,
	setLoading,
	css,
}) => {
	let styleUpload = {
		display: images ? "block" : "none",
	};

	const handleUploadImage = async e => {
		setLoading(true);
		let file = e.target.files[0];
		if (!file) {
			setLoading(false);
			return toast.error("No Image file included...");
		}

		if (file.type.match(/image/i) && file.size > 1024 * 1024 * 20) {
			setLoading(false);
			return toast.error("File size too large, ~= 20mb...");
		}
		if (
			file.type !== "image/jpeg" &&
			file.type !== "image/jpg" &&
			file.type !== "image/png"
		) {
			setLoading(false);
			return toast.error("Image format not supported");
		}

		setImages(file);
		setLoading(false);
	};

	return (
		<div className={`upload mx-auto position-relative p-2 ${css ? css : ""} `}>
			<input
				className="upload-file"
				type="file"
				id="file_up"
				name={file}
				onChange={handleUploadImage}
			/>
			{loading ? (
				<div className="file_img d-flex align-items-center justify-content-center">
					<DotLoader color="#006f8d" />
				</div>
			) : (
				<div className="file_img" style={styleUpload}>
					{images && (
						<img
							src={
								images
									? typeof images === "string"
										? images
										: URL.createObjectURL(images)
									: ""
							}
							alt="product-img"
						/>
					)}
					<div className="faTimes2 faTimes" onClick={() => setImages("")}>
						<FaTimes color="red" size={20} />
					</div>
				</div>
			)}
		</div>
	);
};

export const Buttons = ({
	type,
	loading,
	width,
	css,
	title,
	children,
	onClick,
	loadCss,
	style,
	disabled,
}) => {
	return (
		<button
			disabled={loading || disabled}
			type={type ? type : "submit"}
			style={style ? style : null}
			onClick={onClick ? onClick : null}
			className={`btn tw-bg-main text-white text-capitalize hover:tw-bg-[#2f35cd] disabled:tw-bg-[#2f35cd] ${
				css ? css : ""
			} 
			 d-flex align-items-center justify-content-center ${width ? width : "w-100"}`}>
			{children}
			<span className={loading ? "me-2" : ""}>{title ? title : "next"}</span>
			{loading && <ClipLoader color={loadCss ? loadCss : "white"} size={16} />}
		</button>
	);
};

// export const ImageUpload = async images => {
// 	let imgArr = [];
// 	for (const item of images) {
// 		let post = new FormData();
// 		post.append(`photo`, item);

// 		let res = await axios.post(`/v1.1/files/generic-picture`, post, {
// 			headers: {
// 				"Content-Type": "multipart/form-data",
// 			},
// 		});
// 		const data = await res.data.response.url;
// 		imgArr.push(data);
// 	}
// 	return imgArr;
// };

$(document).on("load", function () {
	$(".innerLoader").fadeOut(); // will first fade out the loading animation
	$(".mainLoader").delay(333).fadeOut("slow"); // will fade out the white DIV that covers the website.
	$("body").delay(333);
});

export const Loader = () => {
	return (
		<div className="d-flex my-3 justify-content-center mainLoader aboutScreen">
			<div className="innerLoader tw-mt-32">
				<PacmanLoader size={30} color="#0f0bc7" />
			</div>
		</div>
	);
};

export const OtpComponent = ({
	stateData,
	textChange,
	numInputs,
	separator,
	css,
	loading,
}) => {
	return (
		<>
			<OtpInput
				value={stateData}
				onChange={otp => textChange(otp)}
				numInputs={numInputs ? numInputs : 6}
				separator={separator ? separator : <span>-</span>}
				inputStyle={`${css} otp-code__input`}
				isDisabled={loading}
				shouldAutoFocus={true}
				isInputNumber={true}
			/>
		</>
	)
}

export const EmptyComponent = ({ subtitle }) => {
	return (
		<div className='d-flex flex-column justify-content-center align-items-center'>
			<img src={empty} alt='EmptyComponent' className='emptyData img-fluid' />
			<h1 className='text-center text-uppercase Lexend fw-bold'>Nothing</h1>
			<p className='Lexend fontReduce'>
				{subtitle ? subtitle : `Your collection list is empty`}
			</p>
		</div>
	)
}

export const EyeToggle = ({ typePass, setTypePass }) => {
	return (
		<span onClick={() => setTypePass(!typePass)}>
			{typePass ? <BsEye color='#006f8d' /> : <BsEyeSlash color='#006f8d' />}
		</span>
	)
}

export const MiddleHeader = ({ text, css, css2, subtext }) => {
	return (
		<div
			className={`d-flex align-items-center mb-3 ${
				css2 ? css2 : "justify-content-center"
			}`}>
			<h1
				className={`text-capitalize textColor text-center textDefault ${
					css ? css : ""
				}`}>
				{text} <span className='textColor2 fontInherit'>{subtext}</span>
			</h1>
		</div>
	)
}

export const MainPaginate = ({ handlePageClick, pageCount }) => (
	<ReactPaginate
		breakLabel='...'
		nextLabel='>'
		onPageChange={handlePageClick}
		pageRangeDisplayed={5}
		pageCount={pageCount}
		previousLabel='<'
		renderOnZeroPageCount={null}
		className='list-unstyled d-flex align-items-center justify-content-end py-3'
		pageClassName='mx-1 p-2 border rounded tex-capitalize text-decoration-none'
		previousClassName='text-decoration-none d-none'
		nextClassName='text-decoration-none d-none'
		activeClassName='list-group-item-primary'
	/>
)

export const MainRanger = ({ range, setRange }) => {
	let rangeArr = [10, 50, 100, 200, 500, 1000]

	return (
		<div className='py-3'>
			<div className='col-3 col-md-1'>
				<select
					className='form-control py-2 form-select'
					name='range'
					value={range}
					onChange={e => {
						setRange(Number(e.target.value))
					}}>
					{rangeArr?.map((item, i) => (
						<option key={i} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}