import React from 'react'

const Location = () => {
	return (
		<section className="our-office pad-tb">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="common-heading">
							<span>Our Locations</span>
							<h2>Our Office</h2>
						</div>
					</div>
				</div>
				<div className="row justify-content-center upset shape-numm">
					<div className="col-lg-4 col-sm-6 shape-loc wow fadeInUp" data-wow-delay=".2s">
						<div className="office-card">
							<div className="skyline-img" data-tilt data-tilt-max="4" data-tilt-speed="1000">
								<img src="/images/location/newyork.png" alt="Ahmedabad" className="img-fluid" />
							</div>
							<div className="office-text">
								<h4>Ahmedabad</h4>
								<p>C-1009,Siddhi Vinayak Business Tower, Near Kataria House, SG Highway, Makarba, 380058</p>
								<a href="https://goo.gl/maps/XcxHQUANKsqb7JqY6" target="blank" className="btn-outline rount-btn"><i
									className="fas fa-map-marker-alt"></i></a>
								<a href="mailto:info@wemosys.com" target="blank" className="btn-outline rount-btn"><i
									className="fas fa-phone-alt"></i></a>
								<a href="javascript:void(0)" target="blank" className="btn-outline rount-btn"><i
									className="fas fa-envelope"></i></a>
								<a href="javascript:void(0)" target="blank" className="btn-outline rount-btn"><i
									className="fab fa-skype"></i></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 shape-loc wow fadeInUp" data-wow-delay=".5s">
						<div className="office-card">
							<div className="skyline-img" data-tilt data-tilt-max="4" data-tilt-speed="1000">
								<img src="/images/location/sydeny.png" alt="sydney" className="img-fluid" />
							</div>
							<div className="office-text">
								<h4>Banglore</h4>
								<p>1794/36, BHIVE HSR 27th Main, 3, 27th Main Rd, 2nd Sector, HSR Layout, Bengaluru, Karnataka 560037</p>
								<a href="javascript:void(0)" target="blank" className="btn-outline rount-btn"><i
									className="fas fa-map-marker-alt"></i></a>
								<a href="javascript:void(0)" target="blank" className="btn-outline rount-btn"><i
									className="fas fa-phone-alt"></i></a>
								<a href="javascript:void(0)" target="blank" className="btn-outline rount-btn"><i
									className="fas fa-envelope"></i></a>
								<a href="javascript:void(0)" target="blank" className="btn-outline rount-btn"><i
									className="fab fa-skype"></i></a>
							</div>
						</div>
					</div>
					{/* <div className="col-lg-4 col-sm-6 shape-loc wow fadeInUp" data-wow-delay=".8s">
						<div className="office-card mb0">
							<div className="skyline-img" data-tilt data-tilt-max="4" data-tilt-speed="1000">
								<img src="/images/location/rome.png" alt="rome" className="img-fluid" />
							</div>
							<div className="office-text">
								<h4>Rome</h4>
								<p>9988 Piazzetta Scalette Rubiani 99, Rome, 84090</p>
								<a href="javascript:void(0)" target="blank" className="btn-outline rount-btn"><i
									className="fas fa-map-marker-alt"></i></a>
								<a href="javascript:void(0)" target="blank" className="btn-outline rount-btn"><i
									className="fas fa-phone-alt"></i></a>
								<a href="javascript:void(0)" target="blank" className="btn-outline rount-btn"><i
									className="fas fa-envelope"></i></a>
								<a href="javascript:void(0)" target="blank" className="btn-outline rount-btn"><i
									className="fab fa-skype"></i></a>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>)
}

export default Location