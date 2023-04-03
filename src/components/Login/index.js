import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { auth } from '../../firebase';
import { provider } from '../../firebase';



function Login() {
    const signIn = (e) => {
    e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://companieslogo.com/img/orig/WORK-d00db09e.png?t=1596660196" alt="" />
            <h1>Sign in to the Slack Clone</h1>
            <p>slack-clone.com</p>
            <Button onClick={signIn}>Sign in with Google</Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
background-color: #f8f8f8;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`

const LoginInnerContainer = styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

> img {
    height: 100px;
    object-fit: contain;
    margin-bottom: 40px;
}
> button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;

}
`