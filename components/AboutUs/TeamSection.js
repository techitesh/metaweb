import React from 'react'

const TeamSection = () => {
  return (
    <section className="dg-testinomial-section bg-gradient5 dark-bg4  pb80 pt80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <h2 className="mb20">Meet our Team</h2>
              <p className="mb30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
        <div className="single-slide owl-carousel mt60">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4">
              <div className="image-block upset h-scl-">
                <div className="image-div h-scl-base"><img src="/images/team/team-single.jpg" alt="team" className="img-fluid" /></div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="full-image-card mt0">
                <div className="info-text-block">
                  <h3><a href="#">Anna Rexia</a></h3>
                  <p>Company CTO</p>
                  <div className="social-media-profile">
                    <a href="javascript:void(0)" target="blank"><i className="fab fa-facebook"></i></a>
                    <a href="javascript:void(0)" target="blank"><i className="fab fa-twitter"></i></a>
                    <a href="javascript:void(0)" target="blank"><i className="fab fa-instagram"></i></a>
                    <a href="javascript:void(0)" target="blank"><i className="fab fa-linkedin"></i></a>
                    <a href="javascript:void(0)" target="blank"><i className="fab fa-dribbble"></i></a>
                  </div>
                </div>
                <div className="otherinfo">
                  <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4">
              <div className="image-block upset">
                <div className="image-div"><a href="#"><img src="/images/team/team-single.jpg" alt="team" className="img-fluid" /></a></div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="full-image-card mt0">
                <div className="info-text-block">
                  <h3><a href="#">Anna Rexia</a></h3>
                  <p>Company CTO</p>
                  <div className="social-media-profile">
                    <a href="javascript:void(0)" target="blank"><i className="fab fa-facebook"></i></a>
                    <a href="javascript:void(0)" target="blank"><i className="fab fa-twitter"></i></a>
                    <a href="javascript:void(0)" target="blank"><i className="fab fa-instagram"></i></a>
                    <a href="javascript:void(0)" target="blank"><i className="fab fa-linkedin"></i></a>
                    <a href="javascript:void(0)" target="blank"><i className="fab fa-dribbble"></i></a>
                  </div>
                </div>
                <div className="otherinfo">
                  <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt60">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mt30 h-scl-">
                <div className="img-ca2set h-scl-base"><img src="/images/about/office-1.jpg" alt="companyname" className="img-fluid w-100" /></div>
              </div>
              <div className="col-lg-7 mt30 h-scl-">
                <div className="img-ca2set h-scl-base"><img src="/images/about/office-2.jpg" alt="companyname" className="img-fluid w-100" /></div>
              </div>
              <div className="col-lg-7 mt30 h-scl-">
                <div className="img-ca2set h-scl-base"><img src="/images/about/office-3.jpg" alt="companyname" className="img-fluid w-100" /></div>
              </div>
              <div className="col-lg-5 mt30 h-scl-">
                <div className="img-ca2set h-scl-base"><img src="/images/about/office-4.jpg" alt="companyname" className="img-fluid w-100" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default TeamSection