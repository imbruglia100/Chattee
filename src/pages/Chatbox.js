import { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import SendMessage from "../components/SendMessage";
import Message from "../components/Message";

function Chatbox() {
    const [messages, setMessages] = useState([]);
    const chatBox = document.getElementById("chatBox")

    useEffect(() => {
      const q = query(
        collection(db, "messages"),
        orderBy("createdAt"),
        limit(50)
      );
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let messages = [];
        QuerySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
      });
      return () => unsubscribe;
    }, []);

  return (
    <main className="w-10/12 flex flex-col justify-between bg-slate-100 overflow-hidden rounded-3xl h-[80vh] border-slate-600 border-2 p-1 shadow-lg  shadow-slate-300 m-auto">
      <div id="chatBox" className="h-full overflow-y-scroll scrollbar">
        <div className="flex flex-col flex-wrap relative transform ">
          {messages?.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
      <SendMessage />
    </main>
  );
}

export default Chatbox;
