import React from "react";
import Avatarimg from "../assets/Avatar.png";
import Briefcase from "../assets/briefcase.png";
import Tasknotification from "../assets/notification.png";
import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../Data/Context"
import { EmptyComponent, MainPaginate, MainRanger } from "../Utils"
import LoadMore from "../Components/LoadMore"
import moment from "moment"

const AllNotify = () => {
	let { notification, getNotify } = useContext(GlobalState),
		[state, setState] = useState(null)

	useEffect(() => {
		setState(notification?.all)
	}, [notification?.all])

	let [range, setRange] = useState(10),
		[loading, setLoading] = useState(false)

	const [itemOffset, setItemOffset] = useState(0)
	const endOffset = itemOffset + range

	if (!state) return

	const currentItems = state.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(state.length / range)

	const handlePageClick = event => {
		const newOffset = (event.selected * range) % state.length
		setItemOffset(newOffset)
	}

	let handleLoadMore = async () => {
		setLoading(true)

		// if (search) {
		// 	await getNotify("all",{
		// 		page: Number(
		// 			notification?.all_paginate?.page
		// 		),
		// 	})
		// } else {
		await getNotify("all", {
			page: Number(notification?.all_paginate?.page),
		})
		// }
		setLoading(false)
	}

	return (
		<>
			<MainRanger range={range} setRange={setRange} />
			{currentItems?.length === 0 ? (
				<EmptyComponent subtitle={`All collection empty`} />
			) : (
				<Notification item={currentItems} />
			)}
			<MainPaginate handlePageClick={handlePageClick} pageCount={pageCount} />
			<LoadMore
				next={notification?.all_paginate?.next}
				handleLoadMore={handleLoadMore}
				loading={loading}
			/>
		</>
	)
}

const NotificationMain = () => {
	return (
		<div>
			<div className='tw-w-full tw-bg-white tw-p-5'>
				<h2 className='tw-text-xl tw-text-black tw-font-bold tw-uppercase'>
					all notifications
				</h2>
				<AllNotify />
			</div>
		</div>
	)
}

export default NotificationMain

let Notification = ({ item }) => {
	return (
		<div className='tw-mt-8'>
			{item?.map(notification => (
				<div
					className='tw-pt-3 tw-border-b tw-pb-4 tw-flex tw-w-1/2 tw-gap-4'
					key={notification?._id}>
					<NotificationImg item={notification} />
					<div className=''>
						<h5 className='tw-text-sm  tw-text-[#0f0f0f] tw-whitespace-nowrap'>
							<span className='tw-capitalize tw-font-bold tw-pr-5'>
								{" "}
								{notification?.type}:
							</span>
							{notification?.message}
						</h5>
						<p className='tw-text-sm tw-font-normal tw-text-[#949494]'>
							{moment(notification?.createdAt).fromNow()}
						</p>
						<div className='tw-flex tw-mt-1 tw-gap-1'>
							{notification?.notice ? (
								<div className='tw-flex tw-gap-1'>
									<img src={Briefcase} alt='' className='tw-h-4' />
									<p className='tw-text-sm tw-font-normal tw-text[#949494]'>
										Notification
									</p>
								</div>
							) : (
								<div className='tw-flex tw-gap-1'>
									<img src={Tasknotification} alt='' className='tw-h-4' />
									<p className='tw-text-sm tw-font-normal tw-text[#949494]'>
										Task
									</p>
								</div>
							)}

							<p className='tw-text-sm tw-font-bold tw-text-[#3d3d3d]'>
								{notification?.tag}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

const NotificationImg = ({ item }) => {
	let [img, setImg] = useState(null),
		{ auth } = useContext(GlobalState)

	useEffect(() => {
		if (item)
			if (item?.user?._id === auth?.user?._id)
				setImg(item?.recipient?.[0]?.avatar)
			else setImg(item?.user?.avatar)
	}, [item, auth])

	if (!item) return

	return (
		<img
			src={img && img?.url ? img?.url : Avatarimg}
			alt={item?.title}
			className='tw-h-8'
		/>
	)
}