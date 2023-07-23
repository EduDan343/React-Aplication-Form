import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar";
import { Button } from "./components/Button";

export const Index = () => {
  return (
    <>
      <Navbar>
        <Button
          value={"Registrarse"}
          placeholder={"Insertar correo"}
          width={"20%"}
          color={"#42d08a"}
          height={"50px"}
          link={"/registrar"}
        />
        <Button
          value={"Iniciar sesion"}
          placeholder={"Insertar correo"}
          width={"20%"}
          color={"#54A0FE"}
          height={"50px"}
        />
      </Navbar>
      <Form />
    </>
  );
};
