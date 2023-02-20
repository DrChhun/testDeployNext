import Link from "next/link"

function Home() {
  return(
    <div className="h-screen">
      <Link className="text-5xl font-bold flex justify-center relative top-1/2 translate-y-1/2" href="products">🛒 Product</Link>
    </div>
  )
}

export default Home