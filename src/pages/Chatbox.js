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
    <main className="w-10/12 border m-auto">
      <div>
        <div className="p-32 mb-[60px]">
          {messages?.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
        <SendMessage />
      </div>
    </main>
  );
}

export default Chatbox;
