// import logo from "./logo.svg";
// import "./App.css";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
// import Products from "./Components/Products";
// import Sidemenu from "./Components/Sidemenu";
// import Search from "./Components/Search";
// import About from "./Pages/About";

// import React, { useState, useEffect } from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// // import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   let [fetchedData, updateFetchedData] = useState([]);

//   let api = "https://fakestoreapi.com/products";

//   useEffect(() => {
//     (async function () {
//       let data = await fetch(api).then((res) => res.json());
//       console.log(data);
//       updateFetchedData(data);
//     })();
//   }, [api]);

//   return (
//     <div className="App">
//       {/* <Router>
//         <Sidemenu />
//         <Routes>
//           <Route path="/App.js" element={<About />} />
//         </Routes>
//       </Router> */}
//       <Router>
//         <Sidemenu />
//         <Navbar />
//         {/* <Products /> */}
//         <Search />
//         <Routes>
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route path="/About" element={<About />} />
//           <Route path="/Products" element={<Products />} />
//         </Routes>
//       </Router>

//       <div>
//         {/* <h3 className="product-name">{fetchedData.category}isitworking</h3> */}
//         {fetchedData.map((fetchData) => (
//           <div key={fetchData.id} className="card">
//             <img src={fetchData.image} alt="" />
//             <div className="card-description">
//               <h3>{fetchData.title}</h3>
//               <h3>{fetchData.category}</h3>
//               <h6>{fetchData.description}</h6>
//               <h4>{fetchData.price} Euro</h4>
//               <h6>inkl. MwSt, zzgl. Versand</h6>
//               <button className="buybutton">Buy</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
// import SubNavbar from "./Components/SubNavbar";
// import Sidemenu from "./Components/Sidemenu";
// import Search from "./Components/Search";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
