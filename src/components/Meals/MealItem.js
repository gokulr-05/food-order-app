import cartContext from "../../store/cart-context";
import "./MealItem.css";
import { useState, useContext } from "react";
let MealItem = ({ id, name, description, price }) => {
  let ctx = useContext(cartContext);

  let [amtInp, setAmtInp] = useState(1);

  let cost = Number(price).toFixed(2);

  let FormSubmitHandler = (e) => {
    if (amtInp > 0) {
      // console.log("In Meal Item: FormSubmitHandler: ctx array item:", {
      //   id: id,
      //   name: name,
      //   amount: amtInp,
      //   price: price,
      // });
      ctx.addItem({ id: id, name: name, amount: amtInp, price: price });
    } else {
      alert("enter valid amount");
    }
  };

  let amtChangeHandler = (e) => {
    setAmtInp(e.target.value);
  };

  return (
    <div className="py-3 d-flex align-items-center justify-content-between">
      <div>
        <p className="meal-item-name ">{name}</p>
        <p className="meal-item-des">{description}</p>
        <p className="meal-item-cost">${cost}</p>
      </div>
      <div className="d-flex flex-column align-items-center gap-3 ">
        <div className="d-flex gap-3">
          <form className="d-flex align-items-center gap-3">
            <label htmlFor="label" className="text-capitalize amt-txt">
              amount:
            </label>
            <input
              onChange={(e) => {
                amtChangeHandler(e);
              }}
              value={amtInp}
              className="amt-inp"
              type="number"
              min="1"
              max="5"
              step="1"
              // defaultValue="1"
            />
          </form>
        </div>
        <div>
          <button
            onClick={FormSubmitHandler}
            className="text-uppercase amt-btn "
          >
            +add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
