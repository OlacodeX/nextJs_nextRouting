// This is an example of a catch all routes file. I can pass as many route layers as I want to this page and grab it here.
// For filtering, all I need do is pass the max and min values to the url as though I am going to sub routes
import { useRouter } from "next/router";
import Link from "next/link";

function Doc(){
    const router = useRouter()
    // below I am destructuring the route segements into an array
    const { params = [] } = router.query
    // Below I will now use conditionals to determines what appears on the page based on what comes from the url
    if (params.length === 2) {
        return (
            <div>
                <h1>
                    Viewing docs for feature {params[0]} and concept {params[1]}
                </h1>
                
                <Link href={`/docs/${params[0]}/${params[1]}`} target="blank">
                    View Concept {params[0]}
                </Link>
            </div>
        )
    } else if (params.length === 1) {
            return (
                <div>
                    <h1>Viewing docs for feature {params[0]}</h1>
                    
                    <Link href={`/docs/${params[0]}`} target="blank">
                        View Feature {params[0]}
                    </Link>
                </div>
            )
        }
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Docs Home Page</h1>
        </div>
    )
}

export default Doc