import { useAxios } from "use-axios-client"
import { Link, useParams, useNavigate } from "react-router-dom"
import formatPrice from "../utilities/formatPrice"
import { ArrowLeft } from "react-bootstrap-icons"

const baseUrl = process.env.REACT_APP_WOOCOMMERCE_BASEURL

const Product = () => {
    const navigate = useNavigate();
    const GetProduct = () => {
        const params = useParams();
        const id = params.id;

        const endpoint = `${baseUrl}/products/${id}`

        const { data: product, error, loading } = useAxios({
            url: endpoint
        })

        if (loading) return "Loading...";
        if (!product) return "No data...";
        if (product.length === 0) return "No results found!";
        if (error) return "Error!";

        console.log(product)

        return (
            <>
                {/* hero section  */}
                <div className="grey-hero-section">
                    <div className='shop-item-title'>{product.name}</div>
                </div>
                <div id="product-item">
                    <img className="shop-item-image-clicked" src={product.images[0].src} alt={product.name} />
                    <div className="shop-clicked-item-description">
                        <div className="shop-item-description-clicked">
                            <div dangerouslySetInnerHTML={{ __html: product.short_description }} />
                        </div>
                        <div className="shop-item-price-clicked">
                            <button id="back-button-shop" onClick={() => {
                                navigate(-1)
                            }}><ArrowLeft /></button>
                            <div className="shop-item-price-clicked-text">{product.prices.currency_symbol}{formatPrice(product.prices.price)}</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <GetProduct />
        </>
    )
}

export default Product

