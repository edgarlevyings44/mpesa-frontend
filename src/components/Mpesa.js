import React, { useState } from "react";
import "./Mpesa.css";
import Axios from "axios";

function Mpesa() {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();

  const payHandler = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:5000/token", {
      amount,
      phone,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
       console.log(error);
      });
  };

  return (
    <div>
      <h1>
        Lipa Na <span className="greenText">Mpesa</span>
      </h1>
      <form>
        <div>
          <input
            placeholder="phone"
            onChange={(e) => setPhone(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <input
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <button
            onClick={payHandler}
            className="button"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Mpesa;