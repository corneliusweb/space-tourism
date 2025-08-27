import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/destination/moon')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/destination/moon"!</div>
}
