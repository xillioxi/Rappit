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
// Do the CSS here import the CSS here

function App() {
  return (
    <>
      <NavBar/>  
      <Community/>
      <MetaVerseSelection/>
      <Search/>
      <CustomerSelection/>
      <BusinessProfile/>
      <ClientChat/>
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
    <Customer class="std_button"/> 
    <Customer class="std_button"/> 

    <Customer class="std_button"/> 

    <Customer class="std_button"/> 

    <Customer class="std_button"/> 

    <Customer class="std_button"/> 

    <Customer class="std_button"/> 

    <Customer class="std_button"/> 

    <Customer class="std_button"/> 

    <Customer class="std_button"/> 

  </div>
  )
}

function Customer(props){
  return(
    <div id="Customer" class={props.class}>
      <img src={Customer1} id="customericon"></img>
      <img src={Customer1Device} id="platformicon"></img>
      <h6>0xEric32</h6>
      <p>How to get WL for Bieber concert?</p>
    </div> 
  )
}

function BusinessProfile(){
  return(
    <div id="business" class="std_button" >
      <img src={Customer1} id="businessicon"></img>
      <img src={Customer1Device} id="businessdevice"></img>
      <h6>0xEric32</h6>
      <p>How to get WL for Bieber concert?</p>
    </div> 
  )
}

function ClientChat(){
  return(
    <div id="client" class="std_button" >
      <img src={Customer1} id="clienticon"></img>
      <img src={Customer1Device} id="clientdevice"></img>
      <h6>0xEric32</h6>
      <p class="last_seen">last seen 45 minutes ago</p>
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
            <p>0xEric32</p>
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

export default App;
