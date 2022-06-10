import React from 'react'

const FeaturesSection = () => {
  return (
    <section className="about-agencys pad-tb block-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>Our Philosophy</span>
              <h2>Our Business Philosophy</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center niwaxgap40">
          <div className="col-lg-5 v-center order1">
            <div className="image-block">
              <img src="/images/about/leadership.jpg" alt="about us Niwax" className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-5 v-center order2">
            <div className="common-heading text-l">
              <span>Supervision</span>
              <h2 className="mb20">Leadership</h2>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center niwaxgap40 mt60">
          <div className="col-lg-5 v-center order2">
            <div className="common-heading text-l">
              <span>Strength</span>
              <h2 className="mb20">Team Collaboration</h2>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="col-lg-5 v-center order1">
            <div className="image-block">
              <img src="/images/about/collaboration.jpg" alt="about us Niwax" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="row justify-content-center niwaxgap40 mt60">

          <div className="col-lg-5 v-center order1">
            <div className="image-block">
              <img src="/images/about/transparency.jpg" alt="about us Niwax" className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-5 v-center order2">
            <div className="common-heading text-l">
              <span>Quality</span>
              <h2 className="mb20">{`Transparency & Integrity`}</h2>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

        </div>
      </div>
    </section>)
}

export default FeaturesSection