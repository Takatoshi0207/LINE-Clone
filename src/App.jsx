import './App.css'
import React from 'react'
import SignIn from './components/SignIn'
import { auth } from './firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import Line from './components/Line'


function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <Line /> : <SignIn />}
    </div>
  )
}

export default App
