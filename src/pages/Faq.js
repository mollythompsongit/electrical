import FaqItem from "../components/FaqItem"
import { useEffect } from 'react'

const Faq = () => {
    useEffect(() => {
        document.title = "FAQ"
    }, [])
    return (
        <>
            {/* hero section  */}
            <div className="grey-hero-section">
                <div className='faq-title'>FREQUENTLY ASKED QUESTIONS</div>
            </div>
            <div className="faq-container">
                <FaqItem />
            </div>
        </>
    )
}

export default Faq