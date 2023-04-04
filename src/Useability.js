import React from "react";

function Useability() {
  return (
    <>
      {/* top banner */}
      <div className="top-banner">
        <div className="container">
          <div className="small-boldtext banner-text">
            {" "}
            📣 Figma prototype testing just got a whole lot better! Read more →
          </div>
        </div>
      </div>
      {/* navbar */}
      <nav>
        <div className="container main-nav flex">
          <a href="#" className="company-logo1">
            <img src="\images\CSS_project (2).png" alt="compny logo" />
          </a>
          <div className="nav-links">
            <ul className="flex">
              <li>
                {" "}
                <a href="#" className="hover-links">
                  {" "}
                  Product
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="hover-links">
                  {" "}
                  Customer
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="hover-links">
                  Pricing
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="hover-links">
                  {" "}
                  Resources
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="hover-links secondary-btn">
                  {" "}
                  Sign In
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="hover-links primary-btn">
                  {" "}
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* heading section */}
      <header>
        <div className="container header-section flex">
          <div className="left-header">
            <h1>Design confidently.</h1>
            <p>
              UsabilityHub is a remote user research platform that takes the
              guesswork out of design decisions by validating them with real
              users.
            </p>
            <a href="#" className="primary-btn get-started">
              {" "}
              Get Started
            </a>
          </div>
          <div className="right-header ">
            <img src="\images\CSS_project.jpg" alt="" />
          </div>
        </div>
      </header>

      {/* company logo section */}
      <section className="compny-section">
        <div className="container">
          <div className="small-boldtex companies-header">
            The world’s best companies rely on UsabilityHub to make better
            design decisions
          </div>
          <div className="logos flex">
            <img className="logo" src="\images\CSS_project (3).png" alt="" />
            <img className="logo" src="\images\CSS_project (4).png " alt="" />
            <img className="logo" src="\images\CSS_project (5).png " alt="" />
            <img className="logo" src="\images\CSS_project (8).png " alt="" />
            <img className="logo" src="\images\CSS_project (6).png " alt="" />
            <img className="logo" src="\images\godaddy.png" alt="" />
            <img className="logo" src="\images\CSS_project (7).png" alt="" />
          </div>
        </div>
      </section>
      {/* fetures section */}

      <section className="compny-feature">
        <div className="container">
          <div className="feature-header">
            <h2 className="h2-text">Your user research Swiss Army knife</h2>
            <a href="#" className="secondary-btn">
              See All Feature
            </a>
          </div>
          <div className="feature-area flex">
            <div className="feature-card flex">
              <img src="" alt="" />
              <h3>Card Sorting</h3>
              <p>Discover how people group and label information.</p>
              <a href="#" className="secondary-btn">
                Learn more
              </a>
            </div>

            <div className="feature-card flex">
              <img src="" alt="" />
              <h3>Prototype tests</h3>
              <p>Discover how people navigate your Figma prototypes</p>
              <a href="#" className="secondary-btn">
                Learn more
              </a>
            </div>
            <div className="feature-card flex">
              <img src="" alt="" />
              <h3>First click tests</h3>
              <p>Test interaction with first click and navigation tests.</p>
              <a href="#" className="secondary-btn">
                Learn more
              </a>
            </div>
            <div className="feature-card flex">
              <img src="" alt="" />
              <h3>Design surveys</h3>
              <p>Get feedback on images, videos or audio files.</p>
              <a href="#" className="secondary-btn">
                Learn more
              </a>
            </div>
            <div className="feature-card flex">
              <img src="" alt="" />
              <h3>Preference tests</h3>
              <p>Find out which designs users prefer and why.</p>
              <a href="#" className="secondary-btn">
                Learn more
              </a>
            </div>
            <div className="feature-card flex">
              <img src="" alt="" />
              <h3>Five second tests</h3>
              <p>Test comprehensibility by measuring first impressions</p>
              <a href="#" className="secondary-btn">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* big feature */}

      <section className="big-feature-section">
        <div className="container flex  big-feature-ctn">
          <div className="feature-img">
            <img src="\images\CSS_project (10).png" alt="" />
          </div>
          <div className="feature-desc">
            <h4>Effortless validation for</h4>
            <h2>Design professionals</h2>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intuitive and delightful experiences for your users
            </p>
          </div>
        </div>
      </section>

      <section className="big-feature-section">
        <div className="container flex  big-feature-ctn">
          <div className="feature-desc">
            <h4>Effortless validation for</h4>
            <h2>Design professionals</h2>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intuitive and delightful experiences for your users
            </p>
          </div>
          <div className="feature-img">
            <img src="\images\CSS_project (26).png" alt="" />
          </div>
        </div>
      </section>
      <section className="big-feature-section">
        <div className="container flex  big-feature-ctn">
          <div className="feature-img">
            <img src="\images\CSS_project (16).png" alt="" />
          </div>
          <div className="feature-desc">
            <h4>Effortless validation for</h4>
            <h2>Design professionals</h2>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intuitive and delightful experiences for your users
            </p>
          </div>
        </div>
      </section>

      {/* Example section */}
      <section>
        <div className="container">
          <div className="feature-header ">
            <h2 className="h2-text">One platform, emdless posibilities</h2>
            <a href="#" className="secondary-btn">
              See More Example
            </a>
          </div>
          <div className="exam-area  flex">
            <a href="#" className="example-card1">
              <h3 className="card-text">
                Can user complete a task in my software interface?
              </h3>{" "}
            </a>
            <a href="#" className="example-card2">
              <h3 className="card-text">
                Can user find important pages on my website
              </h3>{" "}
            </a>
            <a href="#" className="example-card3">
              <h3 className="card-text">
                is my website intended audience clear ?
              </h3>{" "}
            </a>
            <a href="#" className="example-card4">
              <h3 className="card-text">
                Do visitor understand what a page is about?
              </h3>{" "}
            </a>
          </div>
        </div>
      </section>
      {/* CTA-Section */}
      <section className="cta-section">
        <div className="container flex cta-container">
          <h2>Start Testing Today</h2>
          <p> Take the guesswork out of decisions</p>
          <a href="#" className="primary-btn">
            Get Started
          </a>
        </div>
      </section>

      <footer>
        <div className="conatiner flex footer-section">
          <a href="#" className="companys-logo">
            <img
              className="imgUi"
              src="\images\CSS_project (2).png"
              alt="company logo"
            />
          </a>
          <div className="link-column flex">
            <h3>Product</h3>
            <a href="#" className="hover-links">
              Overview
            </a>
            <a href="#" className="hover-links">
              Pricing
            </a>
            <a href="#" className="hover-links">
              Useabilityhube panel
            </a>
            <a href="#" className="hover-links">
              Customer
            </a>
            <a href="#" className="hover-links">
              Status Page
            </a>
            <a href="#" className="hover-links">
              Signup
            </a>
            <a href="#" className="hover-links">
              book a demo
            </a>
          </div>
          <div className="link-column flex">
            <h3>Methodologies</h3>
            <a href="#" className="hover-links">
              card Sorting
            </a>
            <a href="#" className="hover-links">
              prototype testing
            </a>
            <a href="#" className="hover-links">
              first click test
            </a>
            <a href="#" className="hover-links">
              Preference
            </a>
            <a href="#" className="hover-links">
              Five second test
            </a>
            <a href="#" className="hover-links">
              Design surveys
            </a>
          </div>
          <div className="link-column flex">
            <h3>Resources</h3>
            <a href="#" className="hover-links">
              Blog{" "}
            </a>
            <a href="#" className="hover-links">
              Example
            </a>
            <a href="#" className="hover-links">
              Testing Guides
            </a>
            <a href="#" className="hover-links">
              Help Center
            </a>
            <a href="#" className="hover-links">
              contact
            </a>
            <a href="#" className="hover-links">
              careers
            </a>
          </div>
        </div>
      </footer>
      <div className="subfooter ">
        <div className="container flex subfooter-ctn">
          <a href="#" className="hover-links">
            Privacy Policy
          </a>
          <a href="#" className="hover-links">
            Term & Condtions
          </a>
          <a href="#" className="hover-links">
            Security information
          </a>
          <a href="#" className="hover-links">
            <img src="\images\CSS_project (20).png" alt="" />
          </a>
          <a href="#" className="hover-links">
            {" "}
            <img src="\images\CSS_project (21).png" alt="" />
          </a>
          <a href="#" className="hover-links">
            {" "}
            <img src="\images\CSS_project (22).png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Useability;
