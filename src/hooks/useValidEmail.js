import { useState } from "react";

export function useValidEmail() {
  function validate(email) {
    let error = "";
    if (!email.length) {
      error = "Email is required!";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      error = "Email is invalid required format example@mail.com !";
    }
    return error;
  }
  //Estado email
  const [email, setEmail] = useState("");

  //Estado error
  const [errorEmail, setErrorEmail] = useState("");

  const handleEmail = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setEmail(event.target.value);
    setErrorEmail(validate(event.target.value));
  };
  return [email, errorEmail, handleEmail];
}
