import React from "react";
import LoginButton from "./LoginButton";
const NavBar = () => {
  return (
    <nav
      id="nav-bar"
      className="flex p-3 justify-evenly [&>a]:duration-150 [&>a]:transition-all items-center"
    >
      <h1>Chattee</h1>

      {window.screen.width > 640 ? (
        <ul className="flex justify-evenly w-[30%] ">
          <a href="#home" className="hover:scale-105">
            Home
          </a>

          <a href="#home" className="hover:scale-105">
            Meet
          </a>

          <a href="#home" className="hover:scale-105">
            Chat
          </a>

          <a href="#home" className="hover:scale-105">
            Support
          </a>
        </ul>
      ) : (
        <dropdown className="absolute text-lg right-6">|||</dropdown>
      )}

      {window.screen.width > 640 && <LoginButton />}
    </nav>
  );
};
export default NavBar;
