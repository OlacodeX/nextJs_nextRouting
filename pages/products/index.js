import Link from "next/link"

// Below I am passing a product id prop to my function and setting the default value to 100 for testing purposes
// This value will in real life project be passed down anywhere this function is used.
function ProductList({ productId = 100 }) {
    return (
        <div>
            <Link href="/">Home</Link>
            
            <h2>
                <Link href="/products/2" target="_blank">
                    Product 2
                </Link>
            </h2>
            <h2>
                <Link href="/products/3" target="_blank">
                    Product 3
                </Link>
            </h2>
            
            <h2>
                <Link href={`/products/${productId}`} target="_blank">
                    Product {productId}
                </Link>
            </h2>
        </div>
    )
}

export default ProductList