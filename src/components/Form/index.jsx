import { useValidEmail } from "../../hooks/useValidEmail";
import { useValidPassword } from "../../hooks/useValidPassword";
import { Button } from "../Button";
// import users from "../../../data.json";
import style from "./form.module.css";

export const Form = () => {
  const [email, errorEmail, handleEmail] = useValidEmail();
  const [password, errorPassword, handlePassword] = useValidPassword();

  return (
    <main className={style.container}>
      <div className={style.form}>
        <div>
          <span>Correo</span>
          <input type="email" value={email} onChange={handleEmail} />
        </div>
        <div>
          {errorEmail.length ? (
            <p style={{ color: "red" }}>{errorEmail}</p>
          ) : null}
        </div>
      </div>
      <div className={style.form}>
        <div>
          <span>Password</span>
          <input
            style={{ marginRight: "20px" }}
            type="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          {errorPassword.message.length ? (
            <p style={{ color: "red" }}>{errorPassword.message}</p>
          ) : null}
        </div>
      </div>
      <Button
        value={"Iniciar sesion"}
        placeholder={"Insertar correo"}
        width={"30%"}
        color={"#42d08a"}
      />
    </main>
  );
};
