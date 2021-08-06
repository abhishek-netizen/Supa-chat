import React, {useState, useRef,useEffect} from 'react'
import styled from "styled-components";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import { db } from '../firebase';
import Message from './Message';



function Chat() {
    const chatRef = useRef(null);
    
    //Getting roomId from our Reduxx
    const roomId = useSelector(selectRoomId);
     
    //Getting back the roomDEtails  from the firestore
    const [roomDetails] = useDocument(
        roomId &&
        db.collection('rooms').doc(roomId)
    )
    
    //Getting messages from firestore

    const [roomMessages, loading] = useCollection(
        roomId &&
        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy("timestamp", "asc")
    )
 
    // console.log("roomdeatils", roomDetails)
    // console.log("roomMessages",roomMessages)
  
    //for that slick trick : its not working
    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });
    },[roomId,loading])




    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong style={{ padding: 10 }}>
                            #{roomDetails?.data().name}
                        </strong>
                    </h4>
                    <StarBorderOutlinedIcon />
                </HeaderLeft>
                <HeaderRight style={{paddingLeft:5}}>
                    <p >
                        <InfoOutlinedIcon /> 
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                <ChatInput
                    chatRef={chatRef}
                    channelName={roomDetails?.data().name}
                    channelId={roomId}
                />

                <ChatBottom
                        ref={chatRef}
                    />

            </ChatMessages>

            <ChatDetails>
                {roomMessages?.docs.map(doc => {
                    const { message, timestamp, user, userImage } = doc.data();
                    return (
                        <Message
                            key={doc.id}
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userImage}
                        />
                        
                    )
              })}
                    {/* <Message /> */}
                </ChatDetails>
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
margin-top: 80px;
flex:0.6;
color:white;
flex-grow: 1;
background-color: #27415D;
align-items: center;
overflow-y: scroll;

`;

const Header = styled.div`
display: flex;
justify-content: space-between;
padding:20px;
align-items: center;
text-align: center;
border-bottom: 1px solid white;

`;

const HeaderLeft = styled.div`
display: flex;
align-items: center;

>.MuiSvgIcon-root{
    cursor: pointer;
    background-color: white;
    color: #27415D;
    border-radius: 999px;
    :hover{
        color:red;

    }
}


`;

const HeaderRight = styled.div`
padding:2px;
>p{
display: flex;
align-items: center;


.MuiSvgIcon-root{
background-color: white;
border-radius: 999px;
color:#27415D;
:hover{
    color:red;
    cursor: pointer;
 }
 }
}
`;

const ChatMessages = styled.div`
display: flex;
justify-content: space-around;
margin-top: 65vh;
/* position: fixed;
bottom: 0; */



`;

const ChatDetails = styled.div`
margin-top: -410px;
padding-left: 50px;
margin-bottom: 40px;
/* overflow-y: scroll; */
/* background-color: #f6feff; */
`;

const ChatBottom = styled.div`

`;

