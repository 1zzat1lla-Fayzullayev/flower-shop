import React from "react";
import telegram from "../assets/telegram-svgrepo-com.svg";
import instagram from "../assets/instagram-1-svgrepo-com.svg";
import phone from "../assets/phone-svgrepo-com.svg";
import flower from "../assets/logo.png";

function Footer() {
  return (
    <>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-[100px]">
        <aside className="items-center grid-flow-col">
          <img src={flower} alt="logo" className="w-[40px]" />
          <p>Copyright © 2024 - Flowers</p>
        </aside>
        <nav className="grid-flow-col gap-2 md:place-self-center md:justify-self-end">
          <a href="https://t.me/flowers_unik" target="_blank">
            <img
              src={telegram}
              alt="telegram png"
              className="w-[40px] cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
            />
          </a>
          <a href="https://www.instagram.com/flowers_unik/" target="_blank">
            <img
              src={instagram}
              alt="instagram png"
              className="w-[40px] cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
            />
          </a>
          <a href="tel:+998953336000">
            <img
              src={phone}
              alt="phone png"
              className="w-[40px] cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
            />
          </a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
