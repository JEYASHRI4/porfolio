import React from "react";
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom';
import About from "./About";
import Contact from "./contact";
import Header from "./header";

export default function Navigation(){
return(
<div className="home">
<Header></Header>
<BrowserRouter>
<header>
<br></br>
<Link to='/about'><img border="0" src="https://cdn-icons-png.flaticon.com/512/25/25694.png" width="67" height="67"></img></Link>
<Link id="about"to='/contact'><img border="0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/About_icon_%28The_Noun_Project%29.svg/2048px-About_icon_%28The_Noun_Project%29.svg.png" width="60" height="60"></img></Link>
</header>
<marquee behaviour="scroll" direction="right">
<h1>HI I AM JEYA SHRI K</h1>
</marquee>
<h1>NICE TO MEET YOU</h1>
<Routes>
<Route path='/about' element={<About></About>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
</Routes>
</BrowserRouter>
<div id='div2'></div>
</div>   
    )
}