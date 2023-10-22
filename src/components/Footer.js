import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="conatiner"> 
        <hr />

        <div className="conatiner flex footer-section">
          <div className="link-column flex Lorem">
            <p className=" companys-logo">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries....
            </p>
            <div className="footer-social">
              <ul className="main-ul">
                <li>
                  <a href="#">
                    <img
                      src="\images\Group 230.svg"
                      className="fa fa-facebook"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/hiscraves">
                    <img
                      src="\images\Group 231.svg"
                      className="fa fa-facebook"
                      aria-hidden="true"
                    />
                  </a>
                </li>

                <li>
                  <a target="_blank" href="https://www.instagram.com/hiscraves">
                    <img
                      src="\images\Group 232.svg"
                      className="fa fa-facebook"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/hiscraves"
                  >
                    <img 
                      src="\images\Group 233.svg"
                      className="fa fa-facebook"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://in.pinterest.com/hiscraves/">
                    <img
                      src="\images\Group 234.svg"
                      className="fa fa-facebook"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="link-column flex">
            <h3>ONLINE SHOPPING</h3>
            <a href="#" className="hover-links">
              Men’s T-Shirts
            </a>
            <a href="#" className="hover-links">
              Women’s Wear
            </a>
            <a href="#" className="hover-links">
              Winter Collections
            </a>
            <a href="#" className="hover-links">
              Hooded T-Shirts
            </a>
            <a href="#" className="hover-links">
              Streetwear Collections
            </a>
          </div>
          <div className="link-column flex">
            <h3>CUSTOMER POLICIES</h3>
            <a href="#" className="hover-links">
              About Us
            </a>
            <a href="#" className="hover-links">
              Terms & Conditions
            </a>
            <a href="#" className="hover-links">
               Returns Policy
            </a>
            <a href="#" className="hover-links">
              Cancellation & Refund Policy
            </a>
            <a href="#" className="hover-links">
              Contact Us
            </a>
          </div>
          <div className="link-column flex">
            <h3>STORE INFORMATION</h3>
            <a href="#" className="hover-links maps">
              <i className="fa fa-map-marker"></i>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </a>
            <a href="#" className="hover-links">
              <i className="fa fa-phone"></i>
              Call Us: 1234567890
            </a>
            <a href="#" className="hover-links">
              <i className=" fa fa-envelope-o"></i>
              Email Us: info@yourmail.com
            </a>
          </div>
        </div>
      </footer>

      <div className="subfooter ">
        <div className="container flex subfooter-ctn">
          <span>©2022-23 Powered By dummy team</span>
        </div>
      </div>
    </>
  );
}
