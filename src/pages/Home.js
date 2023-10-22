import React from "react";
import { useEffect, useState } from "react";

const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};

export default function Home() {
  // const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer = new window.IntersectionObserver(function (entries, self) {
      console.log("entries", entries);
      console.log("self", self);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, config);

    const imgs = document.querySelectorAll("[data-src]");
    imgs.forEach((img) => {
      observer.observe(img);
    });
    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  const loadImages = (image) => {
    image.src = image.dataset.src;
  };

  return (
    <>
      <section className="compny-section">
        <div className="container">
          <div className="logos flex">
            <div>
              <img className="logo" src="\images\Group 244.svg " alt="" />
              <h4> Men’s T-Shirts</h4>
            </div>

            <div>
              <img className="logo" src="\images\Group 245.svg " alt="" />
              <h4> Women’s Wear</h4>
            </div>
            <div>
              <img className="logo" src="\images\Group 246.svg " alt="" />
              <h4>Winter Collections</h4>
            </div>
            <div>
              <img className="logo" src="\images\Ellipse 10.svg" alt="" />
              <h4>Hooded T-Shirts</h4>
            </div>
            <div>
              <img className="logo" src="\images\Group 248.svg" alt="" />
              <h4>Polo Neck T-Shirts</h4>
            </div>
            <div>
              <img className="logo" src="\images\Group 249.svg " alt="" />
              <h4>Full Sleeves T-Shirts</h4>
            </div>
          </div>
        </div>
      </section>
      {/* fetures section */}

      <section className="compny-feature">
        <div className="container">
          <div className="feature-area flex">
            <div className="feature-card flex">
              <img className="baggy-img" src="\images\image 2.png" alt="" />
            </div>

            <div className="feature-card flex">
              <img className="baggy-img" src="\images\image 3.png" alt="" />
            </div>
            <div className="feature-area flex feature2">
              <div className="feature-card flex ">
                <img src="\images\image 4.png" alt="" />
              </div>
              <div className="feature-card flex">
                <img src="\images\image 6.png" alt="" />
              </div>
              <div className="feature-card flex">
                <img src="\images\image 5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Example section */}
      <section>
        <div className="container">
          <div className="feature-header ">
            <div className="new-feature">
              <div className="line" />

              <div>
                <h2 className="h2-text">Trending T-Shirts</h2>
              </div>

              <div className="line" />
            </div>
          </div>

          <div className="exam-area  flex">
            <div className="exam-area containers image">
              <img
                src=""
                data-src=" \images\Rectangle 3.svg"
                class="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image">
              <img
                src="\images\Rectangle 4.svg"
                className="example-card1 img img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image">
              <img
                src=""
                data-src=" \images\Rectangle 5.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image ">
              <img
                src=""
                data-src="\images\Rectangle 6.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
          </div>
          <div className="exam-area  flex">
            <div className="exam-area containers image ">
              <img
                src=""
                data-src="\images\Rectangle 3.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image">
              <img
                src=""
                data-src="\images\Rectangle 4.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image ">
              <img
                src=""
                data-src="\images\Rectangle 5.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image ">
              <img
                src=""
                data-src="\images\Rectangle 6.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>

              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
          </div>

          <div className="feature-header ">
            <br />
            <a href="#" className="secondary-btn">
              VIEW ALL
            </a>
          </div>

          <div className="feature-header ">
            <div className="new-feature">
              <div className="line" />

              <div>
                <h2 className="h2-text">Featured Products</h2>
              </div>

              <div className="line" />
            </div>
          </div>
          <div className="exam-area  flex">
            <div className="exam-area containers image">
              <img
                src=""
                data-src="\images\Rectangle 3.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image">
              <img
                src=""
                data-src="\images\Rectangle 4.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src=""
                    data-src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image">
              <img
                src=""
                data-src="\images\Rectangle 5.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image">
              <img
                src=""
                data-src=" \images\Rectangle 6.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
          </div>
          <div className="feature-header ">
            <br />
            <a href="#" className="secondary-btn">
              VIEW ALL
            </a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <img src="" data-src=" \images\banner1 2.png" className="cta-section" />
      </section>

      <section>
        <div className="container">
          <div className="feature-header ">
            <div className="new-feature">
              <div className="line" />

              <div>
                <h2 className="h2-text">New Products</h2>
              </div>

              <div className="line" />
            </div>
          </div>

          <div className="exam-area  flex">
            <div className="exam-area containers image">
              <img
                src="\images\Rectangle 3.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>
              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image">
              <img
                src="\images\Rectangle 4.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image">
              <img
                src=""
                data-src=" \images\Rectangle 5.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>
              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image">
              <img
                src=""
                data-src="\images\Rectangle 6.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>
              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
          </div>

          <div className="feature-header ">
            <br />
            <a href="#" className="secondary-btn">
              VIEW ALL
            </a>
          </div>

          <div className="feature-header ">
            <div className="new-feature">
              <div className="line" />

              <div>
                <h2 className="h2-text">Best Selling Products</h2>
              </div>

              <div className="line" />
            </div>
          </div>

          <div className="exam-area flex">
            <div className="exam-area containers image">
              <img
                src=""
                data-src="\images\Rectangle 3.svg"
                className="example-card1 img "
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>

              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>
              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <br></br>

            <div className="exam-area containers image ">
              <img
                src=""
                data-src="\images\Rectangle 4.svg"
                className="example-card1 img"
              />

              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>

              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image ">
              <img
                src=""
                data-src="\images\Rectangle 5.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
            <div className="exam-area containers image ">
              <img
                src=""
                data-src="\images\Rectangle 6.svg"
                className="example-card1 img"
              />
              <div className="text">
                <div className="img-background">
                  <img
                    src="\images\Vector-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Vector-2.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
                <div className="img-background">
                  <img
                    src="\images\Group-1.svg"
                    className="img-set"
                    onClick={() => alert("Add To cart")}
                  />
                </div>
              </div>
              <div className="name-tag">
                {" "}
                <h3>Men Henley Neck</h3>
                <h3>Full Sleeve Red Wine</h3>
                <div className="price">
                  {" "}
                  <text className="price-tag">₹399</text>
                  <del>₹1299</del>
                </div>
              </div>

              <div className="name-tag">
                <button className="size-tag">S</button>
                <button className="size-tag">M</button>
                <button className="size-tag">L</button>
                <button className="size-tag">XL</button>
                <button className="size-tag">XXL</button>
              </div>
            </div>
          </div>
          <div className="feature-header ">
            <br />
            <a href="#" className="secondary-btn">
              VIEW ALL
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="exam-area  flex">
            <div className="exam-area cards">
              <img
                src=""
                data-src="\images\Group 50.svg"
                className="example-card1 img"
              />
              <div className="intros">
                <h2>Streetwear Collections</h2>
              </div>
            </div>
            <div className="exam-area cards">
              <img
                src=""
                data-src="\images\Group 51.svg"
                className="example-card1 img"
              />
              <div className="intros">
                <h2>Striped T-Shirts</h2>
              </div>
            </div>
            <div className="exam-area cards">
              <img
                src=""
                data-src="\images\Group 52.svg"
                className="example-card1 img"
              />
              <div className="intros">
                <h2>Round Neck T-Shirts</h2>
              </div>
            </div>
          </div>
          <div className="exam-area  flex ">
            <div className="exam-area cards">
              <img
                src=""
                data-src="\images\Group 55.svg"
                className="example-card1 img"
              />
              <div className="intros">
                <h2>Printed T-Shirts</h2>
              </div>
            </div>

            <div className="exam-area cards">
              <img
                src=""
                data-src="\images\Group 54.svg"
                className="example-card1 img"
              />
              <div className="intros">
                <h2>Oversized T-Shirts</h2>
              </div>
            </div>
            <div className="exam-area cards">
              <img
                src=""
                data-src="\images\Group 53.svg"
                className="example-card1 img"
              />
              <div className="intros">
                <h2>Half Sleeves T-Shirts</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <img src="" data-src="\images\banner1 3.png" className="cta-section" />
      </section>

      <section>
        <div className="container">
          <div className="exam-area flex">
            <div className="exam-area">
              <img
                src=""
                data-src="\images\Group 85.png"
                className="example-card1 img"
              />
            </div>
            <div className="exam-area">
              <img
                src=""
                data-src="\images\Group 83.png"
                className="example-card1 img"
              />
            </div>{" "}
          </div>
        </div>
      </section>
      <section className="cta-section cta-ctn">
        <div>
          <img
            src=""
            data-src="\images\Group 203 (1).png"
            className="cta-section"
          />
          <img
            style={{
              position: "absolute",
              marginLeft: "-110px",
            }}
            src="\images\Ellipse 39.svg"
          />{" "}
        </div>

        <div className="elips">
          {" "}
          <img className="elips" src="\images\Ellipse 27.svg" />{" "}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="exam-area flex email-img ">
            <div className="exam-area">
              <img src="\images\Mask group.png" className="example-card1 img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
