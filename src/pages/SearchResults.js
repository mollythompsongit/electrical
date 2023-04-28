import { useParams } from "react-router-dom"
import { useAxios } from "use-axios-client"
import { Link } from "react-router-dom";

import returnSubtype from "./utilities/returnSubtype";

const baseUrl = process.env.REACT_APP_ELECTRICAL_WP_API_BASEURL
// http://localhost:8888/womenscentre/wp-json/wp/v2/ 
// `http://molly.yoobeestudent.net/wordpress/wp-json/wp/v2/` 
const SearchResults = () => {
    const params = useParams();
    const searchString = params.searchString
    const searchEndpoint = `${baseUrl}search/?subtype[]=post&subtype[]=faq&search=${searchString}`
    console.log(params)
    const { data: search, error, loading } = useAxios({
        url: searchEndpoint
    })

    // check if the news posts have been returned
    if (loading) return (
        <p className="loading">Loading...</p>
    )
    if (!search) return "No posts found"
    if (error) return "Error"

    console.log(search)


    const allResults = search.map((search, index) => {
        return (
            < Link to="/faq" key={index} style={{ textDecoration: 'none' }}>
                <div className="search-result">
                    <h3 className="search-result-post" >{search.title}</h3>
                </div>
            </Link >
        )
    })

    return (
        <div id="results-page">
            <p className="search-results-title">Search results for "{params.searchString}"</p>
            <p className="search-results-title2">Found {search.length} results.</p>
            <div className="item-container">
                {allResults}
            </div>
        </div>
    )
}

export default SearchResults