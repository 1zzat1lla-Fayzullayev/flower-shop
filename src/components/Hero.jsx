import React from "react";
import flowerBG from "../assets/flower.jpg";
import Wrapper from "../layout/Wrapper";

function Hero() {
  return (
    <>
      <div className="hero min-h-screen flex justify-center font-Poppins">
        <div className="hero-content text-center">
          <div className="max-w-full mt-[100px] md:mt-0">
            <Wrapper>
              <div className="max-w-md">
                <h1 className="text-3xl md:text-5xl font-bold">Hello there</h1>
                <p className="py-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, odit explicabo? Consequuntur beatae quam incidunt
                  dolores mollitia, voluptatibus ut. Culpa vitae aperiam
                  voluptatum quaerat debitis necessitatibus doloribus tempora
                  illum natus?
                </p>
                <button className="btn btn-primary">
                  <a href="#getStart">Get Started</a>
                </button>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
