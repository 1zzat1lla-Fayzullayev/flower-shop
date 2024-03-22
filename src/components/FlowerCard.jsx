import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserArray, plusCount } from "../redux/reducers/userProduct";
import { setSelectedProduct } from "../redux/reducers/flowerSlice";
import Wrapper from "../layout/Wrapper";

function FlowerCard({ flower }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToUserProduct = (e) => {
    e.stopPropagation();
    const newProduct = { ...flower, count: 1 };
    dispatch(setUserArray(newProduct));
    dispatch(plusCount());
  };

  const handleNavToSingleFlower = () => {
    dispatch(setSelectedProduct(flower));
    navigate(`/flower/${flower._id}`, { state: flower });
  };

  const limitDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 8) {
      let limitedWords = words.slice(0, 8);
      if (limitedWords[7].endsWith("...")) {
        limitedWords[7] = limitedWords[7].slice(0, -3);
      }
      return limitedWords.join(" ") + (words.length > 8 ? " ..." : "");
    }
    return description;
  };

  return (
    <div
      onClick={handleNavToSingleFlower}
      className="card font-Poppins cursor-pointer"
      data-aos="fade-up"
    >
      <div className="flex justify-center items-center">
        <div className="card max-w-[250px] bg-base-100 shadow-xl transition-transform hover:-translate-y-1 hover:scale-105">
          <figure>
            <img
              src={flower.image}
              alt={flower.name}
              className="w-full h-[300px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{flower.name}</h2>
            <p className="truncate">{limitDescription(flower.description)}</p>
            <div className="card-actions items-center justify-end">
              <p>${flower.price}</p>
              <button
                className="btn text-[17px] text-center"
                onClick={addToUserProduct}
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
