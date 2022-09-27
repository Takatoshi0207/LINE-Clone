import React, { useState } from 'react'
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';
import { Input } from '@mui/material';
import SendIcon from "@mui/icons-material/Send"

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
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            type="text"
            placeholder='メッセージを入力してください'
            onChange={(e) => setMessages(e.target.value)}
            value={messages}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
          {/* {console.log(messages)} */}
        </div>
      </form>
    </div>
  )
}

export default SendMessage