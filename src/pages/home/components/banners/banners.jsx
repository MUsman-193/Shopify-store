import React, { useEffect, useState } from "react";
import "./banners.css";
function Product() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    getBrandImages();
  }, []);
  async function getBrandImages() {
    fetch("/banner.json")
      .then((res) => res.json())
      .then((res) => {
        setBanner(res);
      })
      .catch((err) => {});
  }
  return (
    <>
      <div className="product_container">
        {banner.map((el, index) => (
          <div className="product_image_container">
            <img src={el.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
