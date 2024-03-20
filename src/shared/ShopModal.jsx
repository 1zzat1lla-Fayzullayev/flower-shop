import React, { useEffect, useState } from "react";
import close from "../assets/close-circle-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";

function ShopModal({
  showSelectedF,
  selectedFlowers,
  handleMinus,
  handlePlus,
  handleDel,
}) {
  const totalPrice = useSelector(
    (state) => state.userProduct.priceOfAllProducts
  );
  const dispatch = useDispatch();

  return (
    <>
      {showSelectedF && (
        <div className="shop-modal-container">
          <div
            className={`shop-modal w-full md:w-[400px] fixed top-[68px] right-0 bg-slate-500 overflow-y-scroll rounded-[10px]`}
          >
            {selectedFlowers.length > 0 ? (
              <div className="selected-cards w-[100%]">
                {selectedFlowers.map((v, i) => (
                  <div className="shoppingCards" key={i}>
                    <div className="modal-box flex items-center w-[100%]">
                      <div className="flex flex-col-reverse items-center ">
                        <img
                          src={v.image}
                          alt="404"
                          className="w-[70px] rounded-[20px]"
                        />
                        <div className="flex items-center gap-1">
                          <p className="font-bold text-[17px] mt-[1px]">
                            {v.count} -
                          </p>
                          <h3 className="font-bold text-[20px] ">{v.name}</h3>
                        </div>
                        <img
                          src={close}
                          onClick={() => handleDel(v, i)}
                          className="absolute right-2 top-2 cursor-pointer w-[40px] bg-[#a6adbb] rounded-full"
                        />
                      </div>
                      <div className="flex justify-center flex-col ml-[20px]">
                        <h5 className="text-[20px]"> Price : ${v.price}</h5>
                        <div className="flex gap-2">
                          <p
                            onClick={() => handleMinus(v, i)}
                            className="text-[25px] text-red-500 cursor-pointer"
                          >
                            -
                          </p>
                          <p
                            onClick={() => handlePlus(v)}
                            className="text-[25px] text-green-500 cursor-pointer"
                          >
                            +
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-cart-message py-4">
                <p className="text-white text-center mt-[230px]">
                  Your cart is empty.
                </p>
              </div>
            )}
            {selectedFlowers.length > 0 && (
              <button
                className="btn btn-accent w-full flex items-center justify-between"
                onClick={() => setHasOrder(true)}
              >
                <p>Total price: ${totalPrice}</p> <p>Buy</p>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ShopModal;
