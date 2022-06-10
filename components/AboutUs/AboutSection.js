import React from 'react'

const AboutSection = () => {
  return (
    <section className="about-agencys pad-tb block-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 v-center">
            <div className="image-block upset bg-shape wow fadeIn">
              <img src="/images/about/cheerful-businessman.jpg" alt="about us Niwax" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="common-heading text-l">
              <span>Chairman's message</span>
              <h2 className="mb0">Tom Smile</h2>
              <p className="niwax21">{`Founder, Chairman & CFO`}</p>
              <p className="pt20"><i className="fas fa-quote-left"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. <i className="fas fa-quote-right"></i> </p>
              <a href="#" className="btn-main bg-btn3 lnk mt30">Meet Our Team <i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default AboutSection