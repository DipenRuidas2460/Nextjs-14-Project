import Link from "next/link"

function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>sorry, the page you are looking for does not exist.</p>
      <Link href="/">Return Homepage</Link>
    </div>
  )
}

export default NotFound
