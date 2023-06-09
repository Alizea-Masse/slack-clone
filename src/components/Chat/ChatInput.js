import React,{ useState} from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import { db } from '../../firebase';
import firebase from "firebase/compat/app";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';







function ChatInput({chanelName, chanelId, chatRef}) {
   
    const [input, setInput] = useState('')
    const [user]=useAuthState(auth)

    const sendMessage = (e) => {
        e.preventDefault();
        if (!chanelId) {
            return false
        }
        db.collection('rooms').doc(chanelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
          

        });
      
        chatRef.current.scrollIntoView({
          behavior: "smooth",
         
        });
      
        
        setInput('')
    }
  
       
  
  return (
    <ChatInputContainer>
        <form>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder={`Message #${chanelName}`} />
        <Button hidden type='submit' onClick={sendMessage}>Envoyer</Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius: 20px;
> form {
position: relative;
display: flex;
justify-content: center;
}
> form > input {
position: fixed;
bottom: 30px;
width: 60%;
border: 1px solid gray;
border-radius: 3px;
padding: 20px;
outline: none;

}
> form > button {
  display: none !important;
}
`

