import { useRouter } from 'next/router'
// withRouter is for class based component
function ProjectIdPage() {
  const router = useRouter()
  console.log(router.pathname)
  console.log(router.query)
  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectId
  return (
    <div>
      <h1>The Project Id Page</h1>
    </div>
  )
}

export default ProjectIdPage
