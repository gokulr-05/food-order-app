import MealItem from "./MealItem";
import "./AvailableMeals.css";

let data = [
  {
    name: "Sushi",
    description: "Finest Fish and veggies",
    price: "22.991",
    id: "m1",
  },
  {
    name: "HeadPhone",
    description: "Smooth and clear",
    price: "16.505",
    id: "m2",
  },
  {
    name: "Charger",
    description: "Fast and LongLasting",
    price: "12.9911",
    id: "m3",
  },
  {
    name: "OTG",
    description: "Portable and Connectable",
    price: "18.9999",
    id: "m4",
  },
];

let AvailableMeals = () => {
  let arr = data.map((val) => {
    return (
      <div key={val.id}>
        {
          <div>
            <MealItem
              id={val.id}
              name={val.name}
              description={val.description}
              price={val.price}
            />
            <hr />
          </div>
        }
      </div>
    );
  });

  // console.log("arr=", arr);

  return <div className="availableMeals">{arr}</div>;
};

export default AvailableMeals;
