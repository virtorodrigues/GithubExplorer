import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories, Error } from './styles';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

interface Reposiotry {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Reposiotry[]>(() => {
    const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');
    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    } else {
      return [];
    }
  });
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!inputValue) {
      setInputError('Digite autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Reposiotry>(`repos/${inputValue}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setInputValue('');
      setInputError('');
    } catch (Err) {
      setInputError('Erro na busca por esse repositório');
    }

  }

  return (
    <>
      <img src={logo} alt="logo github" />
      <Title>Explore repositórios no Github</Title>


      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Digite o nome de um repositório"
        />

        <button>Pesquisar</button>
      </Form>

      { inputError && <Error>
        {inputError}
      </Error>}

      <Repositories>
        {repositories.map(repository => (
          <a href="/" key={repository.full_name}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard;