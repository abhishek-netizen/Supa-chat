import styled from "styled-components";
import React from 'react'

function Message({message, timestamp, user, userImage}) {
    return (
        <MessageContainer>
        
            <img src={userImage} alt="" />
            
            <messageInfo>
                <h4>
                    {user}{' '}
                    <span style={{fontSize: 10}} >{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <h2 style={{fontSize: 18}}>{message}</h2>
            </messageInfo>
          
            
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div`

color: white;
display: flex;
align-items: center;


>img{
    width: 60px;
    height: 60px;
    padding: 10px;
    border-radius: 999px;
}

`;


const messageInfo = styled.div`

`;