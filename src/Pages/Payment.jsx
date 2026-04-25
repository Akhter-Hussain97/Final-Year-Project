import React, { useState } from "react";
import "./payment.css";

const Payment = () => {
  const [method, setMethod] = useState("card");

  return (
    <section className="paymentContainer container section">
      <h1>Secure Payment</h1>

      {/* Payment Methods */}
      <div className="paymentMethods">
        <button
          className={method === "card" ? "active" : ""}
          onClick={() => setMethod("card")}
        >
          Card
        </button>

        <button
          className={method === "jazzcash" ? "active" : ""}
          onClick={() => setMethod("jazzcash")}
        >
          JazzCash
        </button>

        <button
          className={method === "bank" ? "active" : ""}
          onClick={() => setMethod("bank")}
        >
          Bank Transfer
        </button>
      </div>

      {/* Card Payment UI */}
      {method === "card" && (
        <div className="paymentForm">
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Card Holder Name" />
          <input type="text" placeholder="Expiry Date" />
          <input type="text" placeholder="CVV" />

          <button className="payBtn">Pay Now</button>
        </div>
      )}

      {/* JazzCash UI */}
      {method === "jazzcash" && (
        <div className="paymentForm">
          <input type="text" placeholder="JazzCash Number" />
          <input type="text" placeholder="CNIC" />
          <button className="payBtn">Proceed Payment</button>
        </div>
      )}

      {/* Bank Transfer UI */}
      {method === "bank" && (
        <div className="paymentForm">
          <p>Bank: HBL / Meezan Bank</p>
          <p>Account: 123456789</p>
          <input type="text" placeholder="Transaction ID" />
          <button className="payBtn">Confirm Payment</button>
        </div>
      )}
    </section>
  );
};

export default Payment;