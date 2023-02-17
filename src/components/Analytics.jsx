import React from "react";
import Laptop from "../assets/analytics.jpg";
import Button from "./Button/Button";

const Analytics = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-16 px-4 grid md:grid-cols-2">
        <img
          src={Laptop}
          className="w-[400px] mx-auto my-4"
          alt="data analytics"
        />
        <div className="flex flex-col justify-center">
          <p className="text-primary font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <Button classCss="btn btn-secondary text-primary w-[200px]  my-6 mx-auto md:mx-0 py-3">
            <span className="z-10 relative">Get Started</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
