import React from "react";
import Button from "./Button/Button";

const Hero = () => {
  return (
    <section className="text-white h-[80vh]">
      <div className="shape-slider hidden md:block">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      <div className="max-w-[800px] container mx-auto text-center flex flex-col justify-center">
        <p className="text-primary font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="hero-text-shadow text-4xl font-bold md:py-6 md:text-7xl sm:text-6xl md:hero-text-shadow-md">
          Grow with data.
        </h1>
        <p className="text-4xl font-bold py-4 outline">
          Fast, flexible financing for
        </p>
        <p className="text-xl px-2 font-bold text-gray-500 rise md:text-2xl md:px-0">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <Button classCss="btn-primary my-6 mx-auto px-12 py-3">
          <span className="z-10 relative">Get Started</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
