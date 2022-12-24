import { Header } from './components/Header';
import { Post } from './components/Post';
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
					<section className='flex-1'>
						<Post />
					</section>
				</main>
			</div>
		</div>
	);
};

export default App;
