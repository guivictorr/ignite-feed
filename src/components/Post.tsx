import { Avatar } from './Avatar';
import { Button } from './Button';

export const Post = () => (
	<article className='bg-neutral-800 p-10 h-full rounded-lg'>
		<header className='flex justify-between items-center'>
			<div className='flex items-center gap-4'>
				<Avatar />
				<div>
					<p className='font-bold'>Guilherme Victor</p>
					<p className='text-neutral-400'>Software developer</p>
				</div>
			</div>
			<p className='text-neutral-400'>Published 1h ago</p>
		</header>

		<div className='py-6'>
			Whats up 👋 I just climbed another project in my portfolio. It&apos;s a
			project I did at NLW Return, Rocketseat event. The project name is
			DoctorCare 🚀 👉 jane.design/doctorcare #newproject #nlw #rocketseat
		</div>

		<footer className='border-t border-neutral-700/60'>
			<form>
				<p className='mb-4 mt-6 font-bold'>Give your feedback</p>
				<textarea
					className='peer focus:outline outline-emerald-500 outline-offset-2 w-full bg-neutral-900 placeholder:text-neutral-400 rounded-lg p-4'
					placeholder='Leave a comment...'
					required
					name='comment'
					id='comment'
				></textarea>
				<div className='peer-valid:block hidden w-28 mt-4'>
					<Button>Publish</Button>
				</div>
			</form>
		</footer>
	</article>
);
