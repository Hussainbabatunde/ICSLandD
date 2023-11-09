import image from "../../assets/avatar3.png"
const TaskComment = () => {
	let tasksArr = [
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
		},
	]
	return (
		<div>
			<div className='tw-mt-6'>
				<p className='tw-text-xl tw-font-medium tw-capitalize Nunito tw-border-l-4 tw-border-l-[#0f0bc7] tw-pl-8'>
					Add Comment
				</p>
				<form className='tw-mt-4 tw-pl-8'>
					<textarea
						name='task'
						className='tw-h-16 tw-w-full tw-border tw-border-[#2A5AFF]'></textarea>
					<button className='tw-mt-6 tw-bg-[#0F0BC7] tw-h-10 tw-w-28 tw-rounded tw-text-sm tw-font-bold tw-text-white tw-font-sans'>
						Send
					</button>
				</form>
				{tasksArr?.map((item, i) => (
					<div className='py-2' key={i}>
						<div className='py-2 row mx-0 g-3' key={i}>
							<div className='col-1'>
								<img
									src={item?.image}
									alt={item?.title}
									className='img-fluid rounded-circle'
									style={{
										width: "3rem",
										height: "3rem",
									}}
								/>
							</div>
							<div className='col-11'>
								<div className='d-flex align-items-center justify-content-between py-2'>
									<div>
										<h5 className='fw-bold'>Uploaded by {item?.user?.name}</h5>
										<div className='tw-flex tw-gap-32 tw-mt-4'>
											<h6 className='tw-text-sm tw-font-normal tw-text-black'>
												{item?.title}{" "}
											</h6>
											<span className='ps-md-5 tw-text-sm tw-font-normal tw-text-black'>
												{/* {moment().fromNow()} */}
											</span>
										</div>
									</div>
								</div>
								<p className='tw-text-[12px] tw-font-normal tw-text-black'>
									{item?.task}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default TaskComment
