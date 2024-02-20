// import React from "react";
// import "../App.css";
// import { useNavigate } from "react-router";

// const Login = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <form className="Login">
//         <label>
//           <p>Username</p>
//           <input type="text" />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//         <div></div>
//       </form>

//       <div>
//         <button className="menubutton" onClick={() => navigate("/")}>
//           Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/about");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode == "auth/email-already-in-use") {
          alert("Email already in use");
        }
        // ..
      });
  };

  return (
    <main>
      <section>
        <div>
          <div className="bg-green-500 flex grid grid-cols-1 items-center justify-center w-80 m-auto mt-40">
            <h1 className="m-auto font-bold text-2xl">
              {" "}
              LOGIN TO YOUR ACCOUNT{" "}
            </h1>
            <form>
              <div className="my-8 grid grid-cols-1">
                <label htmlFor="email-address">Email address</label>
                <input
                  className="mx-8"
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div className="my-8 grid grid-cols-1">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                onClick={onSubmit}
                className="my-8 bg-yellow-500 p-4 w-80 rounded-lg"
              >
                {/* Sign up */}
                Login
              </button>
            </form>

            <p className="m-auto text-blue-500">
              Don't have an account? <NavLink to="/">Sign Up</NavLink>
            </p>

            {/* <p>
              Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
