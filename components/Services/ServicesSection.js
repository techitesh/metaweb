import React from 'react'

const ServicesSection = () => {
  return (
    <section className="service-block bg-gradient6 pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="common-heading ptag">
              <span>Service</span>
              <h2>Our Services</h2>
              <p className="mb30">We think big and have hands in all leading technology platforms to provide you wide array of services.</p>
            </div>
          </div>
        </div>
        <div className="row upset link-hover">

          <div className="col-lg-6 col-sm-6 mt30  wow fadeInUp" data-wow-delay=".2s">
            <div className="s-block wide-sblock">
              <div className="s-card-icon-large"><img src="/images/service/mob-service-item2.png" alt="service" className="img-fluid" /></div>
              <div className="s-block-content-large">
                <h4>iOS App Development</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div></div>
          </div>

          <div className="col-lg-6 col-sm-6 mt30 wow fadeInUp" data-wow-delay=".4s">
            <div className="s-block wide-sblock">
              <div className="s-card-icon-large"><img src="/images/service/mob-service-item1.png" alt="service" className="img-fluid" /></div>
              <div className="s-block-content-large">
                <h4>Android App Development</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div></div>
          </div>

          <div className="col-lg-6 col-sm-6 mt30 wow fadeInUp" data-wow-delay=".6s">
            <div className="s-block wide-sblock">
              <div className="s-card-icon-large"><img src="/images/service/mob-service-item3.png" alt="service" className="img-fluid" /></div>
              <div className="s-block-content-large">
                <h4>Cross Platform App Development</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div></div>
          </div>

          <div className="col-lg-6 col-sm-6 mt30 wow fadeInUp" data-wow-delay=".8s">
            <div className="s-block wide-sblock">
              <div className="s-card-icon-large"><img src="/images/service/mob-service-item4.png" alt="service" className="img-fluid" /></div>
              <div className="s-block-content-large">
                <h4>Wearable App Development</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div></div>
          </div>


        </div>
        <div className="-cta-btn mt70">
          <div className="free-cta-title v-center wow zoomInDown" data-wow-delay="1.1s">
            <p>Hire a <span>Dedicated Developer</span></p>
            <a href="#" className="btn-main bg-btn2 lnk">Hire Now<i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a>
          </div>
        </div>
      </div>
    </section>)
}

export default ServicesSection