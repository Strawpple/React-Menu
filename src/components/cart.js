import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h2 className="text-center">Cart is Empty!</h2>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) total items: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.img}
                        style={{ width: 200, height: 200 }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>Php {item.price}</td>
                    <td>Quantity : ({item.quantity})</td>
                    <td>
                        <button className="btn btn-warning ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                        <button className="btn btn-warning ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                        <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>Remove</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto" style={{marginTop: 15}}>
            <h3>Total Price : Php {cartTotal}</h3>
            
        </div>
        <div className="col-auto" style={{marginTop: 15}}>
              <button className="btn btn-danger" style={{marginRight: 15}} onClick={() => emptyCart()}>Clear cart</button>
              <button className="btn btn-primary">Pay now</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
