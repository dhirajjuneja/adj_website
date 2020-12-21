import React from "react";

function MainBody() {
  return (
    <div>
      <main>
        <section className="carousel">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1526786220381-1d21eedf92bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  width="100%"
                  height="700px"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=749&q=80"
                  width="100%"
                  height="700px"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1506469717960-433cebe3f181?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                  width="100%"
                  height="700px"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </section>

        <section className="card_new">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    width="100%"
                    height="auto"
                    srcset=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    width="100%"
                    height="auto"
                    srcset=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    width="100%"
                    height="auto"
                    srcset=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    width="100%"
                    height="auto"
                    srcset=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    width="100%"
                    height="auto"
                    srcset=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container marketing">
            <div className="row">
              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 140x140"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#777"></rect>
                  <text x="50%" y="50%" fill="#777" dy=".3em">
                    140x140
                  </text>
                </svg>

                <h2>
                  <font>
                    <font>Website Developers</font>
                  </font>
                </h2>
                <p>
                  <font>
                    <font>
                      Access Leading Website-Development Tools that Enable You
                      to Build Anything You Want. It all Starts with a Stunning
                      Website.{" "}
                    </font>
                    <font>
                      Begin Your Online Journey Today. Free multilingual fonts.
                      100s of Apps.{" "}
                    </font>
                    <font>
                      Customizable online store. Multiple payment methods. Top
                      industry hosting.{" "}
                    </font>
                  </font>
                </p>
                <p>
                  <a className="btn btn-secondary" href="/" role="button">
                    <font>
                      <font>View details</font>
                    </font>
                  </a>
                </p>
              </div>

              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 140x140"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#777"></rect>
                  <text x="50%" y="50%" fill="#777" dy=".3em">
                    140x140
                  </text>
                </svg>

                <h2>
                  <font>
                    <font>Website Designers</font>
                  </font>
                </h2>
                <p>
                  <font>
                    <font>
                      Web designers plan, create and code internet sites and web
                      pages, many of which combine text with sounds, pictures,
                      graphics and video clips.{" "}
                    </font>
                    <font>
                      A web designer is responsible for creating the design and
                      layout of a website or web pages.{" "}
                    </font>
                    <font>
                      It and can mean working on a brand new website or updating
                      an already existing site.{" "}
                    </font>
                  </font>
                </p>
                <p>
                  <a className="btn btn-secondary" href="/" role="button">
                    <font>
                      <font>View details</font>
                    </font>
                  </a>
                </p>
              </div>

              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 140x140"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#777"></rect>
                  <text x="50%" y="50%" fill="#777" dy=".3em">
                    140x140
                  </text>
                </svg>

                <h2>
                  <font>
                    <font>Video Editors</font>
                  </font>
                </h2>
                <p>
                  <font>
                    <font>
                      According to the Bureau of Labor Statistics, film and
                      video editors in the U.S. make an average of $40 an hour.{" "}
                    </font>
                    <font>
                      Less experienced film and video editors make anywhere from
                      $35,000 to $40,000 a year, while more experienced editors
                      can make upwards of $80,000.{" "}
                    </font>
                  </font>
                </p>
                <p>
                  <a className="btn btn-secondary" href="/" role="button">
                    <font>
                      <font>View details</font>
                    </font>
                  </a>
                </p>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">
                  <font>
                    <font>Website Developers.</font>
                  </font>
                  <span className="text-muted">
                    <font>
                      <font>It will stun your mind.</font>
                    </font>
                  </span>
                </h2>
                <p className="lead">
                  <font>
                    <font>
                      In this commercial planning, as these reunions are loyal
                      to Lightning.{" "}
                    </font>
                    <font>
                      Create and without agreement without making the parties
                      share the business.{" "}
                    </font>
                    <font>
                      Rather, to single leaders, to commercial dominance until
                      then.{" "}
                    </font>
                    <font>He even created it Pal. </font>
                    <font>
                      Masha gate either, what is in the wisest of traditional
                      opponents.
                    </font>
                  </font>
                </p>
              </div>
              <div className="col-md-5">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#eee"></rect>
                  <text x="50%" y="50%" fill="#aaa" dy=".3em">
                    500x500
                  </text>
                </svg>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">
                  <font>
                    <font>Website Designers.</font>
                  </font>
                  <span className="text-muted">
                    <font>
                      <font>Watch for yourself.</font>
                    </font>
                  </span>
                </h2>
                <p className="lead">
                  <font>
                    <font>
                      Page and land deprivation or taking, so heavy adjacent and
                      might Britain.{" "}
                    </font>
                    <font>
                      He took no to declare hegemony, and in all loyalty to the
                      two peoples.{" "}
                    </font>
                    <font>
                      Losing costs why not, since it is rightly a heavy pro.{" "}
                    </font>
                    <font>
                      The Great Philippines was introduced, I collected a free
                      slogan where even.{" "}
                    </font>
                    <font>Show and leave necessary.</font>
                  </font>
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#eee"></rect>
                  <text x="50%" y="50%" fill="#aaa" dy=".3em">
                    500x500
                  </text>
                </svg>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">
                  <font>
                    <font>Lastly, Video Editors.</font>
                  </font>
                  <span className="text-muted">
                    <font>
                      <font>Bow Chicka Wow Meaw.</font>
                    </font>
                  </span>
                </h2>
                <p className="lead">
                  <font>
                    <font>
                      This territory moved off, a chair and earned a done pl.{" "}
                    </font>
                    <font>
                      Rightly so, but the powers and Finland, the atmosphere and
                      the costs were brought down, because the sixth was that.{" "}
                    </font>
                    <font>And after port of none, surf left that is. </font>
                    <font>
                      That states with lines, a declaration and a claim, the
                      European counterfeit, separately, it arose.
                    </font>
                  </font>
                </p>
              </div>
              <div className="col-md-5">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#eee"></rect>
                  <text x="50%" y="50%" fill="#aaa" dy=".3em">
                    500x500
                  </text>
                </svg>
              </div>
            </div>

            <hr className="featurette-divider" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainBody;
