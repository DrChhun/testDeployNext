import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
function ProductDetail({detail}) {
    return (
        <>
            <Link className="py-2 px-6 rounded-full bg-gray-200 absolute top-5 left-5" href="/products">🏠 Home</Link>
            <div className="px-4">
                <img className="m-auto" src={detail.image} alt={detail.title} />
                <h1 className="text-4xl font-bold md:w-3/4 lg:w-2/4 m-auto my-8">{detail.title}</h1>
                <p className="md:w-3/4 lg:w-2/4 m-auto mb-4">Price ${detail.price}</p>
                <p className="md:w-3/4 lg:w-2/4 m-auto text-start mb-4">{detail.description}</p>
                <p className="md:w-3/4 lg:w-2/4 m-auto">Rating ⭐️ {detail.rating.rate}</p>
            </div>
        </>
    )
}

export default ProductDetail

export async function getStaticPaths() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()

    const paths = data.map(prod => {
        return {
            params: {
                productId: `${prod.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context

    const res = await fetch(`https://fakestoreapi.com/products/${params?.productId}`)
    const data = await res.json()

    return {
        props: {
            detail: data
        }
    }
}