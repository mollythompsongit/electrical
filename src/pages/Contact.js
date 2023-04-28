import ContactInfo from './../components/ContactInfo'
import { useEffect } from 'react'

const Contact = () => {
    useEffect(() => {
        document.title = "Contact"
    }, [])
    return (
        <ContactInfo />
    )
}

export default Contact