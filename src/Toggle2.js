import React, { Component } from "react";


class Book extends Component {
    render(){
        return (
            <div className="right" style={{display:'flex'}}>
            <h1>This is Created using Class Component</h1>
            <p id="paragraph1">This is done using through external CSS</p>
            <p id="paragraph2" style={{color:"red)"}}>This is done using through inline CSS</p>
        </div>
        )
    }
}

export default Book;