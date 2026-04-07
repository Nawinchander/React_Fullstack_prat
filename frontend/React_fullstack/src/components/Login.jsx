//// Login Component → API Call → Receive Token → Store Token → Use Token in Requests


import { useState } from "react";
import { api } from "../api";

function Login() {
  const [name, setName] = useState("");

  const handleLogin = async () => {
    const res = await api.post("/auth/login", { name });

    // ✅ STORE TOKEN HERE
    localStorage.setItem("token", res.data.token);
  };

  return (
    <div>
      <input onChange={e => setName(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;


