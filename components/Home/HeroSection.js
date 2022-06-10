import React from 'react'

const HeroSection = () => {
	return (
		<section className="hero-card-web bg-gradient12 shape-bg3" id="home">
			<div className="hero-main-rp container-fluid">
				<div className="row">
					<div className="col-lg-5">
						<div className="hero-heading-sec">
							<h2 className="wow fadeIn" data-wow-delay="0.3s"><span>Web.</span> <span>Mobile.</span>
								<span>Graphic.</span> <span>Marketing.</span></h2>
							<p className="wow fadeIn" data-wow-delay="0.6s">Website and App development solution for
								transforming and innovating businesses.</p>
							<a href="#" className="btn-main bg-btn lnk wow fadeIn" data-wow-delay="0.8s" data-bs-toggle="modal"
								data-bs-target="#menu-popup">Contact Us <i className="fas fa-chevron-right fa-ani"></i><span
									className="circle"></span></a>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="hero-content-sec wow fadeIn" data-wow-delay="0.8s">
						</div>
						<div className="hero-right-scmm">
							<div className="hero-service-cards wow fadeInRight" data-wow-duration="2s">
								<div className="owl-carousel service-card-prb">
									<div className="service-slide card-bg-a" data-tilt data-tilt-max="5" data-tilt-speed="1000">
										<a href="#">
											<div className="service-card-hh">
												<div className="image-sr-mm">
													<img alt="custom-sport" src="/images/service/vr.png" />
												</div>
												<div className="title-serv-c"><span>VR</span> Solution</div>
											</div>
										</a>
									</div>
									<div className="service-slide card-bg-b" data-tilt data-tilt-max="5" data-tilt-speed="1000">
										<a href="#">
											<div className="service-card-hh">
												<div className="image-sr-mm">
													<img alt="custom-sport" src="/images/service/app-develop.png" />
												</div>
												<div className="title-serv-c"><span>Custom</span> App Solution</div>
											</div>
										</a>
									</div>
									<div className="service-slide card-bg-c" data-tilt data-tilt-max="5" data-tilt-speed="1000">
										<a href="#">
											<div className="service-card-hh">
												<div className="image-sr-mm">
													<img alt="custom-sport" src="/images/service/startup.png" />
												</div>
												<div className="title-serv-c"><span>Startup</span> Solution</div>
											</div>
										</a>
									</div>
									<div className="service-slide card-bg-d" data-tilt data-tilt-max="5" data-tilt-speed="1000">
										<a href="#">
											<div className="service-card-hh">
												<div className="image-sr-mm">
													<img alt="custom-sport" src="/images/service/car-rental.png" />
												</div>
												<div className="title-serv-c"><span>Car</span> Rental Solution</div>
											</div>
										</a>
									</div>
									<div className="service-slide card-bg-e" data-tilt data-tilt-max="5" data-tilt-speed="1000">
										<a href="#">
											<div className="service-card-hh">
												<div className="image-sr-mm">
													<img alt="custom-sport" src="/images/service/marketing.png" />
												</div>
												<div className="title-serv-c"><span>Marketing</span> Solution</div>
											</div>
										</a>
									</div>
									<div className="service-slide card-bg-f" data-tilt data-tilt-max="5" data-tilt-speed="1000">
										<a href="#">
											<div className="service-card-hh">
												<div className="image-sr-mm">
													<img alt="custom-sport" src="/images/service/ewallet.png" />
												</div>
												<div className="title-serv-c"><span>e-Wallet</span> Solution</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection