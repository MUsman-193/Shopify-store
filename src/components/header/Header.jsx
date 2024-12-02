import React,{useState} from "react";
import header_logo from "../../assets/image/Home_images/logo/brand_logo.png";
import { CiSearch } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { HiMiniBars3 } from "react-icons/hi2";

import "./Header.css";

const data = [
  {
    name: "MEN",
    path: "/",
  },
  {
    name: "WOMEN",
    path: "/",
  },
  {
    name: "KIDS",
    path: "/",
  },
  {
    name: "HOME & LIVING",
    path: "/",
  },
  {
    name: "BEAUTY",
    path: "/",
  },
];

const NavigationBar = () => {
  const handlePrevent = (e) => {
    e.stopPropagation();
  };

  return (
    <nav onClick={handlePrevent}>
      <ul>
        {data.map((el, index) => (
          <li key={index}>
            <a  href={el.path}> 
              {el.name}
              </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSideBarToggle = () => {
      setShowSidebar(!showSidebar);
  }
  return (
    <>
      <marquee className="header_txt_slider">
        Big Offer Dhamaka on F&B, Grocery, Beauty Care, Health and Wellness,
        Home and Kitchen, Fashion & Electronics. You Can Check the Discounts on
        Checkout Page.
      </marquee>

      <header className="header">
        <div className="header_logo">
          <img src={header_logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>HOME & LIVING</li>
            <li>BEAUTY</li>
          </ul>
        </nav>
        <div className="header_icons">
          <CiSearch />
          <BsPersonFill />
          <FiShoppingCart />
          <HiMiniBars3/>
        </div>
      </header>
    </>
  );
}
