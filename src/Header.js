import React, { useContext } from "react";
import {FaLaptop,FaTabletAlt,FaMobileAlt} from 'react-icons/fa'
import DataContext from "./Context/DataContext";

const Header=({title})=> {
  const {width} = useContext(DataContext);
  return(
    <header className="header">
      <h1>{title}</h1>
      {
        width<768 ? <FaMobileAlt/>
        :width<992 ? <FaTabletAlt/>
        :<FaLaptop/>
      }
    </header>
  )
}

export default Header;