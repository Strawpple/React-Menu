import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
    const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-4 mx-0 mb-2">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img
          src={props.img}
          class="card-img-top img-fluid"
          style={{height: 400}}
          alt={props.img}
        />
        <div class="card-body text-center">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.category}</p>
          <p class="card-text">Php {props.price}</p>
          <button class="btn btn-success" onClick={() => addItem(props.item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
