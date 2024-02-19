import logo from "../logo.svg";
import "../App.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SubNavbar from "../Components/SubNavbar";
import Sidemenu from "../Components/Sidemenu";
import Search from "../Components/Search";
import About from "./About";
import Products from "./Products";
import Login from "./Login";
import auth from "../Firebase";

import React, { useState, useEffect } from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  console.log("auth", auth);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // set the initial state of filteredUsers to an empty array
  const [filteredUsers, setFilteredUsers] = useState([]);

  const api = "https://fakestoreapi.com/products";
  //   let api = "https://fakestoreapi.com/";

  function handleSearch(e) {
    const searchValue = e.target.value;
    // console.log("searchValue", searchValue);
    setSearch(searchValue);
  }

  const filteredData = fetchedData.filter((singleProduct) => {
    // console.log(
    //   "singleProduct title in small letterst",
    //   singleProduct.title.toLowerCase()
    // );

    return singleProduct.category.toLowerCase().includes(search.toLowerCase());
  });
  console.log("filteredData", filteredData);
  // console.log("search value =", search, "screen items =", fetchedData);

  const getProducts = async () => {
    let data = await fetch(api).then((res) => res.json());
    console.log("data>>", data);
    // setIsLoading(false);
    setFetchedData(data);
  };

  useEffect(() => {
    getProducts();
  }, [api]);

  console.log(search);

  return (
    <div className="Home">
      {/* <Sidemenu /> */}
      <Navbar />
      <SubNavbar />

      {/* <Login /> */}
      {/* <div className="Products-container">SHOP PRODUCTS</div>; */}
      {/* <Products /> */}
      {/* <Search setSearch={setSearch} /> */}
      <div className="Searchbar-container">
        <form className="Searchbar">
          <input
            onChange={(e) => {
              handleSearch(e);
            }}
            className="input"
            placeholder="Search Category"
            type="text"
          ></input>
          <button className="Searchbutton">Search</button>
        </form>
      </div>
      {/* {isLoading && <h1>....LOADING.....</h1>} */}

      <div>
        {filteredData.map((fetchData) => (
          <div key={fetchData.id} className="card">
            <img src={fetchData.image} alt="" />
            <div className="card-description">
              <h1>{fetchData.category}</h1>
              <h3>{fetchData.title}</h3>
              {/* <h6>{fetchData.description}</h6> */}
              <h4>{fetchData.price} Euro, inkl. MwSt, zzgl. Versand</h4>
              {/* <h6>inkl. MwSt, zzgl. Versand</h6> */}
              <button className="buybutton">Buy</button>

              {/* <ul>
                {fetchedData.map((fetchData) => (
                  <li key={fetchData.id}>{fetchData.category}</li>
                ))}
              </ul> */}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
