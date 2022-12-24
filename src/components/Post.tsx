import { Avatar } from './Avatar';
import { Button } from './Button';
import { Comment } from './Comment';

export const Post = () => (
	<article className='bg-zinc-800 p-10 h-full rounded-lg'>
		<header className='flex justify-between items-center'>
			<div className='flex items-center gap-4'>
				<Avatar />
				<div>
					<p className='font-bold'>Guilherme Victor</p>
					<p className='text-zinc-400'>Software developer</p>
				</div>
			</div>
			<p className='text-zinc-400'>Published 1h ago</p>
		</header>

		<div className='py-6'>
			Whats up 👋 I just climbed another project in my portfolio. It&apos;s a
			project I did at NLW Return, Rocketseat event. The project name is
			DoctorCare 🚀 👉 jane.design/doctorcare #newproject #nlw #rocketseat
		</div>

		<footer className='border-t border-zinc-700/60'>
			<form>
				<p className='mb-4 mt-6 font-bold'>Give your feedback</p>
				<textarea
					className='peer focus:outline outline-emerald-500 outline-offset-2 w-full bg-zinc-900 placeholder:text-zinc-400 rounded-lg p-4'
					placeholder='Leave a comment...'
					required
					name='comment'
					id='comment'
				></textarea>
				<div className='peer-valid:block hidden w-28 mt-4'>
					<Button>Publish</Button>
				</div>
			</form>

			<div className='mt-8'>
				<Comment />
			</div>
		</footer>
	</article>
);
