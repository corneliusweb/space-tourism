import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<div>
			<h3 className='text-base font-extrabold'>Welcome Home</h3>
		</div>
	);
}
