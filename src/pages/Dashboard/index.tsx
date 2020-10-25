import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="logo github" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome de um repositório" />
        <button>Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img src="https://avatars2.githubusercontent.com/u/20196107?s=400&u=82df4efc2a7a47f544c201559e73eb2ed4d2138c&v=4" alt="avatar" />
          <div>
            <strong>katanumerosromanos</strong>
            <p>Código do nosso Kata realizado no Dojo - Problema do conversor dos números romanos</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img src="https://avatars2.githubusercontent.com/u/20196107?s=400&u=82df4efc2a7a47f544c201559e73eb2ed4d2138c&v=4" alt="avatar" />
          <div>
            <strong>katanumerosromanos</strong>
            <p>Código do nosso Kata realizado no Dojo - Problema do conversor dos números romanos</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img src="https://avatars2.githubusercontent.com/u/20196107?s=400&u=82df4efc2a7a47f544c201559e73eb2ed4d2138c&v=4" alt="avatar" />
          <div>
            <strong>katanumerosromanos</strong>
            <p>Código do nosso Kata realizado no Dojo - Problema do conversor dos números romanos</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img src="https://avatars2.githubusercontent.com/u/20196107?s=400&u=82df4efc2a7a47f544c201559e73eb2ed4d2138c&v=4" alt="avatar" />
          <div>
            <strong>katanumerosromanos</strong>
            <p>Código do nosso Kata realizado no Dojo - Problema do conversor dos números romanos</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;