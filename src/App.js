import "./App.css";
import Header from "./components/Layout/Header";

import Meals from "../src/components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="app-bucket-1">
      <Header />
      <Cart />
      <Meals />
    </div>
  );
}

export default App;
