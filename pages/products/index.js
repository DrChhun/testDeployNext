import Link from "next/link"
/* eslint-disable @next/next/no-img-element */
function ProductList({list}) {
    return (
        <>
            <h1 className="text-center text-5xl font-bold my-8">Product List</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-16 lg:mx-32 xl:mx-64">
            {list.map((data) => {
                return (
                    <div key={data.id}> 
                        <Link href={`products/${data.id}`}>
                            <img className="h-80 w-64 object-cover w-screen scale-75" src={data.image} alt={data.title} />
                        </Link>
                        <h1>{data.title}</h1>
                        <p>{data.price}</p>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default ProductList

export async function getStaticProps() {
    let res = await fetch('https://fakestoreapi.com/products')
    let data = await res.json()
    console.log(data)

    return {
        props: {
            list: data
        }
    }
}