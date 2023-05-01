import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
if(location.pathname === "/" ) {
  setActiveTab("Home");
}else if (location.pathname === "/add") {
  setActiveTab("AddContact");
}else if (location.pathname === "/about"){
setActiveTab("About");

}


  }, [location]);
  return (
    <div className='header'>
      <p className='logo'>
        Contact App
      </p>
      <div className='header-right'>
        <Link to="/" className={activeTab === "Home" ? "active" : ""} onClick={() => setActiveTab("Home")}>
          <p>Home</p>
        </Link>
        <Link to="/add" className={activeTab === "AddContact" ? "active" : ""} onClick={() => setActiveTab("AddContact")}>
          <p>Add Contact</p>
        </Link>
        <Link to="/about" className={activeTab === "About" ? "active" : ""} onClick={() => setActiveTab("About")}>
          <p>About</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
