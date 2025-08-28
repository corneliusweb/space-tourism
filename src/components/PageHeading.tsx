const PageHeading = ({ number, heading }: { number: string; heading: string }) => {
	return (
		<p className='font-sans-cond uppercase flex justify-center gap-2'>
			<span className='font-bold tracking-wider'>{number}</span>
			<span className='text-base tracking-widest'>
				{heading}
			</span>
		</p>
	);
};
export default PageHeading;
