const formatPrice = (price) => {
    const priceToInterger = parseInt(price) / 100;
    const twoDecimalPrice = priceToInterger.toFixed(2)
    return twoDecimalPrice
}

export default formatPrice;