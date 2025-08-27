import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/destination/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/destination/$name"!</div>
}
