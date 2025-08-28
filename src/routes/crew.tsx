import { createFileRoute } from '@tanstack/react-router';
import PageHeading from '../components/PageHeading';

export const Route = createFileRoute('/crew')({
	component: Crew,
});

function Crew() {
	return (
		<main>
      <PageHeading number='02' heading='Meet your crew' />
      
		</main>
	);
}
