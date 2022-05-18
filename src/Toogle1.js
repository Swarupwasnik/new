import React from "react";

const Note = () => {
    return (
        <div className="left" style={{display:'flex'}}>
            <h1>This is Created using Functional Component</h1>
            <p id="paragrap1">This is done using through external CSS</p>
            <p id="paragraph2" style={{color:'orangered'}}>This is done using through inline CSS</p>
        </div>
    )
}

export default Note;