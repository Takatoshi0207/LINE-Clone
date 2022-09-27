import React, { useState } from 'react'
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';

function SendMessage() {
  const [messages, setMessages] = useState("")

  function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser; //現在ログインしているユーザーの情報

    //firebaseに送るvalue
    db.collection("messages").add({
      text: messages,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessages("");
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input type="text"
            placeholder='メッセージを入力してください'
            onChange={(e) => setMessages(e.target.value)}
            value={messages}
          />
          {/* {console.log(messages)} */}
        </div>
      </form>
    </div>
  )
}

export default SendMessage