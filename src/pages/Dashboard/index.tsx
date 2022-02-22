import React from "react";
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repos } from "./styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositórios do GitHub</Title>
      <Form>
        <input type="text" placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <Link to="/repositories">
          <img src="" alt="Repositorio" />
          <div>
            <strong>aluiziodeveloper/mini-curso-reactjs</strong>
            <p>Repositório do minicurso</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Repos>
    </>
  );
};
