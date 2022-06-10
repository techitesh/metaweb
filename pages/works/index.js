import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'

const index = () => {
  return (
    <Fragment>
        <section className="breadcrumb-area banner-3">
<div className="text-block">
<div className="container">
<div className="row">
<div className="col-lg-12 v-center">
<div className="bread-inner">
<div className="bread-menu">
<ul>
<li><a href="index.html">Home</a></li>
<li><a href="#">Portfolio</a></li>
</ul>
</div>
<div className="bread-title">
<h2>Our Projects</h2>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* <!--End Breadcrumb Area--> */}
{/* <!--Start Portfolio--> */}
<section className="portfolio-page pad-tb">
<div className="container">
<div className="row justify-content-left">
<div className="col-lg-6">
<div className="common-heading pp">
<span>Our Work</span>
<h2>Portfolio</h2>
</div>
</div>
<div className="col-lg-6 v-center">
<div className="filters">
<ul className="filter-menu">
<li data-filter="*" className="is-checked">All</li>
<li data-filter=".website">Website</li>
<li data-filter=".app">Mobile App</li>
<li data-filter=".graphic">Graphic</li>
</ul>
</div>
</div>
</div>
<div className="row card-list">
<div className="col-lg-4 col-md-6 grid-sizer"></div>
<div className="col-lg-4 col-sm-4 mt40 single-card-item website">
<div className="isotope_item up-hor">
<div className="item-/image">
<a href="#"><img src="/images/portfolio/app-img1.jpg" alt="/image" className="img-fluid" /> </a>
</div>
<div className="item-info-div shdo">
<h4><a href="#">{`Pets Care & Training App`}</a></h4>
<p>iOs, Android</p>
</div>
</div>
</div>
<div className="col-lg-4 col-sm-4 mt40 single-card-item website">
<div className="isotope_item up-hor">
<div className="item-/image">
<a href="#"><img src="/images/portfolio/app-img2.jpg" alt="/image" className="img-fluid" /> </a>
</div>
<div className="item-info-div shdo">
<h4><a href="#">Car Rental App</a></h4>
<p>Graphic, Print</p>
</div>
</div>
</div>
<div className="col-lg-4 col-sm-4 mt40 single-card-item app graphic">
<div className="isotope_item up-hor">
<div className="item-/image">
<a href="#"><img src="/images/portfolio/app-img3.jpg" alt="/image" className="img-fluid" /> </a>
</div>
<div className="item-info-div shdo">
<h4><a href="#">Event Management App</a></h4>
<p>Graphic, Print</p>
</div>
</div>
</div>
<div className="col-lg-4 col-sm-4 mt40 single-card-item app">
<div className="isotope_item up-hor">
<div className="item-/image">
<a href="#"><img src="/images/portfolio/app-img4.jpg" alt="/image" className="img-fluid" /> </a>
</div>
<div className="item-info-div shdo">
<h4><a href="#">Restaurant App</a></h4>
<p>iOs, Android</p>
</div>
</div>
</div>
<div className="col-lg-4 col-sm-4 mt40 single-card-item graphic website">
<div className="isotope_item up-hor">
<div className="item-/image">
<a href="#"><img src="/images/portfolio/app-img5.jpg" alt="/image" className="img-fluid" /> </a>
</div>
<div className="item-info-div shdo">
<h4><a href="#">Restaurant / Hotel App</a></h4>
<p>Graphic, Print</p>
</div>
</div>
</div>
<div className="col-lg-4 col-sm-4 mt40 single-card-item graphic app">
<div className="isotope_item up-hor">
<div className="item-/image">
<a href="#"><img src="/images/portfolio/app-img6.jpg" alt="/image" className="img-fluid" /> </a>
</div>
<div className="item-info-div shdo">
<h4><a href="#">Super Mart App</a></h4>
<p>Graphic, Print</p>
</div>
</div>
</div>
</div>
</div>
</section>
    </Fragment>  )
}

export default index