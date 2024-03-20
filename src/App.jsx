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

function App() {
  const [hasOrder, setHasOrder] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  // Memoized Header component
  const MemoizedHeader = React.memo(Header);

  // Memoized Footer component
  const MemoizedFooter = React.memo(Footer);

  // Memoized Tell component
  const MemoizedTell = React.memo(Tell);

  return (
    <div>
      <BrowserRouter>
        {loading ? (
          <>
            <MemoizedHeader setHasOrder={setHasOrder} />
            <GetOrder hasOrder={hasOrder} setHasOrder={setHasOrder} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="allflowers" element={<AllFlowers />} />
              <Route path="flower/:id" element={<SingleFlower />} />
              <Route path="category/:id" element={<Category />} />
            </Routes>
            <MemoizedFooter />
            <MemoizedTell />
          </>
        ) : (
          <span className="loading loading-ring loading-lg"></span>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
