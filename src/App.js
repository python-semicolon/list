import React from 'react'
import Lost from './lost'
import Cool from './Class' 
import Render from './render'
import Event from './Event'
import Form from './Form'
import Api from './Api'
import Post from './Post'
import PortalDemo from './Portal'
import "./index.css"

// import Listeners  from './listrender'
// import ParentComponent from './Parent';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App(){
    return (
       <div className="yo">
            <h1 className="test">lole</h1>
            <Lost name="name1">
                <p><b>this is cool</b> </p>
            </Lost> 
            <Lost name="name22"/>    
            <Lost name="name3"/>
            <Cool name="name1"/>
            <Render/>
            <hr/>
            <Event/>
            <hr/>
            <Form/>
            <Api/>
            <br></br>
            <Post/>
            <PortalDemo/>
            {/* <Listeners/> */}
            {/* <ParentComponent/> */}
     </div>
    )
}

export default App     