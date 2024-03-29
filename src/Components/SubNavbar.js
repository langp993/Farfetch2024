import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div className="Subnavbar">
      <Link
        to="/about"
        className="flex items-center justify-between p-2 bg-white rounded-lg shadow-md m-8"
      >
        <h1>Menu</h1>
      </Link>
      <Link
        to="/about"
        className="flex items-center justify-between p-2 bg-white rounded-lg shadow-md m-8"
      >
        <h1>Checkout</h1>
      </Link>
      <Link
        to="/about"
        className="flex items-center justify-between p-2 bg-white rounded-lg shadow-md m-8"
      >
        <h1 className="">About</h1>
      </Link>

      <Link
        to="/login"
        className="flex items-center justify-between p-2 bg-white rounded-lg shadow-md m-8"
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
