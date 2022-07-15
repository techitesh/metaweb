import React from "react";

const MissionVisionSection = () => {
  return (
    <section className="missionvision dark-bg4 pad-tb bg-gradient3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <h2>
              A group of creative minds dedicated to creating the best apps and
              websites in the world.
            </h2>
          </div>
          <div className="col-lg-6 col-sm-12">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p className="mt15">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="row mt30">
          <div className="col-lg-6 col-sm-12 mt30">
            <div className="s-block2">
              <div className="card-icon">
                <img
                  src="/images/icons/vision.png"
                  alt="icon"
                  className="w80 mb20"
                />
              </div>
              <h3>Our Vision</h3>
              <p className="mt15">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt30">
            <div className="s-block2">
              <div className="card-icon">
                <img
                  src="/images/icons/mountain.png"
                  alt="icon"
                  className="w80 mb20"
                />
              </div>
              <h3>Our Mission</h3>
              <p className="mt15">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
