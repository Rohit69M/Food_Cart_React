import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import FormInput from "../Components/FormInput";
import Button from "../Components/Button";
import ProductContext from "../Shopping-Context/ProductContext";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState();

  const { signUp } = useContext(ProductContext);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setPasswordError(true);
      return;
    }
  };
  return (
    <main className="Register_container">
      <section className="Register_section1">
        <h1>SignUp</h1>
        <p>We do not share your personal details with anyone</p>
      </section>
      <section className="Register_section2">
        <form onSubmit={handleRegisterSubmit}>
          <FormInput
            name="First Name"
            type="text"
            label="First Name"
            required
            value={firstName}
            handleChange={handleFirstName}
          />
          <FormInput
            name="Last Name"
            type="text"
            label="Last Name"
            required
            value={lastName}
            handleChange={handLastName}
          />
          <FormInput
            name="Email"
            type="text"
            label="Email"
            required
            value={email}
            handleChange={handleEmail}
          />
          <FormInput
            name="Password"
            type="password"
            label="Passowrd"
            required
            value={password}
            handleChange={handlePassword}
          />

          <FormInput
            name="Confirm Password"
            type="password"
            label="Confirm Passowrd"
            required
            value={confirmPassword}
            handleChange={handleConfirmPassword}
          />
          <Button>SignUp</Button>
        </form>
      </section>
    </main>
  );
};
export default Register;
