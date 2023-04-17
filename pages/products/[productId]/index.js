import { useRouter } from "next/router"
// this router import allows us to be able to grab the route parameter in this case id from the route and use it for anything we want in this file
// such purpose might be to send a request to the backend to get the details of the product or basica just display the id here.
function ProductDetail() {
    const router = useRouter()
    // the productId I am grabing via the router here is the name of the dynamic folder i.e this folder
    const productId = router.query.productId
    return <h1>Details about product {productId}</h1>
}

export default ProductDetail