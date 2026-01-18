import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import "./styles/Register.css";

// Desestruture a prop.
const Register = ({ handleRegistration }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Essa função é disparada quando houver alteração em uma entrada, atualizando
  // o valor da entrada em questão. Observe que as chaves desse
  // objeto correspondem aos atributos de nome das respectivas entradas.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Declare uma função de manipulador de envio. Essa função só precisa
  // evitar o comportamento padrão do navegador e chamar
  // handleRegistration, passando para ele os dados de envio
  // do formulário.
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
  };

  return (
    <div className="register">
      <Logo title={"CryptoDucks"} />
      <p className="register__welcome">Por favor, registre-se.</p>
      <form className="register__form" onSubmit={handleSubmit}>
        <label htmlFor="username">Nome de usuário:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={data.username}
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirme a senha:</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={data.confirmPassword}
          onChange={handleChange}
        />
        <div className="register__button-container">
          <button type="submit" className="register__link">
            Inscreva-se aqui
          </button>
        </div>
      </form>
      <div className="register__signin">
        <p>Já é um membro?</p>
        <Link to="login" className="register__login-link">
          Faça o login
        </Link>
      </div>
    </div>
  );
};

export default Register;
