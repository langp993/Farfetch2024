// import React from "react";
// import "../App.css";
// // import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import SideNav, {
//   Toggle,
//   NavItem,
//   NavIcon,
//   NavText,
// } from "@trendmicro/react-sidenav";
// import "@trendmicro/react-sidenav/dist/react-sidenav.css";
// import { Link, useNavigate } from "react-router-dom";

// function Sidemenu() {
//   const navigate = useNavigate();

//   return (
//     <SideNav
//       onSelect={(selected) => {
//         console.log(selected);
//         navigate("/" + selected);
//       }}
//     >
//       <SideNav.Toggle />
//       <SideNav.Nav defaultSelected="home">
//         <NavItem eventKey="">
//           {/* <NavIcon className="fa fa-fw fa-home"></NavIcon> */}
//           <NavText>Home</NavText>
//         </NavItem>
//         <NavItem eventKey="Products">
//           <NavText>Products</NavText>
//         </NavItem>
//         <NavItem eventKey="About">
//           <NavText>About</NavText>
//         </NavItem>
//       </SideNav.Nav>
//     </SideNav>
//   );
// }

// export default Sidemenu;

// const Sidemenu = () => {
//   return (
//     <div className="Sidemenu">
//       <Sidebar>
//         <Menu>
//           <SubMenu label="Charts">
//             <MenuItem> Pie charts </MenuItem>
//             <MenuItem> Line charts </MenuItem>
//           </SubMenu>
//           <MenuItem> Documentation </MenuItem>
//           <MenuItem>
//             <span>About</span>
//           </MenuItem>
//         </Menu>
//       </Sidebar>
//       {/* <div className="px-4">
//         <Link
//           to="/App.js"
//           className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mt-04"
//         >
//           <div className="">
//             <li className="flex items-center mt-4 text-sky-500">
//               <span>About</span>
//             </li>
//           </div>
//         </Link>
//       </div>

//       <div className="px-4">
//         <Link
//           to="/About.js"
//           className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mt-04"
//         >
//           <div className="">
//             <li className="flex items-center mt-4 text-sky-500">
//               <span>Info</span>
//             </li>
//           </div>
//         </Link>
//       </div> */}
//     </div>
//   );
// };

// export default Sidemenu;
