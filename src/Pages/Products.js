import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidemenu from "../Components/Sidemenu";
import Search from "../Components/Search";

// import axios from "axios";

// const Products = () => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);

//   useEffect({
//     method: "GET",
//     url: "",
//   });

function Products() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <Navbar />
      Producttttttts
      <button className="menubutton" onClick={() => navigate("/")}>
        Home
      </button>
      <p className="">
        This Fashiopn Shop ships Worldwide. lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum v
      </p>
      <Footer />
    </div>
  );
}

export default Products;
