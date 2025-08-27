import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<main>
			<section>
				<div>
					<h1 className='text-center uppercase'>
						<span className='font-sans-cond tracking-wider text-xl text-blue-300'>
							So, you want to travel to
						</span>
						<span className='font-serif text-fs-900 block my-5'>Space</span>
					</h1>
					<p className='text-center w-90 mx-auto text-blue-300 leading-[180%] tracking-wide'>
						Let's face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge
						of it. Well sit back, and relax because we'll give you a truly
						out of this world experience!
					</p>
				</div>

				<div className='py-35'>
					<Link
						to='/destination'
						className='font-serif text-lg mx-auto flex uppercase w-36 h-36 rounded-full items-center justify-center bg-white text-black'
					>
						Explore
					</Link>
				</div>
			</section>
		</main>
	);
}
