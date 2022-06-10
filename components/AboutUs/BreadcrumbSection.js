import React from 'react'

const BreadcrumbSection = () => {
  return (
    <section className="breadcrumb-area text-l banner-1">
      <div className="text-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 v-center">
              <div className="bread-inner">
                <div className="bread-menu">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">About Us</a></li>
                  </ul>
                </div>
                <div className="bread-title">
                  <h2>About Niwax Company</h2>
                  <p className="pt20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  <a href="#" className="btn-main bg-btn lnk mt30">Contact Us <i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 v-center">
              <div className="img-design h-scl-">
                <div className="imgac "> <img src="/images/banner/office-view-2.jpg" alt="creative agnecy html template" className="ag-dg1 img-fluid h-scl-base" /></div>
                <div className="imgac h-scl-base"><img src="/images/banner/office-view-1.jpg" alt="creative agnecy html template" className="ag-dg2 img-fluid " /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default BreadcrumbSection