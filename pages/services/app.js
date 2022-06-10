import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import AboutSection from '../../components/Services/AboutSection'
import BreadCrumbSection from '../../components/Services/BreadcrumbSection'
import ChoosSection from '../../components/Services/ChoosSection'
import ProcessSection from '../../components/Services/ProcessSection'
import ServicesSection from '../../components/Services/ServicesSection'
import StatisticswrapSection from '../../components/Services/StatisticswrapSection'
import TechSection from '../../components/Services/TechSection'
import ProjectsSection from "../../components/Services/ProjectsSection"
import ReviewsSection from "../../components/Services/ReviewsSection"
import CTASection from '../../components/Services/CTASection'
import ContactUs from '../contact-us/Contactus'
const Service = () => {
    return (
        <Fragment>
            <BreadCrumbSection />
            <StatisticswrapSection />
            <AboutSection />
            <TechSection />
            <ServicesSection />
            <ProcessSection />
            <ChoosSection />
            <ProjectsSection />
            <ReviewsSection />
            <CTASection />
            <ContactUs />
        </Fragment>

    )
}

export default Service;