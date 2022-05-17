import "./MealItem.css";

let MealItem = ({ id, name, description, price }) => {
  let cost = Number(price).toFixed(2);
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
              className="amt-inp"
              type="number"
              min="1"
              max="5"
              step="1"
              defaultValue="1"
            />
          </form>
        </div>
        <div>
          <button className="text-uppercase amt-btn ">+add</button>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
