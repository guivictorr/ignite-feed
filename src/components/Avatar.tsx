import classNames from 'classnames';

interface AvatarProps {
	noBorder?: boolean;
}

const Avatar = ({ noBorder = false }: AvatarProps) => {
	return (
		<figure
			className={classNames('rounded-lg p-1 bg-zinc-800 border-emerald-600', {
				'border-2': !noBorder,
			})}
		>
			<img
				src='https://github.com/guivictorr.png'
				alt=''
				className='rounded w-14 h-14'
			/>
		</figure>
	);
};

export { Avatar };
