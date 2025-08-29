import "../style/header.css";
import Mode from "./Mode";
import Buttons from "./ButtonsHeader";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("get");

  function handleClick(name) {
    setActive(name);
  }

  return (
    <header className="header-wrapper">
      <Buttons
        value="Get"
        path="/"
        isActive={active === "get"}
        onClick={() => handleClick("get")}
      />
      <Buttons
        value="Post"
        path="/post"
        isActive={active === "post"}
        onClick={() => handleClick("post")}
      />
      <Buttons
        value="Users"
        path="/users"
        isActive={active === "users"}
        onClick={() => handleClick("users")}
      />
      <Buttons
        value="Add user"
        path="/add"
        isActive={active === "add"}
        onClick={() => handleClick("add")}
      />
      <Mode />
    </header>
  );
}
