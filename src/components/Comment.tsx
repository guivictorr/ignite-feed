import { useState } from 'react';
import { Avatar } from './Avatar';

interface CommentProps {
	comment: string;
}

export const Comment = ({ comment }: CommentProps) => {
	const [claps, setClaps] = useState(0);

	const handleClap = () => setClaps((prevState) => prevState + 1);

	return (
		<div className='flex items-start gap-4'>
			<div className='hidden md:block'>
				<Avatar noBorder />
			</div>
			<div className='flex-1'>
				<div className='rounded-lg bg-zinc-700/30 px-4 pt-4 pb-6'>
					<div>
						<p className='font-bold'>
							Guilherme Victor <span className='text-zinc-400'>(You)</span>
						</p>
						<p className='text-sm text-zinc-500'>2h ago</p>
					</div>
					<div className='mt-4'>{comment}</div>
				</div>
				<button
					className='hover:text-emerald-500 transition text-zinc-400 mt-4 font-bold'
					type='button'
					onClick={handleClap}
				>
					Clap • {claps}
				</button>
			</div>
		</div>
	);
};
