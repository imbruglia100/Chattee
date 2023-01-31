import React, {useState} from 'react'
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function SendMessage() {
    const [message, setMessage] = useState('')
    const sendMessage = async (event) => {
         event.preventDefault();
         if (message.trim() === "") {
           alert("Enter valid message");
           return;
         }
         const { uid, displayName, photoURL } = auth.currentUser;
         await addDoc(collection(db, "messages"), {
           text: message,
           name: displayName,
           avatar: photoURL,
           createdAt: serverTimestamp(),
           uid,
         });
         setMessage("");
    }
  return (
    <form onSubmit={(e) => sendMessage(e)}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <div className="border w-full lg:w-max md:w-max border-slate-600 ml-auto rounded-full p-1 flex justify-end">
        <input
          id="messageInput"
          name="messageInput"
          type="text"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          className="outline-none bg-inherit w-full text-black"
          placeholder="type message..."
        />
        <button
          type="submit"
          className="rounded-full text-white p-1 bg-blue-600"
        >
          <p className='m-auto'>▲</p>
        </button>
      </div>
    </form>
  );
}

export default SendMessage