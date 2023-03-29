import React from "react";

import Itemcard from "./itemcard";
import data from "./data";

const Main = () => {
  return (
    <>
      <h2 className="text-center mt-3">RLR FoodHaus</h2>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.map((item, index) => {
            return (
              <Itemcard
                category={item.category}
                img={item.img}
                name={item.name}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Main;
