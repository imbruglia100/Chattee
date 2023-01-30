import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  return (
    <div
      className={`rounded-xl p-2 bg-blue-700 text-white w-fit max-w-[50%] shadow-lg flex items-start mb-[20px] ${
        message.uid === user.uid ? "ml-auto " : ""
      }`}
    >
      <img
        className="chat-bubble__left w-[35px] h-[35px] rounded-xl mr-[10px]" 
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name text-white border-b">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};
export default Message;
