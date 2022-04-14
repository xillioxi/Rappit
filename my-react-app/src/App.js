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
    <Customer/>
    <Customer/>
    <Customer/> 
  </div>
  )
}

function Customer(){
  return(
    <div id="Customer" class="std_button">
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
      <p>How to get WL for Bieber concert?</p>
    </div> 
  )
}

export default App;
