import React from "react";
import Button from "./Button/Button";

const Newsletter = () => {
  return (
    <section>
      <div className="container mx-auto py-16 grid lg:grid-cols-3 text-white px-4">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="mt-4">
          <div className="grid md:grid-cols-3 items-baseline">
            <input
              className="p-3 flex w-full rounded-md text-black md:col-span-2 focus:outline-none"
              type="email"
              placeholder="Enter Email"
            />
            <Button classCss="btn-primary md:ml-4 my-6 px-6 py-3">
              <span className="z-10 relative">Subscribe</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
