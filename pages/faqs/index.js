import React, { Fragment } from 'react'
import BreadcrumbSection from '../../components/faqs/BreadcrumbSection'
import MobileContactSection from '../../components/faqs/MobileContactSection'
import StartFaqSection from '../../components/faqs/startfaqsection'
const faqs = () => {
    return (
        <Fragment>
            <MobileContactSection />
            <BreadcrumbSection />
            <StartFaqSection />
            
        </Fragment>   
      )
}
       

export default faqs;