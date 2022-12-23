import { Header } from './components/Header';
import { Profile } from './components/Profile';

const App = () => {
	return (
		<div>
			<Header />
			<div>
				<main className='flex my-8 max-w-[60%] gap-8 mx-auto'>
					<aside className='w-64'>
						<Profile />
					</aside>
					<section className='bg-red-500 flex-1'>main</section>
				</main>
			</div>
		</div>
	);
};

export default App;
