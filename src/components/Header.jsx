import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  delUserArray,
  minusCount,
  minusUserArray,
  plusCount,
  setCount,
  setUserArray,
} from "../redux/reducers/userProduct";
import Hamburger from "../shared/ui/Hamburger";
import List from "../shared/List";
import SwapThemeSVG from "../shared/ui/SwapThemeSVG";
import ShopSVG from "../svg/ShopSVG";
import ShopModal from "../shared/ShopModal";

function Header() {
  const [showSelectedF, setShowSelectedF] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const [themeChanged, setThemeChanged] = useState(false);
  const selectedFlowers = useSelector((state) => state.userProduct.myArray);
  const selectedFlowersCount = useSelector((state) => state.userProduct.count);
  const priceOfAllProducts = useSelector(
    (state) => state.userProduct.priceOfAllProducts
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMinus = (userProduct, i) => {
    if (userProduct.count == 1) {
      dispatch(delUserArray({ userProduct, i }));
    } else {
      dispatch(minusUserArray(userProduct));
    }
    dispatch(minusCount());
  };

  const handlePlus = (userProduct) => {
    dispatch(setUserArray(userProduct));
    dispatch(plusCount());
  };
  const handleDel = (userProduct, i) => {
    dispatch(delUserArray({ userProduct, i }));
    dispatch(setCount(userProduct.count));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = () => {
    if (!themeChanged) {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }
  };

  return (
    <header className="fixed w-full z-[9999] font-Poppins">
      <div className="navbar bg-base-100 w-full p-3">
        <div className="navbar-start">
          <div className="dropdown">
            {/* Hamburger */}
            <Hamburger />
            <ul
              tabIndex={0}
              className="relative menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <List />
            </ul>
          </div>
          <div
            className="w-[50px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="flowersunique" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <List />
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <SwapThemeSVG handleToggle={handleToggle} />

          {/* Shop svg */}
          <ShopSVG
            selectedFlowersCount={selectedFlowersCount}
            setShowSelectedF={setShowSelectedF}
            showSelectedF={showSelectedF}
          />
        </div>
        {/*  */}
        <ShopModal
          handleDel={handleDel}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          selectedFlowers={selectedFlowers}
          showSelectedF={showSelectedF}
          //shared dgan papka modal kichkina narsala ucn iwlatilinadi ui bosa button input narsalani ajratb olwcun farq wu reduxda oclick qvotgan joyizga vawe cunmadmde document dgani qowomadm
          //hoz Xop
        />
      </div>
    </header>
  );
}

export default Header;

//mani scss larim qani ocrb bowidan yozb ciqdm scss da yoziwga organmaganman
