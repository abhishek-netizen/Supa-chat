import React, {useState} from 'react'
import { Avatar } from '@material-ui/core';
import styled from "styled-components";
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AspectRatioOutlinedIcon from '@material-ui/icons/AspectRatioOutlined';

function Header() {
    const [input, setInput] = useState('')
    const [isOpened, setIsOpened] = useState(false);


    const handleLogout = (() => {
        alert('clicked')
    })

    const handleInput = ((e) => {
        setInput(e.target.value)
    })


    const handleSubmit = ((e) => {
        e.preventDefault();
        alert(input)
    })

    const toggle = (() => {
        setIsOpened(wasOpened => !wasOpened);
    })


    return (
        <HeaderContainer>
            {/* header - left */}
            <HeaderLeft>
                <HeaderLeftInfo>
                    <HeaderAvatar />
                    <button onClick={handleLogout}>
                        log-out
                    </button>
                </HeaderLeftInfo>
                <AccessTimeOutlinedIcon />
            </HeaderLeft>
            {/* header - search */}
            <HeaderSearch >
                <form onSubmit={handleSubmit}>
                    <button type="submit">
                       <SearchOutlinedIcon/>
                    </button>
                    <input type="text" onChange={handleInput} value={input} placeholder="Search your ❤️ channel" />
               </form>     
            </HeaderSearch>
            {/* header- right */}
            <HeaderRight>
                <button onClick={toggle}>
                      <AspectRatioOutlinedIcon />
                </button>
                {isOpened && (
                    <HideHeader>
                    <h4>total <br/> channel 
                    <p>11</p></h4>
                    <h4>my <br/> fav
                        <p>3</p></h4>
                 </HideHeader>
                )}

            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
position: fixed;
background-color: #007CC7;
display: flex;
width: 100%;
align-items: center;
padding: 10px 20px 10px 20px;
color: white;
`;

const HeaderLeft = styled.div`
display: flex;
flex:0.3;
justify-content: space-between;
align-items: center;
text-align: center;
`;

const HeaderLeftInfo = styled.div`
>button{
border-radius: 3px;
font-size: 10px;
font-weight: 600;
color: #007CC7;
background-color: white;
margin-top:1px;
cursor: pointer;
border-color: transparent;
}
>button:hover {
    background-color: lightgrey;
}
`;

const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover{
    opacity:0.8;
}
`;

const HeaderSearch = styled.div`
margin-left: 20px;
margin-right: 20px;
display:flex;
flex: 0.4;
justify-content: center;
align-items: center;
border-radius: 6px;
padding: 0 50px;
background-color: #007CC7;
border: 1px whitesmoke solid;
opacity: 1;
color: whitesmoke;
>form{
    align-items: center;
    display: flex;
}

> form > button{
    background-color: transparent;
    outline: none;
    border: none;
    color:white;
    cursor: pointer;
} 

> form > input{
   background-color: #007CC7;
   padding: 10px;
   min-width: 30vw;
   text-align: center;
   border: none;
   outline: none;
   color: white;
   font-size: 15px;
   font-weight: 600;
   align-items: center;
 ::placeholder{
  color: white;
  font-size: 15px;
  font-weight: 400;
 }
}
`;


const HeaderRight = styled.div`
display: flex;
justify-content: space-evenly;
flex:0.3;
color:white;
>button{
    background-color: transparent;
    outline:none;
    border:none;
    color:white;
    cursor: pointer;
}
`;

const HideHeader = styled.div`
  display: flex;
  justify-content: space-around;
  >h4 {
    padding-left: 5px;
    padding-right: 5px;
  }

`;


