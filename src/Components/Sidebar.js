import React from 'react';
import styled from "styled-components";
import EditIcon from '@material-ui/icons/Edit';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import GavelIcon from '@material-ui/icons/Gavel';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {useCollection} from 'react-firebase-hooks/firestore';
import SidebarOption from './SidebarOption';
import { db } from '../firebase';

function Sidebar() {

    const [channels, loading, error] = useCollection(db.collection('rooms'));

    const handleEdit = (() => {
       alert("clicked")
    })
    


    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>SUPA CHAT🚀</h2>
                    <SideSub>
                    <FiberManualRecordIcon/>
                    <h3>
                        Abhishek
                    </h3>
                    </SideSub>
                </SidebarInfo>
                <EditIcon onClick={handleEdit}/>
            </SidebarHeader>

            <SidebarOption Icon={GavelIcon} title="Abide our rules" />
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={NotificationsActiveIcon} title="Notifications" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Custom Made Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels" />
            
            {channels?.docs.map((doc) => (
                <SidebarOption
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />
            ))}

        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
flex:0.2;
background-color: #007CC7;
margin-top: 80px;
border-top: 3px solid lightblue;
max-width:260px;
color: white;
overflow-y: scroll;
overflow-x: hidden;
>hr{
    margin-top: 3px;
    margin-bottom: 3px;
    border: 1px solid lightblue;
}


::-webkit-scrollbar{
background-color: lightblue;
width:5px;
}

::-webkit-scrollbar-thumb{
    background-color: lightblue;
}

::-webkit-scrollbar-thumb:hover{
    background-color: gray;
}
`;

const SidebarHeader = styled.div`
display:flex;
padding:8px;
justify-content: space-between;
border-bottom: 1px solid lightblue;
margin-bottom: 10px;
>.MuiSvgIcon-root{
    color: #007CC7;
    padding: 8px;
    background-color: white;
    border-radius: 999px;
    cursor: pointer;
}
`;

const SideSub = styled.div`
display: flex;
align-items: center;
>h3{
    font-size: 15px;
    font-weight: 300;
    margin-left:5px;
    color:white;
}
>.MuiSvgIcon-root{
    font-size: 15px;
    padding-right:5px;
    color:#66ff00;
    outline: none;
    border:none;
    background-color: white;
    border-radius: 999px;

}
`;

const SidebarInfo = styled.div`

>h2{
    font-size: 18px;
}
`;
