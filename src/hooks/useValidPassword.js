import { useState, useEffect } from "react";

export function useValidPassword() {
  function validate(password) {
    let error = {
      message: "",
      eigthCharacters: false,
      oneNumber: false,
      twoNACharacters: false,
      oneUppercase: false,
    };
    if (!password.length) {
      error.message = "Password is required!";
    }

    if (/^.{8,}/.test(password)) {
      error.eigthCharacters = true;
    } else {
      error.eigthCharacters = false;
    }

    if (!/^(?=.*?[0-9])/.test(password)) {
      error.oneNumber = false;
    } else {
      error.oneNumber = true;
    }

    if (
      !/^(?=.*?[/#(?)!@[$\]%{^}&:\\;\\'\\,\\`\\~\\+\\=\\<\\>\\"\\.*-])/.test(
        password
      )
    ) {
      error.twoNACharacters = false;
    } else {
      error.twoNACharacters = true;
    }

    if (!/^(?=.*?[A-Z])/.test(password)) {
      error.oneUppercase = false;
    } else {
      error.oneUppercase = true;
    }

    return error;
  }
  //Estado password
  const [password, setPassword] = useState("");

  //Estado error
  const [errorPassword, setErrorPassword] = useState({
    message: "",
    eigthCharacters: false,
    oneNumber: false,
    twoNACharacters: false,
    oneUppercase: false,
  });

  useEffect(() => {
    setErrorPassword(validate(password));
  }, [password]);

  const handlePassword = (event) => {
    event.preventDefault();
    console.log("Password :", event.target.value);
    setPassword(event.target.value);
  };
  return [password, errorPassword, handlePassword];
}
