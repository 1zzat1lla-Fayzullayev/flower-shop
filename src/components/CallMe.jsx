import React, { useState } from "react";
import axios from "axios";
import Wrapper from "../layout/Wrapper";

function CallMe() {
  const [userNum, setUserNum] = useState("");

  // 7059782474: AAFbkHTcoIY5B - EQWXJazFZtPCR5PGmoRV4
  // -1002016358863
  const BOT_TOKEN = "7059782474:AAFbkHTcoIY5B-EQWXJazFZtPCR5PGmoRV4";
  const chat_id = "-1002016358863";
  const telegramAPIURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const text = `user's number: ${userNum}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = {
    chat_id,
    text,
  };

  const handLeSubmit = (e) => {
    e.preventDefault();

    axios.post(telegramAPIURL, data, config);
    // .then(response => {
    //     console.log('Message sent successfully:', response.data);
    // })
    // .catch(error => {
    //     console.error('Error sending message:', error);
    // });
  };

  return (
    <Wrapper>
      <div
        className="font-Poppins bg-base-300 max-w-[250px] md:max-w-[800px] mx-auto h-[200px] rounded-[20px] flex justify-center items-center mt-[100px]"
        id="CallMe"
        data-aos="fade-up"
      >
        <form
          onSubmit={(e) => handLeSubmit(e)}
          className="flex flex-col md:flex-row justify-center items-center gap-2"
        >
          <label className="input input-bordered flex items-center gap-2 w-[230px] md:w-[100%]">
            Phone
            <input
              type="number"
              className="grow"
              placeholder="+998"
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
