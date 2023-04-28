import { useAxios } from "use-axios-client"
//import utilities
import formatPrice from "../utilities/formatPrice"
import { Link } from "react-router-dom"
import { useEffect } from 'react'
import { X } from "react-bootstrap-icons"

// MODALS //
import { useState } from 'react';

const ModalWindow = ({ closeMethod }) => {
    return (
        <div id="modal">
            {/* <button id="close-modal"> */}
            <X className="close-modal-button" onClick={closeMethod} />
            {/* </button> */}
            <p className="modal-title">Purchase Information</p>
            <div className="modal-content">
                <p>To purchase any of our merchandise items, please email us at info@thompsonelectrical.net.nz with the product name and size you would like to purchase.<br></br><br></br> We will get back to you via email to organise payement through online banking and for your shipping address.<br></br><br></br> Many thanks, the Thompson Electrical team.</p>
            </div>
        </div>
    )
}

const Modals = () => {
    const [modalIsOpen, triggerModal] = useState(false);

    const toggleModal = () => {
        // ! before a boolen value will flip the value like below
        triggerModal(!modalIsOpen);
    }

    return (
        <div className="modals-box">
            <div className="modal-open-button" onClick={toggleModal}>Purchase</div>
            {modalIsOpen && <ModalWindow closeMethod={toggleModal} />}
        </div>
    )
}



// MODALS //

const baseStoreUrl = process.env.REACT_APP_WOOCOMMERCE_BASEURL

const AllProducts = () => {

    const endpoint = `${baseStoreUrl}/products`
    const { data: products, error, loading } = useAxios({
        url: endpoint
    })

    if (loading) return "Loading...";
    if (!products) return "No data...";
    if (products.length === 0) return "No results found!";
    if (error) return "Error!";

    console.log(products);

    const renderProducts = products.map((product, index) => {
        const GetImageOrPlaceHolder = () => {

            if (product.images.length > 0) {
                return (
                    <img className="shop-item-image" src={product.images[0].src} alt={product.name} />
                )
            }
            else {
                return (
                    <img src="https://via.placeholder.com/500" alt="placeholder" />
                )
            }
        }

        return (
            <>
                <div className="shop-item-box" key={index}>
                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                        <div className="shop-item">
                            <div className="shop-image-box">
                                <GetImageOrPlaceHolder />
                            </div>
                            <div className="shop-text-and-price-box">
                                <h3>{product.name}</h3>
                                {product.prices.currency_prefix}
                                {formatPrice(product.prices.price)}
                            </div>
                        </div>
                    </Link>
                    <Modals />
                </div>
            </>
        )
    })
    return renderProducts
}



const StoreFront = () => {
    useEffect(() => {
        document.title = "Shop"
    }, [])
    return (
        <>
            {/* hero section  */}
            <div className="grey-hero-section">
                <div className='shop-title'>MERCHANDISE SHOP</div>
            </div>
            {/* shop description  */}
            <div className="shop-description-text">Check out our range of Thompson Electrical merchandise! Shipping available nationwide.</div>
            <div className="shop-container">
                <AllProducts />
            </div>
        </>
    )
}

export default StoreFront