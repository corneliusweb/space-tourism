import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/destination/titan')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/destination/titan"!</div>
}
