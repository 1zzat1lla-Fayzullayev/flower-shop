import React, { useEffect, useState } from "react";
import arrow from "../assets/arrow-top-3-svgrepo-com.svg";

function Tell() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const scrollThreshold = 200;
      setShowArrow(position > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showArrow && (
        <a href="#">
          <img
            src={arrow}
            alt="arrow"
            className="bg-base-300 rounded-[50%] w-[60px] fixed right-2 top-[86%] cursor-pointer"
          />
        </a>
      )}
    </>
  );
}

export default Tell;
