export const Profile = () => (
	<div className='flex flex-col items-center rounded-lg bg-neutral-800 overflow-hidden'>
		<img
			className='h-[72px] w-full object-cover'
			src='https://loremflickr.com/640/480/nature'
			alt='Cover'
		/>
		<img
			src='https://github.com/guivictorr.png'
			alt=''
			className='w-14 h-14 border-2 border-emerald-500 rounded-lg bg-black p-1 -mt-8'
		/>
		<p className='mt-6 font-bold'>Guilherme Victor</p>
		<p className='text-neutral-400'>Software Developer</p>

		<footer className='mx-auto mt-8 px-8 pb-8 pt-6 border-t border-neutral-700/60 w-full'>
			<button
				type='button'
				className='focus:outline outline-emerald-500 outline-offset-2 bg-transparent w-full px-6 py-3 rounded-lg border border-emerald-500 text-emerald-500 font-bold'
			>
				Edit profile
			</button>
		</footer>
	</div>
);
