import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase'

function SignOut() {
  return (
    <Button onClick={() => auth.signOut()} >サインアウト</Button>
  )
}

export default SignOut