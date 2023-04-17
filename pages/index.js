import Link from "next/link"
import useRouter from "next/router"


function Home() {
    // define functions such as the handlePlaceOrder here
    const handlePlaceOrder = () => {
        const router = useRouter
        console.log('Placing your order')
        // Below we are using the push method on the router to programmatically send users to the products page after processing their order
        router.push('/products')
    }
    return (
        <div>
            <h1>Home Page</h1>
            <Link href="/blog" target="blank">
                Blog
            </Link>
            <Link href="/products" target="blank">
                Products
            </Link>
            <Link href="/docs" target="blank">
                Docs
            </Link>
            {/* Below is how to handle button actions like form submissions etc */}
            <button onClick={handlePlaceOrder}>
                Place Order
            </button>
        </div>
        
    )
}

export default Home