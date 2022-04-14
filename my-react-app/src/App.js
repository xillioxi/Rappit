import logo from './logo.svg';
import './App.css';
import rappitlogo from './images/rappit-logo.png'
import navbarimg from './images/navbar.png'
import homelogo from './images/checklist.png'
import checklist from './images/home.png'
import friendslogo from './images/Friends.png'
import belllogo from './images/Bell.png'
import search from './images/search.svg'
import Customer1 from "./images/Customer1.png"
import Customer1Device from "./images/Customer1Device.png"
import Kebab from "./images/kebab-horizontal.png"
import Check from "./images/check.svg"
import Mail from './images/Mail.png'
import Emoji from './images/Emoji.png'
import Send from './images/Send.png'
import Avatar from './images/Avatar.png'
import React, {useEffect, useState}  from 'react'

//Receive the data by making XHTTPrequest and find the closest one

// Do the CSS here import the CSS here

function App() {
  const [messages, editmessage] = useState([
    {direction:"left",customer:"Rixky",message:"Hello My name is Ricky.",time:"11:37AM" },
    
    {direction:"left",customer:"Rixky",message:"How much is the sport shoe nft?",time:"11:40AM"},
    
    {direction:"right",message:"10 ETH and what is ur size?",time:"11:44AM"},


  ]);
  const [num,setnum] = useState(0)

  const fakemessage = [

  ]
  //useEffect(()=>{start()},[])

  function start(){
    console.log("here");
    setInterval(()=>{
      console.log(num); 
      editmessage(messag => [...messag, fakemessage[num]]);
      const n2 = num+1;
      setnum(n2); 
    },2000)
  }
  //Every 10 second make a request to backend to see if there is new data coming in?
  /*
  function requestInformation(){
    = await fetch(url, {
       method: 'GET',
       mode: 'cors',
       cache: 'no-cache',
       headers:{     
          'Content-Type': 'application/json'
      }
     })
  }
*/
  return (
    <>
      <NavBar/>  
      <Community/>
      <MetaVerseSelection/>
      <Search/>
      <CustomerSelection/>
      <BusinessProfile/>
      <ClientChat message = {messages} />
    </>
  )
}

function NavBar(){
  return(
    <div id="navbar" style={{backgroundImage:`url(${navbarimg})`}}>
        <div id="navbar-rappit"> <img src={rappitlogo} /> </div>
        <div id="navbar-home" class = 'navbar-side'> <img src={homelogo} /> <h3>HOME</h3></div>
        <div id="navbar-chat" class = 'navbar-side'> <img src={checklist}/> <h3>CHAT</h3></div>
        <div id="navbar-contact" class = 'navbar-side'> <img src={checklist}/> <h3>CONTACT</h3></div>
        <div id="navbar-metaverse" class = 'navbar-side'> <img src={checklist}/> <h3>METAVERSE MANAGEMENT</h3>  </div>
        <div id="navbar-setting" class = 'navbar-side'> <img src={checklist}/> <h3>SETTING</h3></div>
    </div>     
  )
}

function Community(){
    return(
    <div id="communitybar">
      <a><img src={friendslogo}></img></a>
      <a><img src={belllogo}></img></a>
    </div>
  )
}

function MetaVerseSelection(){
  return(
  <div id="selectiondiv">
    <button id="selected" class="metaselection std_button" >All Metaverse</button>
    <button class="metaselection std_button" >Sandbox</button>
    <button class="metaselection std_button">Decentraland</button>
  </div>
  )
}

function Search(){
  return(
  <div class="std_button" id="search_bar"><input id="inputfield" type="text" class="std_button" placeholder='Search...'></input><button id="searchbutton" id="search_button"> <img src={search} ></img></button></div>
  )
}

function CustomerSelection(){
  return(
  <div id="CustomerSelection">
    <Customer class="std_button selected_customer"/>
    <Customer class="std_button"/>
  </div>
  )
}

function Customer(props){
  return(
    <div id="Customer" class={props.class}>
      <img src={Customer1} id="customericon"></img>
      <img src={Customer1Device} id="platformicon"></img>
      <h6>Rixky</h6>
      <p>How to get WL for Bieber concert?</p>
    </div> 
  )
}

function BusinessProfile(){
  return(
    <div id="business" class="std_button" >
      <img src={Avatar} id="businessicon"></img>
      <img src={Customer1Device} id="businessdevice"></img>
      <h6>Kevin</h6>
      <p>How to get WL for Bieber concert?</p>
    </div> 
  )
}

function ClientChat(props){
  return(
    <div id="client" class="std_button" >
      <img src={Customer1} id="clienticon"></img>
      <img src={Customer1Device} id="clientdevice"></img>
      <h6>Rixky</h6>
      <p class="last_seen">last seen a minutes ago</p>
      <img src={Kebab} id="selection_icon"></img>
      <div id="chat_selection_chat_option">
        <h3 class="chat_option selected">Messages</h3>
        <h3 class="chat_option">Sales Log</h3>
        <h3 class="chat_option">Info</h3>
      </div>
      <div id="breakline"></div>
      <p id="chat_date">28/2/2022</p>
      {/*Chat Messages*/}
      <div id="chat_messages">
        {/*
        <div class="wrapper"> 
          <div class="chat_message right_sided" >
          <div class="message_right_sided">
              <p>Hi OxEric32</p>
          </div>
          <div class="flex">
            <p class="time_right">11:31AM</p>
            <img class="checksign" src={Check}></img>
          </div>
          </div>  
        </div>

        <div class="wrapper">
          <div class="chat_message left_sided" >
            <p>Rixky</p>
            <div class="message_left_sided">
              <p>You can enter the WL waffle through the following instruction</p>
              <p>Click to view</p>
            </div>
            <br/>
            <div class="flex">
              <p class="time_left">11:31AM</p>
              <img class="checksign" src={Check}></img> 
            </div>
          </div>
        </div>
  */}

      {props.message.map((message)=><Message message = {message} direction = {message.direction}/>)}

      </div>
      <div id="send_message">
        <div class="flex_left" id="message_bar">
          <button><img src={Emoji} class="favicon"></img></button>
          <input id="comment_bar" placeholder='Start typing...'></input>
          <button><img src={Mail} class="favicon"></img></button>
          <button><img src={Send} class="favicon"></img></button>
        </div> 
      </div>

    </div> 
  )
}

function Message(props){
  if(props.direction == "left"){
    return (
      <Left_user_message content = {props.message}/>
    )
  }else{
    return(
      <Right_user_message content = {props.message}/>
    )
  }
}

function Left_user_message(props){
  return(
<div class="wrapper">
  <div class="chat_message left_sided" >
    <p>{props.content.customer}</p>
    <div class="message_left_sided">
      <p>{props.content.message}</p>
    </div>
    <br/>
    <div class="flex">
      <p class="time_left">{props.content.time}</p>
      <img class="checksign" src={Check}></img> 
    </div>
  </div>
</div>
  )
}

function Right_user_message(props){
  return(
<div class="wrapper"> 
  <div class="chat_message right_sided" >
  <div class="message_right_sided">
      <p>{props.content.message}</p>
  </div>
  <div class="flex">
    <p class="time_right">{props.content.time}</p>
    <img class="checksign" src={Check}></img>
  </div>
  </div>  
</div>
  )
}

export default App;
