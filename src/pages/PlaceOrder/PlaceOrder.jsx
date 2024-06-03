import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input placeholder="first name" />
          <input placeholder="last name" />
        </div>
        <input type="email" placeholder="email address" />
        <input placeholder="street" />
        <div className="multi-fields">
          <input placeholder="city" />
          <input placeholder="state" />
        </div>
        <div className="multi-fields">
          <input placeholder="zip code" />
          <input placeholder="country" />
        </div>
        <input placeholder="phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>
                {" "}
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button>Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
