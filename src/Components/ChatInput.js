import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import firebase from 'firebase';
import { db } from '../firebase';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';



function ChatInput({ channelId, channelName, chatRef }) {

    const [input, setInput] = useState('');
    const [emojiCard, setEmojiCard] = useState(false);
  

    // const handleEmoji = (() => {
        
    //         <Picker set='apple' />
       
    // })


    const handleSubmit = ((e) => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        //adding the messaged to db
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.Timestamp.now(),
            user: "Abhishek",
            userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglIlmjIFHgsO69ayyt8xNPu9qqfqBbgEzGA&usqp=CAU"
        });
        setInput('');


    })

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });

    }, [handleSubmit])


    return (
        <ChatInputContainer>

            <form onSubmit={handleSubmit}>
           
                {/* <input placeholder={'Message #' + `${channelName}`} value={input} onChange={(e) => setInput(e.target.value)} /> */}
                {/* <Picker set='apple' /> */}
            
                <input placeholder={'Message #' + `${channelName}`} value={input} onChange={(e) => setInput(e.target.value)} />
                <EmojiEmotionsIcon onClick={() => setEmojiCard(!emojiCard)} />
                
                <button type="submit">click</button>
            </form>

            {emojiCard ? <Picker set='apple' style={{marginTop:-805, marginLeft:250}}/> : null}

        </ChatInputContainer>
    )
}



export default ChatInput

const ChatInputContainer = styled.div`
position: fixed;
bottom: 5;
z-index: 1;

>form>input{
    width: 75vw;
    padding:10px;
    border-radius: 5px;
    border-color: white;
    font-weight: 600;
    outline: none;
    font-size: 15px;
    color:white;
    background-color: #27415D;
}

>form>button{
    display: none;
}`;

