import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { isAutorized } from "../../utils/isAutorized";
import { Navbar } from "../Navbar";
import { Button } from "../Button";
import style from "./Menu.module.css";
import { Card } from "../Card";

export const Menu = () => {
  const navigate = useNavigate();
  const apiKey =
    "live_PLfrZZLW5djKQNtG5MJbbAAe148eMYFCxVNDBGQi4mFbcxehcrw97ktPeTgWYpZX";

  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/breeds?limit=10&page=0&api_key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("respuesta :", data);
        setAnimales(data);
      });
  }, []);

  const handleCloseSession = (e) => {
    e.preventDefault();

    console.log("Sesion cerrada");
  };

  const autorizacion = () => {
    const tocken = localStorage.getItem("tocken");
    console.log("token", tocken);
    if (!tocken) {
      return false;
    }
    const parsedTocken = JSON.parse(tocken);
    return isAutorized(parsedTocken.email, parsedTocken.password);
  };

  const NoAutorizado = () => {
    return navigate("/");
  };

  return autorizacion() ? (
    <>
      <Navbar customStyle={{ justifyContent: "flex-end", marginRight: "10px" }}>
        <Button
          value={"Cerrar sesión"}
          placeholder={"Insertar correo"}
          width={"18%"}
          height={"50px"}
          color={"red"}
          link={"/menu"}
          handleClick={handleCloseSession}
        />
      </Navbar>
      <main className={style.container}>
        {animales.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </main>
    </>
  ) : (
    <NoAutorizado />
  );
};
