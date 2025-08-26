import { createFileRoute } from '@tanstack/react-router';
import data from '../constants/data.json';

export const Route = createFileRoute('/destination')({
	component: RouteComponent,
});

function RouteComponent() {
  const { destinations } = data;
  
  return <div>
    {destinations.map((destination) => (
      <div>
        <h3> {destination.name} </h3>
      </div>
    ))}
  </div>;
}
