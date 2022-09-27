import './App.css'
import React from 'react'
import SignIn from './components/SignIn'
import { auth } from './firebase'
import { useAuthState } from "react-firebase-hooks/auth"


function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <Line /> : <SingnOut />}
      <SignIn />
    </div>
  )
}

export default App
