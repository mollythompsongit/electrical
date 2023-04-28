const returnSubtype = (subtype) => {
    if (subtype === "faqs") {
        return "faq"
    }
    // else if (subtype = "post") {
    //     return "post"
    // }
    else {
        return subtype
    }
}

export default returnSubtype;