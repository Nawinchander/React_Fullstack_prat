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





// Where is Token Stored?
// Option A (Your current setup)
// localStorage.setItem("token", token);

// ✔ Simple
// Not fully secure (XSS risk)

// Option B (FAANG-level)
// HTTP-only cookies (backend-controlled)

// ✔ More secure
// ✔ Used in production systems

