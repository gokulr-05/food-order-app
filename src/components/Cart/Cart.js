import { useContext } from "react";
import "./Cart.css";
import cartContext from "../../store/cart-context";
let Cart = () => {
  let cartctx = useContext(cartContext);

  let data = [...cartctx.items];
  let data1 = [{ id: "1", name: "pravin", amount: "55.25" }];

  let PlusHandler = ({ id, name, price, amount }) => {
    cartctx.addItem({ id, name, price, amount: 1 });
  };

  let minusHandler = ({ id, name, price, OriginalAmount }) => {
    console.log({ id, name, price });
    cartctx.deleteItem({
      id,
      name,
      price,
      amount: 1,
      OriginalAmount: OriginalAmount,
    });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div>
              {data.map((val) => {
                return (
                  <div
                    key={val.id}
                    className="d-flex align-items-center justify-content-between py-3"
                  >
                    <div className="d-flex align-items-center ">
                      <p key={val.id} className="fw-bold p-0 m-0">
                        {val.name}
                      </p>
                    </div>
                    <div className="d-flex align-items-center fs-5">{`${
                      val.amount
                    }*${Number(val.price).toFixed(2)}`}</div>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="text-uppercase op-btn"
                        onClick={(e) => {
                          PlusHandler({
                            id: val.id,
                            name: val.name,
                            price: val.price,
                            amount: val.amount,
                          });
                        }}
                      >
                        +
                      </button>
                      <button
                        className="text-uppercase  op-btn"
                        onClick={(e) => {
                          minusHandler({
                            id: val.id,
                            name: val.name,
                            price: val.price,
                            OriginalAmount: val.amount,
                          });
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="d-flex align-items-center justify-content-between py-3">
              <div>
                <h2 className="text-capitalize ">total amount</h2>
              </div>
              <div className="">
                <p className="p-0 m-0 fs-4 tot-amt">
                  {cartctx.totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <div className="d-flex align-items-center gap-4">
                <div>
                  <button className=" text-capitalize order-btn">order</button>
                </div>
                <div>
                  <button
                    className=" text-capitalize close-btn"
                    data-bs-dismiss="modal"
                  >
                    close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
