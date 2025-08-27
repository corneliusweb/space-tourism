import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/destination/europa')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/destination/europa"!</div>
}
