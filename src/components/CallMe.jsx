import React, { useState } from "react";
import axios from "axios";
import Wrapper from "../layout/Wrapper";


const sendTelegramMessage = async (userNum) => {
  const BOT_TOKEN = "YOUR_BOT_TOKEN";
  const chat_id = "YOUR_CHAT_ID";
  const telegramAPIURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const text = `User's number: ${userNum}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = {
    chat_id,
    text,
  };

  try {
    await axios.post(telegramAPIURL, data, config);
    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

function CallMe() {
  const [userNum, setUserNum] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    sendTelegramMessage(userNum);
  };

  return (
    <Wrapper>
      <div
        className="font-Poppins bg-base-300 max-w-[250px] md:max-w-[800px] mx-auto h-[200px] rounded-[20px] flex justify-center items-center mt-[100px]"
        id="CallMe"
        data-aos="fade-up"
      >
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col md:flex-row justify-center items-center gap-2"
        >
          <label className="input input-bordered flex items-center gap-2 w-[230px] md:w-[100%]">
            Phone
            <input
              type="number"
              className="grow"
              placeholder="+998"
              value={userNum}
              onChange={(e) => setUserNum(e.target.value)}
            />
          </label>
          <button className="btn btn-primary w-full md:w-[100px]">Send</button>
        </form>
      </div>
    </Wrapper>
  );
}

export default CallMe;
