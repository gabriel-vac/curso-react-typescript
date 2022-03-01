import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { api } from "../../services/api";
import { Title, Form, Repos, Error } from "./styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = React.useState<GithubRepository[]>(() => {
    //essa função é o valor inicial da state
    const storageRepos = localStorage.getItem("@GitCollection:repositorios");
    if (storageRepos) {
      return JSON.parse(storageRepos);
    } else {
      return [];
    }
  });

  const [newRepo, setNewRepo] = React.useState("");
  const [inputError, setInputError] = React.useState("");
  const formEl = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    localStorage.setItem("@GitCollection:repositorios", JSON.stringify(repos));
  }, [repos]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewRepo(event.target.value);
  }

  // Caso o segundo parâmetro, o array de depêndencias esteja vazio, a função só vai ser executada quando o componente é criado.
  // Porém se eu passo uma variável, toda vez que o valor for atualizado o componente será chamado

  async function handleAddRepo(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault(); //não executar reload no submit do form

    if (!newRepo) {
      setInputError("Informe o username/repositório");
      return;
    }

    try {
      const response = await api.get<GithubRepository>(`repos/${newRepo}`);
      const repository = response.data;

      const repoRepeated = repos.find(
        (obj) => obj.full_name === repository.full_name
      );
      console.log(repoRepeated);
      if (repoRepeated) {
        setInputError("Repositório já adicionado a lista");
      } else {
        setRepos([...repos, repository]); //pegando todos os repos que ja existem e adicionando o repository retornado
        formEl.current?.reset(); //o ? indica que caso o currency não exista (caso seja null) ele não terá essa propriedade
        setNewRepo("");
        setInputError("");
      }
    } catch (error) {
      setInputError("Repositório não encontrado no GitHub");
    }
  }

  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositórios do GitHub</Title>
      {/* Se input error existir, no styled defino a borda como vermelho*/}
      <Form
        ref={formEl}
        hasError={Boolean(inputError)}
        onSubmit={handleAddRepo}
      >
        <input
          type="text"
          placeholder="username/repository_name"
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repos>
        {repos.map((repository) => (
          <Link
            to={`/repositories/${repository.full_name}`}
            key={repository.full_name}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repos>
    </>
  );
};
