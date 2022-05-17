import "./Cart.css";
let Cart = () => {
  let data = [{ id: "1", name: "pravin", amount: "55.25" }];

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content p-3">
            <div>
              {data.map((val) => {
                return <p>{val.name}</p>;
              })}
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2 className="text-capitalize ">total amount</h2>
              </div>
              <div className="">
                <p className="p-0 m-0">75.56</p>
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
