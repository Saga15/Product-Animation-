import React from "react";

export default function Header() {
  return (
    <>
    <div className="top-heading">
      <h5>Welcome to Our Store Hiscraves</h5>
      <h5 className="">
              <i className="fa fa-phone"></i> &nbsp;
              Call Us: 1234567890
            </h5>
    </div>

      <nav>
        {" "}
        <div className=" main-nav flex">
          <a href="#" className="company-logo1">
            <img src="\images\Vector.svg" />
          </a>
          <div className="nav-links " id="nav-links">
            <ul className="flex">
              <li>
                <a href="#" className="hover-links">
                  <img src="\images\Vector (1).svg" />
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="hover-links">
                  <img src="\images\Vector (2).svg" />
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="hover-links">
                  <img src="\images\Vector (3).svg" />
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="hover-links">
                  <img src="\images\Vector (4).svg" />
                </a>
              </li>
            </ul>
          </div>
          <a href="#" className="nav-toggle hover-link" id="nav-toggle">
                <i className="fa fa-bars"></i>
            </a>
        </div>
      </nav>
      <section className="cta-section first-img">
        <img src="/images/image 1.png" className="cta-section" />
      </section>
    </>
  );
}
