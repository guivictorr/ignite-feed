import { Avatar } from './Avatar';

export const Comment = () => (
	<div className='flex items-start gap-4'>
		<Avatar noBorder />
		<div className='flex-1'>
			<div className='rounded-lg bg-zinc-700/30 px-4 pt-4 pb-6'>
				<div>
					<p className='font-bold'>
						Guilherme Victor <span className='text-zinc-400'>(You)</span>
					</p>
					<p className='text-sm text-zinc-500'>2h ago</p>
				</div>
				<div className='mt-4'>content</div>
			</div>
			<button
				className='hover:text-emerald-500 transition text-zinc-400 mt-4 font-bold'
				type='button'
			>
				Clap • 3
			</button>
		</div>
	</div>
);
