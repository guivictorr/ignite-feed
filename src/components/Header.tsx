import igniteLogo from '../assets/ignite-logo.svg';

export const Header = () => (
	<header className='bg-neutral-800 flex items-center justify-center gap-4 p-6'>
		<img className='w-16 h-16' src={igniteLogo} alt='Ignite Logo' />
		<p className='font-bold text-neutral-300 text-3xl'>Ignite Feed</p>
	</header>
);
