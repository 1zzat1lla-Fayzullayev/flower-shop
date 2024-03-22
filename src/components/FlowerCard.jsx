import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { plusCount, setUserArray } from "../redux/reducers/userProduct";
import { useNavigate } from "react-router-dom";
import { setSelectedProduct } from "../redux/reducers/flowerSlice";
import Wrapper from "../layout/Wrapper";
import ShopSVG from "../svg/ShopSVG";

function FlowerCard({ v }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({});
  const addToUserProduct = (e) => {
    e.stopPropagation();
    //user produck useEffectda ozgarvotti
    setNewProduct({ ...v, count: 1 });
  };

  useEffect(() => {
    //buyoda dispatch bovotti
    if (JSON.stringify(newProduct) != "{}") {
      dispatch(setUserArray(newProduct));
      dispatch(plusCount());
    }
  }, [newProduct]);

  const handleNavToSingleFlower = (flower, id) => {
    dispatch(setSelectedProduct(v));
    navigate(`/flower/${id}`, { state: flower });
  };

  const limitDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 8) {
      let limitedWords = words.slice(0, 8);
      // Check if the last word in the limited words has an ellipsis, if so, remove it qata
      if (limitedWords[7].endsWith("...")) {
        // Remove the ellipsis from the last word
        limitedWords[7] = limitedWords[7].slice(0, -3);
      }
      return limitedWords.join(" ") + (words.length > 8 ? " ..." : "");
    }
    return description;
  };

  return (
    <div
      onClick={() => handleNavToSingleFlower(v, v._id)}
      className="card font-Poppins cursor-pointer"
      data-aos="fade-up"
    >
      <div className="flex justify-center items-center">
        <div className="card max-w-[250px] bg-base-100 shadow-xl transition-transform hover:-translate-y-1 hover:scale-105">
          <figure>
            <img
              src={`${v.image}`}
              alt={v.name}
              className="w-full h-[300px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{v.name}</h2>
            <p className="truncate">{limitDescription(v.description)}</p>
            <div className="card-actions items-center justify-end">
              <p>${v.price}</p>
              <button
                className="btn text-[17px] text-center"
                onClick={(e) => addToUserProduct(e)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowerCard;
