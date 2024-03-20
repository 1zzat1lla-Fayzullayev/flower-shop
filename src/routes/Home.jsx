import React, { useEffect, useState } from "react";
import SwiperFlowers from "../components/SwiperFlowers";
import AllCategories from "../components/AllCategories";
import Flowers from "../components/Flowers";
import CallMe from "../components/CallMe";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/reducers/flowerSlice";
import { Code } from "../Code";
import Hero from "../components/Hero";

function Home() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories.array);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get(`${Code.api}`)
      .then((res) => {
        dispatch(setProducts(res.data));
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  //useSelectorda bosa uni ovitti dispatch qoyvotimi dispatch bu reduxga qoywcun kk boladi wundo dispatchsz yozsez reduxga tuwmidi
  const flowers = useSelector((state) => state.flowers.array);
  console.log(flowers.filter((f) => f.price > 100));
  return (
    <div className="w-full font-Poppins">
      <div className="w-full">
        <div>
          <Hero />
          <SwiperFlowers />
        </div>
        <AllCategories />
        {!isLoading ? (
          <>
            <h1 className="text-[40px] font-bold text-base-content text-center mt-[30px]">
              Flowers
            </h1>
            {allCategories.map((v, i) => {
              return <Flowers key={i} category={v} />;
            })}
          </>
        ) : (
          <h1>Loading...</h1>
        )}
        <CallMe />
      </div>
    </div>
  );
}

export default Home;
