import { ReactNode } from 'react';
import classNames from 'classnames';

enum Variants {
	primary = 'bg-emerald-600 text-neutral-300',
	outline = 'bg-transparent border border-emerald-600 text-emerald-600',
}

interface ButtonProps {
	variant?: Lowercase<keyof typeof Variants>;
	children: ReactNode;
}

export const Button = ({ children, variant = 'primary' }: ButtonProps) => (
	<button
		type='button'
		className={classNames(
			'focus:outline outline-emerald-600 outline-offset-2 w-full px-6 py-3 rounded-lg font-bold',
			Variants[variant],
		)}
	>
		{children}
	</button>
);
