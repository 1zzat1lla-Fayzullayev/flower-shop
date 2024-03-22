import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import SingleFlower from "./routes/SingleFlower";
import Category from "./routes/Category";
import AllFlowers from "./routes/AllFlowers";
import Tell from "./components/Tell";
import GetOrder from "./components/GetOrder";
import Cursor from "./shared/Cursor";

function App() {
  const [hasOrder, setHasOrder] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const initAos = async () => {
      await Aos.init({
        duration: 800,
      });
      setLoading(false);
    };
    initAos();
  }, []);

  return (
    <div>
      <Cursor />
      <BrowserRouter>
        {loading ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : (
          <>
            <Header />
            <GetOrder />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="allflowers" element={<AllFlowers />} />
              <Route path="flower/:id" element={<SingleFlower />} />
              <Route path="category/:id" element={<Category />} />
            </Routes>
            <Footer />
            <Tell />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
