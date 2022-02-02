import { useRouter } from 'next/router';

function BlogPostPage() {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>The Blog Post Page</h1>
    </div>
  )
}
//11
export default BlogPostPage
