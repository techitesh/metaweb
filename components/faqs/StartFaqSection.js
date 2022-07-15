import React from "react";

const StartFaqSection = () => {
  return (
    <section className="pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <h2 className="mb0">FAQS</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt60">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Incomprehensibility or readability? That is the question.
                  </button>
                </h2>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading-1"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="data-reqs">
                      <h5 className="pb20">Content List</h5>
                      <p>
                        5 Years Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's specimen book. Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-2">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Origin and meaning of the Lorem Ipsum text
                  </button>
                </h2>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-2"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="data-reqs">
                      <h5 className="pb20">Content List</h5>
                      <p>
                        5 Years Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's specimen book. Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt60">
            <div className="accordion" id="accordionExample-a">
              <div className="accordion-item bdr0">
                <h2 className="accordion-header" id="heading-b">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1a"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Incomprehensibility or readability? That is the question.
                  </button>
                </h2>
                <div
                  id="collapse-1a"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading-b"
                  data-bs-parent="#accordionExample-a"
                >
                  <div className="accordion-body">
                    <div className="data-reqs">
                      <h5 className="pb20">Content List</h5>
                      <p>
                        5 Years Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's specimen book. Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item bdr0">
                <h2 className="accordion-header" id="heading-c">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2a"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Origin and meaning of the Lorem Ipsum text
                  </button>
                </h2>
                <div
                  id="collapse-2a"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-c"
                  data-bs-parent="#accordionExample-a"
                >
                  <div className="accordion-body">
                    <div className="data-reqs">
                      <h5 className="pb20">Content List</h5>
                      <p>
                        5 Years Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's specimen book. Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartFaqSection;
