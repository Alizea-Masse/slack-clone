import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Chat() {
  return (
    <ChatContainer>
        <>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#RoomName</strong>
          </h4>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
            <p>
               <InfoOutlinedIcon/> Details
            </p>
        </HeaderRight>
      </Header>
      <ChatMessages>
{/* Lits out the messages */}
      </ChatMessages>
      </>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
display: flex;
padding: 20px;
border-bottom: 1px solid lightgray;
justify-content: space-between;
`;

const HeaderLeft = styled.div`
display: flex;
align-items: center;

> h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
}


`;
const HeaderRight = styled.div`
>p {
    display: flex;
    align-items: center;
    font-size: 14px;
}
>p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
}
`;

const ChatMessages = styled.div`

`;