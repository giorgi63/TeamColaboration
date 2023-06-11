import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="name">
          Full Name
          <input type="text" id="name" required />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" required />
        </label>
        <label htmlFor="phone">
          Phone Number
          <input type="tel" id="phone" required />
        </label>
        <label htmlFor="address1">
          Shipping Address 1
          <input type="text" id="address1" required />
        </label>
        <label htmlFor="address2">
          Shipping Address 2
          <input type="text" id="address2" />
        </label>
        <label htmlFor="card">
        💳 Credit Card Number
          <input type="text" id="card" required />
        </label>
        <label htmlFor="payment-method">
          Payment Method
          <select id="payment-method" required>
            <option value="">Select...</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="paypal">Paypal</option>
          </select>
        </label>
        <label htmlFor="delivery-date">
          Preferred Delivery Date
          <input type="date" id="delivery-date" />
        </label>
        <label htmlFor="instructions">
          Special Instructions
          <textarea id="instructions" rows="4" />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
