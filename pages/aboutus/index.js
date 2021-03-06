import React, { Fragment } from "react";
import AboutSection from "../../components/AboutUs/AboutSection";
import BreadcrumbSection from "../../components/AboutUs/BreadcrumbSection";
import MissionVisionSection from "../../components/AboutUs/MissionVisionSection";
import SlidebarSection from "../../components/AboutUs/SlidebarSection";
import FeaturesSection from "../../components/AboutUs/FeaturesSection";
import ChooseSection from "../../components/AboutUs/ChooseSeaction";
import TimelineSection from "../../components/AboutUs/TimelineSection";
import TeamSection from "../../components/AboutUs/TeamSection";
import LocationSection from "../../components/AboutUs/LocationSection";
const AboutUs = () => {
  return (
    <Fragment>
      <SlidebarSection />
      <BreadcrumbSection />
      <AboutSection />
      <MissionVisionSection />
      <FeaturesSection />
      <ChooseSection />
      <TimelineSection />
      <TeamSection />
      <LocationSection />
    </Fragment>
  );
};

export default AboutUs;
