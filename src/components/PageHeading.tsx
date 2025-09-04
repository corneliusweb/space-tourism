const PageHeading = ({ number, heading }: { number: string; heading: string }) => {
	return (
		<p className='font-sans-cond uppercase flex justify-center gap-4 tablet:justify-start lg:items-center'>
			<span className='font-bold tracking-wider text-white/25 tablet:text-xl lg:text-md-500'>{number}</span>
			<span className='font-normal text-base tracking-widest tablet:text-xl lg:text-md-500'>
				{heading}
			</span>
		</p>
	);
};
export default PageHeading;
