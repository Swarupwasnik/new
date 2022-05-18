import React, { useState } from "react";
import Book from './Toggle2';
import Note from './Toogle1'
import './Style.css';

const Header = () =>{

  const [look, setShow] = useState(false);
  const [Watch, setShows] = useState(false);

  const click1 = () => {
    setShow(!look);
  }
  const click2 = () => {
    setShows(!Watch);
  }


  return(
    <div id="block">
    <h1 className="head">Styling using Functional and Class Component</h1>

    <div className="btn">
      <button className="button1" onClick={click1}>To see styling in function Component</button>
      <button className="button2" onClick={click2}>To see styling in Class Component</button>
    </div>
    <span>
    { look && <Book/>}
    { Watch &&  <Note/>}
    </span>
    </div>
  )
};

export default Header;
