import "./Header.css";
import mealsPic from "../../assets/ori.jpg";
let Header = () => {
  return (
    <div className="mb-5">
      <header className="header-1 fixed-top  header-1 ">
        <div className="shadow header-bucket d-flex align-items-center justify-content-between p-4">
          <h2 className="text-white   text-uppercase">zomato</h2>
          <button
            className="cart-btn btn btn-dark text-uppercase "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span className="d-flex gap-2 align-items-center">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>cart</span>
              <span className="cart-count">0</span>
            </span>
          </button>
        </div>
      </header>

      <div className="header-img-bucket-1">
        <img src={mealsPic} alt="img" />
      </div>
    </div>
  );
};

export default Header;
