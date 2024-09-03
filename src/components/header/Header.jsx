import React from "react";
import header_logo from "../../assets/image/Home_images/logo/brand_logo.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header>
        <div className="header_slider">
          <marquee className="header_slider_txt">
            Big Offer Dhamaka on F&B, Grocery, Beauty Care, Health and Wellness,
            Home and Kitchen, Fashion & Electronics. You Can Check the Discounts
            on Checkout Page.
          </marquee>
        </div>
        <div className="header">
          <div className="logo_nav_container">
            <div className="header_nav_logo">
              <AiOutlineBars />
            </div>
            <div className="header_logo">
              <img src={header_logo} alt="" />
            </div>
            <nav className="nav_bar">
              <ul>
                <li>Store Near Me</li>
                <li>Product Near Me</li>
                <li>Fashion</li>
                <li>Beauty & Personal Care</li>
                <li>Home Decor</li>
                <li>Electronics</li>
              </ul>
            </nav>
          </div>
          <div className="header_search_container">
            <div className="header_search">
              <div className="header_search_icon">
                <BsSearch />
              </div>
              <div className="header_input">
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <nav className="header_icons">
              <ul>
                <li>
                  {" "}
                  <AiOutlineShoppingCart />{" "}
                </li>
                <li>
                  {" "}
                  <BsFillPersonFill />{" "}
                </li>
                <li>
                  {" "}
                  <HiLocationMarker />{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* -------------------------- */}
        <div className="header_input_container_2">
          <div className="header_search_2">
            <div className="header_search_icon">
              <BsSearch />
            </div>
            <div className="header_input">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
