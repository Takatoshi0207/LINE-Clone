import React, { useState } from 'react'
import { db } from '../firebase';

function SendMessage() {
  const [messages, setMessages] = useState("")

  function sendMessage(e) {
    e.preventDefault();

    db.collection("messages").add({
      text: messages,
    });
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input type="text"
            placeholder='メッセージを入力してください'
            onChange={(e) => setMessages(e.target.value)}
          />
          {console.log(messages)}
        </div>
      </form>
    </div>
  )
}

export default SendMessage