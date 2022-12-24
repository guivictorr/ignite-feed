import { Avatar } from './Avatar';
import { Button } from './Button';

export const Profile = () => (
	<div className='flex flex-col items-center rounded-lg bg-zinc-800 overflow-hidden'>
		<img
			className='h-[72px] w-full object-cover'
			src='https://loremflickr.com/640/480/abstract'
			alt='Cover'
		/>
		<div className='-mt-10'>
			<Avatar />
		</div>
		<p className='mt-6 font-bold'>Guilherme Victor</p>
		<p className='text-zinc-400'>Software Developer</p>

		<footer className='mx-auto mt-8 px-8 pb-8 pt-6 border-t border-zinc-700/60 w-full'>
			<Button variant='outline'>Edit profile</Button>
		</footer>
	</div>
);
