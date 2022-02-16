import React from "react";
import { useState } from "react/cjs/react.development";
import FormInput from "../Components/FormInput";
import Button from "../Components/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className="Login_container">
      <section className="Login_section1">
        <h1>Login</h1>
        <p>Get access to your orders, Whishlist and Recommendation</p>
      </section>
      <section className="Login_section2">
        <form onSubmit={handleSubmit}>
          <FormInput
            name="Name"
            type="text"
            label="Email"
            required
            value={email}
            handleChange={handleInputChange}
          />
          <FormInput
            name="Password"
            type="password"
            label="Passowrd"
            required
            value={password}
            handleChange={handlePasswordChange}
          />
          <Button>Login</Button>
        </form>
      </section>
    </main>
  );
};

export default Login;
