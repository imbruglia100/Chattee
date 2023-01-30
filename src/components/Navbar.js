import React from "react";
import LoginButton from "./LoginButton";
const NavBar = () => {
  
  return (
    <nav
      id="nav-bar"
      className="flex p-3 justify-between items-center"
    >
      <h1>Chattee</h1>
      <LoginButton />
    </nav>
  );
};
export default NavBar;
