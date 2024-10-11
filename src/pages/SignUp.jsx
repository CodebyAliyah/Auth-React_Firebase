import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";
const auth = getAuth(app);

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(value => alert('success'))
  };
  return (
    <div>
      <label>Email</label>
      <input type="email"
      onChange={e=>setEmail(e.target.value)}
      value={email}
       required
        placeholder="Enter Your Email" />
      <br />
      <br />
      <label>Password</label>
      <input type="Password"
      onChange={e=>setPassword(e.target.value)}
      value={password}
       required
        placeholder="Enter Your Password" />
      <br />
      <button onClick={createUser}>SignUp</button>
    </div>
  );
}

export default SignUp;
