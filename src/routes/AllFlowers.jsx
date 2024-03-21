import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/reducers/flowerSlice";
import FlowerCard from "../components/FlowerCard";

function AllFlowers() {
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(true);
  const allFlowers = useSelector((state) => state.flowers.array);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:5500/`)
      .then((res) => {
        dispatch(setProducts(res.data));
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="AllFlowers pt-[100px]">
      <div>
        {!isLoading ? (
          <>
            {JSON.stringify(allFlowers) == "[]" ? (
              <h1>Here is nothing yet</h1>
            ) : (
              <h1>All Flowers</h1>
            )}

            <div>
              {allFlowers.map((v, i) => {
                return <FlowerCard v={v} key={i} />;
              })}
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default AllFlowers;
