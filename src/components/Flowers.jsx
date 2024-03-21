import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FlowerCard from "./FlowerCard";
import Wrapper from "../layout/Wrapper";

function Flowers({ category, flowers }) {
  // const flowers = useSelector(state => state.flowers.array)
  const allFlowers = useSelector((state) => state.flowers.array);
  const CategoryFlowers = allFlowers.filter((f) => f.categoryId == category.id);

  // console.log(category.title);

  if (JSON.stringify(flowers) == "[]") {
    return (
      <div className="Flowers">
        <div className="title">
          <h2>{category.title}</h2>
        </div>
        <div className="cards">
          {flowers.map((v, i) => {
            return <FlowerCard v={v} key={i} />;
          })}
        </div>
      </div>
    );
  }

  if (JSON.stringify(CategoryFlowers) == "[]") {
    return <></>;
  } else {
    return (
      <div className="Flowers font-Poppins">
        <div className="text-[25px] font-semibold text-base-content text-center my-[30px]">
          <h2>{category.title}</h2>
        </div>

        <div className="cards mt-[50px]">
          <Wrapper>
            <div className="w-full flex justify-center items-center flex-wrap gap-[20px]">
              {CategoryFlowers.map((v, i) => {
                return <FlowerCard v={v} key={i} />;
              })}
            </div>
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default Flowers;
