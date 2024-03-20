import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FlowerCard from "../components/FlowerCard";
import axios from "axios";
import { setProducts } from "../redux/reducers/flowerSlice";
import { Code } from "../Code";
import Wrapper from "../layout/Wrapper";

function Category() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(true);
  const allFlowers = useSelector((state) => state.flowers.array);
  const category = useSelector((state) =>
    state.categories.array.find((c) => c.id == id)
  );
  const CategoryFlowers = allFlowers.filter((f) => f.categoryId == id);
  // console.log(allFlowers);
  console.log(CategoryFlowers);

  //   window.onload = () => {
  //         window.scroll(0, document.documentElement.scrollHeight);
  //     };
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${Code.api}`)
      .then((res) => {
        dispatch(setProducts(res.data));
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Category font-Poppins pt-[100px]">
      <div className="container">
        {!isLoading ? (
          <>
            {JSON.stringify(CategoryFlowers) == "[]" ? (
              <h1>Here is nothing yet</h1>
            ) : (
              <h1 className="text-[30px] text-center my-[30px] font-semibold">
                {category.title} category
              </h1>
            )}

            <div className="category-flowers">
              <Wrapper>
                <div className="flex gap-[20px] flex-wrap justify-center items-center">
                  {CategoryFlowers.map((v, i) => {
                    return <FlowerCard v={v} key={i} />;
                  })}
                </div>
              </Wrapper>
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Category;
