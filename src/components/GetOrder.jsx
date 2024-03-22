import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function GetOrder({ hasOrder, setHasOrder }) {
  const [formData, setFormData] = useState({ name: "", number: "" });
  const selectedFlowers = useSelector((state) => state.userProduct.myArray);

  const BOT_TOKEN = "YOUR_BOT_TOKEN";
  const chat_id = "YOUR_CHAT_ID";
  const telegramAPIURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = formData;
    const text = `Name: ${name}\nNumber: ${number}\nOrder: ${selectedFlowers
      .map((flower) => flower.name)
      .join(", ")}`;

    axios
      .post(telegramAPIURL, { chat_id, text })
      .then((response) => {
        console.log("Message sent successfully:", response.data);
        // Add any further actions upon successful message delivery
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        // Handle errors gracefully
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    hasOrder && (
      <div className="GetOrder font-Poppins">
        <div className="x-div" onClick={() => setHasOrder(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <h2>Leave your name and number</h2>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="tel"
              name="number"
              required
              placeholder="Phone Number"
              onChange={handleChange}
              value={formData.number}
            />
            <button type="submit">Order</button>
          </form>
        </div>
      </div>
    )
  );
}

export default GetOrder;
