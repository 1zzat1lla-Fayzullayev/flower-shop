import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { plusCount, setUserArray } from "../redux/reducers/userProduct";
import FlowerCard from "../components/FlowerCard";
import { Code } from "../Code";
import Wrapper from "../layout/Wrapper";

function SingleFlower() {
  const { id } = useParams();
  const [flower, setFlower] = useState({});
  const [loading, setLoading] = useState(true);
  const [allFlowers, setAllflowers] = useState([]);
  const { state } = useLocation();
  const hasFlower = state;
  console.log(hasFlower);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    console.log("aa");
    if (hasFlower) {
      setFlower(hasFlower);
      setLoading(false);
      axios
        .get(`${Code.api}`)
        .then((res) => {
          setAllflowers(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`${Code.api}/${id}`)
        .then((res) => {
          setFlower(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
      axios
        .get(`${Code.api}`)
        .then((res) => {
          setAllflowers(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [location]);

  const [newProduct, setNewProduct] = useState({});
  const addToUserProduct = (e) => {
    e.stopPropagation();
    //user produck useEffectda ozgarvotti
    setNewProduct({ ...flower, count: 1 });
  };

  useEffect(() => {
    //buyoda dispatch bovotti
    if (JSON.stringify(newProduct) != "{}") {
      dispatch(setUserArray(newProduct));
      dispatch(plusCount());
    }
  }, [newProduct]);

  return (
    <div className="SingleFlower pt-[150px] font-Poppins">
      <div>
        {!loading ? (
          <div>
            <div className="card card-side mx-auto w-[75%] bg-base-100 shadow-xl flex flex-col md:flex-row">
              <figure>
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-[300px] md:w-[400px] rounded-[20px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-[40px]">{flower.name}</h2>
                <p>{flower.description}</p>
                <div className="card-actions items-center justify-end">
                  <p className="text-[20px] font-semibold">${flower.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={addToUserProduct}
                  >
                    Add to flower
                  </button>
                </div>
              </div>
            </div>
            <div className="Flowers">
              <Wrapper>
                <div className="flex justify-center items-center flex-wrap gap-[20px] my-[30px]">
                  {allFlowers.map((v, i) => {
                    return <FlowerCard v={v} key={i} />;
                  })}
                </div>
              </Wrapper>
            </div>
          </div>
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </div>
  );
}

export default SingleFlower;
