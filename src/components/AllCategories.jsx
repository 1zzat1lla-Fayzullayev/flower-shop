import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import { useState } from "react";

function AllCategories() {
  const categories = useSelector((state) => state.categories.array);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="py-10">
      <div className="text-center" id="getStart">
        <h1 className="text-3xl font-bold text-base-content">All Categories</h1>
      </div>
      <Wrapper>
        <div
          className="mt-10 flex justify-center items-center flex-wrap gap-5"
          data-aos="fade-up"
        >
          {categories.map((v, i) => (
            <div
              key={i}
              onClick={() => navigate(`/category/${v.id}`)}
              className="transition-transform hover:-translate-y-1"
            >
              <div className="card max-w-[250px] md:max-w-[300px] shadow-2xl cursor-pointer">
                <figure>
                  <img
                    className="object-cover h-[400px] rounded-lg"
                    src={v.image}
                    alt={v.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{v.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

export default AllCategories;
