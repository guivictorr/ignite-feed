import { Header } from './components/Header';
import { Post } from './components/Post';
import { Profile } from './components/Profile';

const App = () => {
	return (
		<div>
			<Header />
			<div>
				<main className='flex flex-col lg:flex-row lg:max-w-[70%] lg:mx-auto my-8 gap-8'>
					<aside className='w-full lg:w-64'>
						<Profile />
					</aside>
					<section className='flex-1'>
						<Post />
					</section>
				</main>
			</div>
		</div>
	);
};

export default App;
