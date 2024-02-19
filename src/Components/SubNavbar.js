import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div className="Subnavbar">
      {/* <button className="menubutton">Menu</button> */}
      <h1 className="text-sky-500">Menu</h1>
      <h1 className="px-4">Checkout</h1>
      {/* <h1 className="">Login</h1> */}

      <Link
        to="/about"
        className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mt-04"
      >
        <h1 className="">Contact</h1>
      </Link>

      <Link
        to="/login"
        className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mt-04"
      >
        <h1 className="">Login</h1>
      </Link>
    </div>
  );
};

export default SubNavbar;

// <Link
// to="../Pages/About.js"
// className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mt-04"
// >
// <div className="">
//   <h1 className="">
//     <span>About</span>
//   </h1>
//   {/* <li className="flex items-center mt-4 text-sky-500">
//     <span>About</span>
//   </li> */}
// </div>
// </Link>
