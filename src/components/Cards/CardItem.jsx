import React from "react";
import Button from "../Button/Button";

const CardItem = ({ styleName, icon }) => {
  return (
    <div className={styleName}>
      <img
        className="w-20 mx-auto mt-[-3rem] bg-white"
        src={icon}
        alt="Single User"
      />
      <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
      <p className="text-center text-4xl font-bold">$149</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
        <p className="py-2 border-b mx-8">1 Granted User</p>
        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
      </div>
      <Button classCss="btn-primary my-6 mx-auto px-12 py-3">
        <span className="z-10 relative"> Start Trial</span>
      </Button>
    </div>
  );
};

export default CardItem;
