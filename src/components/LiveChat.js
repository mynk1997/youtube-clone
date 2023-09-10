import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);

  const handleSendMessage = () => {
    dispatch(
      addMessage({
        name: "Mayank Gupta",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex flex-col w-[1/2] gap-4">
      <div className=" border border-black w-full h-[600px] bg-slate-100 rounded-lg p-4 overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 border border-black flex "
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <input
          placeholder="Enter your message"
          className="w-96 px-4 py-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
        />
        <button className="px-2 mx-2 bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
