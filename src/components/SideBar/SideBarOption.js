import React from 'react'
import styled from 'styled-components'
import { db } from "../../firebase";


function SideBarOption({Icon, title, addChannelOption}) {
    const addChannel = () => {
        const channelName = prompt('Entrer le nom du canal')
        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }


    }
    const selectChannel = () => {

    }
  return (
    <SideBarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon fontSize="small" style={{padding: 10}}/>}
        {Icon ? (
            <h3>{title}</h3>
        ) : (
            <SideBarOptionChannel>
                <span>#</span> {title}
            </SideBarOptionChannel>
        )}

    </SideBarOptionContainer>

  )
}

export default SideBarOption

const SideBarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;
:hover {
    opacity: 0.9;
    background-color: #340e36;
}
> h3 {
    font-weight: 500;
}
> h3 > span {
    padding: 15px;
}

`

const SideBarOptionChannel = styled.div`
> span {
    padding: 15px;
}


`