import React, { Component } from 'react';
import FaAlignLeft from 'react-icons/lib/fa/align-left';
import './componentStyle.css';
class Navbar extends Component{
    render(){
        return(
            <div className="nav-container">
                <FaAlignLeft className="Ham" onClick={()=>console.log("clicked")} /> YUNGU
                <input placeholder={"Search"} className="YunguSearch"/>
            </div>
        )
    }
}

export default Navbar;