import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex; //alinhar o icone com o texto
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepoInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        //pegar da segunda adiante
        margin-left: 80px;
      }

      strong {
        display: block; //pra quebrar a linha
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        /* background-color: red; */
        display: block; //block usa 100% da larguda disponível, mesmo se o conteudo for de apenas uma palavra, ocupara a linha toda
        margin-top: 4px;
        color: #737380;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 30px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(6px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1; //ocupar 100% do espaço que ele puder ocupar
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
