import "./App.css";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";

import Meals from "../src/components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <div className="app-bucket-1">
        <Header />
        <Cart />
        <Meals />
      </div>
    </CartProvider>
  );
}

export default App;
