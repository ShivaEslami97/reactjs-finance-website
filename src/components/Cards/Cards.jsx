import React from "react";
import Best from "../../assets/best.png";
import Community from "../../assets/community.png";
import Reputation from "../../assets/reputation.png";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-16 grid md:grid-cols-4 gap-8 px-4">
        <CardItem styleName="card" icon={Best} />
        <CardItem styleName="card active" icon={Community} />
        <CardItem styleName="card" icon={Reputation} />
        <CardItem styleName="card" icon={Best} />
      </div>
    </section>
  );
};

export default Cards;
