import React from 'react'

const StatisticswrapSection = () => {
  return (
    <div className="statistics-wrap bg-gradient5">
      <div className="container">
        <div className="row small t-ctr mt0">
          <div className="col-lg-3 col-sm-6">
            <div className="statistics">
              <div className="statistics-img">
                <img src="/images/icons/deal.svg" alt="happy" className="img-fluid" />
              </div>
              <div className="statnumb">
                <span className="counter">250</span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="statistics">
              <div className="statistics-img">
                <img src="/images/icons/computers.svg" alt="project" className="img-fluid" />
              </div>
              <div className="statnumb counter-number">
                <span className="counter">100</span><span>+</span>
                <p>Projects Done</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="statistics">
              <div className="statistics-img">
                <img src="/images/icons/worker.svg" alt="work" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="statistics mb0">
              <div className="statistics-img">
                <img src="/images/icons/customer-service.svg" alt="support" className="img-fluid" />
              </div>
              <div className="statnumb">
                <span className="counter">24</span><span>/</span><span className="counter">7</span>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default StatisticswrapSection