import React from "react";
import "../App.css";
import { useNavigate } from "react-router";
import "../App.css";

import Login from "./Login";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// import { Link } from "react-router-dom";
//
// function About() {
//   return (
//     <div className="px-4">
//       <p className="p-4 font-medium"></p>
//       <Link
//         to="/"
//         className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mt-04"
//       >
//         <div className="">
//           <p className="flex items-center mt-4 text-sky-500">
//             <span>Back to Home Page</span>
//           </p>
//         </div>
//       </Link>
//     </div>
//   );
// }

function About() {
  const navigate = useNavigate();
  return (
    <div className="page">
      {/* <Sidemenu /> */}
      <Navbar />
      About Page is working WOOP
      <button className="menubutton" onClick={() => navigate("/")}>
        Home
      </button>
      <Footer />
    </div>
  );
}

export default About;
