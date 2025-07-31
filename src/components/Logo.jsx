import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="text-xl font-bold "
    >
      <h1 className="text-blue-600 flex flex-col lg:items-start items-center">
        <span>ELGHABA.SAAD</span>
        <span className="text-xs text-gray-400 ">saadlraba@gmail.com</span>
      </h1>
    </Link>
  );
}

export default Logo;
