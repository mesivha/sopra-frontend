import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log("Login success:", data);
      navigate("/"); // dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form-section">
        <div className="login-form-content">

          <h1 className="login-title">Welcome back</h1>
          <p className="login-subtitle">
            Please enter your details to access your workspace.
          </p>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="text"
                placeholder="name@soprasteria.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-primary full-width">
              Sign In
            </button>
          </form>

        </div>
      </div>

      <div className="login-hero-section">
        <h2>Automate with Precision.</h2>
      </div>
    </div>
  );
};

export default LoginPage;
