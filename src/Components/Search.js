// import React from "react";

// const Search = () => {
//   return (
//     <div className="Searchbar-container">
//       <form className="Searchbar">
//         <input
//           className="input"
//           placeholder="Search Products"
//           type="text"
//         ></input>
//         <button className="Searchbutton">Search</button>
//       </form>
//     </div>
//   );
// };

// export default Search;

import Home from "../Pages/Home";

import React, { useState } from "react";

// let [search, setSearch] = useState("");

const Search = () => {
  //   let [search, setSearch] = useState("");

  return (
    <div className="Searchbar-container">
      <form className="Searchbar">
        <input
          //   onChange={(e) => {
          //     setSearch(e.target.value);
          //   }}
          className="input"
          placeholder="Search by Category"
          type="text"
        ></input>
        <button className="Searchbutton">Search</button>
      </form>
    </div>
  );
};

export default Search;
