import React from 'react'
import styled from "styled-components";
import { db } from '../firebase';
import {useDispatch} from 'react-redux'
import { enterRoom } from '../features/appSlice';



function SidebarOption({ Icon, title, addChannelOption, id }) {
 
    const dispatch = useDispatch();
 
    const addChannel = (() => {
        const channelName = prompt("Please enter a channel name");
        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    });

    const selectChannel = (() => {
        if (id) {
            dispatch(enterRoom({
                roomId: id
            }))
        }
 
    })

   

       

    return (
        <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize="small" style={{padding:10}} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                  <SidebarOptionChannel>
                        <span>#</span> {title}
                 </SidebarOptionChannel>   
            )}
        
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
display: flex;
align-items: center;
font-size: 13px;
font-weight: 100;
padding-left: 3px;
padding-top: 3px;
padding-bottom: 3px;

:hover{
    opacity: 0.9;
    background-color: #52beff;
    cursor: pointer;
}

>h3{
    font-weight: 500;
}

>h3>span{
    padding:10px
}

`;

const SidebarOptionChannel = styled.h3`
padding: 5px 0;
font-weight: 300;
`;