import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/destination/mars')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/destination/mars"!</div>
}
