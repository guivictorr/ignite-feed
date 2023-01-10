import { ReactNode, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

enum Variants {
	primary = 'bg-emerald-600 text-zinc-300',
	outline = 'bg-transparent border border-emerald-600 text-emerald-600',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Lowercase<keyof typeof Variants>;
	children: ReactNode;
}

export const Button = ({
	children,
	variant = 'primary',
	...rest
}: ButtonProps) => (
	<button
		className={classNames(
			'focus:outline outline-emerald-600 outline-offset-2 w-full px-6 py-3 rounded-lg font-bold',
			Variants[variant],
		)}
		type={rest.type !== 'button' ? rest.type : 'button'}
		{...rest}
	>
		{children}
	</button>
);
