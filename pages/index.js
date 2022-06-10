import Head from 'next/head'
import { Fragment } from 'react/cjs/react.production.min'
import AboutSection from '../components/Home/AboutSection'
import BadgesSection from '../components/Home/BadgesSection'
import CategorySection from '../components/Home/CategorySection'
import ChooseUsSection from '../components/Home/ChooseUsSection'
import CTAsection from '../components/Home/CTAsection'
import HeroSection from '../components/Home/HeroSection'
import Location from '../components/Home/Location'
import OurClientsSection from '../components/Home/OurClientsSection'
import PortfolioSection from '../components/Home/PortfolioSection'
import ServiceSection from '../components/Home/ServiceSection'
import StatisticsSection from '../components/Home/StatisticsSection'
import TestinomialSection from '../components/Home/TestinomialSection'
import ContactUs from './contact-us/Contactus'


export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <StatisticsSection />
      <ChooseUsSection />
      <PortfolioSection />
      <OurClientsSection />
      {/* <BadgesSection /> */}
      <CategorySection />
      <TestinomialSection />
      <CTAsection />
      <Location />
      <ContactUs />
    </Fragment>

  )
}
