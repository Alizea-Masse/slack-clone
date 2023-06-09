import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material';
import AccesTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase';

function Header() {
    const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
        {/* Header left */}
        <HeaderLeft>
            <HeaderAvatar
            //TODO: add on click
            onClick={()=> auth.signOut()}
            alt={user?.displayName}
            src={user?.photoURL}
            />
            <AccesTimeIcon />
        </HeaderLeft>
        {/* Header search */}
        <HeaderSearch>
            {/* Search Icon */}
            <SearchIcon />
            {/* Input */}
            <input type="text" placeholder="Rechercher" />
        </HeaderSearch>
        {/* Header right */}
        <HeaderRight>
            {/* Help Icon */}
            <HelpOutlineOutlinedIcon />

        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color: white;

`
const HeaderLeft = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
flex: 0.3;
> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}
`

const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover {
    opacity: 0.8;
}
`

const HeaderSearch = styled.div`
flex:0.4;
opacity: 1;
border-radius: 6px;
background-color: #421f44;
text-align: center;
display: flex;
padding: 0 50px;
color: gray;
border: 1px gray solid;
> input {
    background-color: transparent;
    border: none;
    min-width: 30vw;
    outline: 0;
    color: white;
    padding-left: 70px;
   
  
}
`

const HeaderRight = styled.div`
flex:0.3;
display: flex;
align-items: flex-end;
> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
}
`