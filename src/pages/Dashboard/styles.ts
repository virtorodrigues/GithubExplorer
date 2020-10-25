import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;

    &::placeholder {
      color: #A8A8B3;
    }
  }

  button {
    height: 70px;
    width: 210px;

    background: #04D361;
    
    font-weight: bold;
    color: #fff;

    border: 0;
    border-radius: 0 5px 5px 0;
    
    transition: background-color 0.2s; 

    &:hover {
      background: ${shade(0.2, '#04D361')}
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 24px;
    width: 100%;
    border-radius: 5px;
    text-decoration: none;

    img {
      border-radius: 50%;
      height: 64px;
      width: 64px;
    }

    div {
      margin-left: 16px;

      strong {
        color: #3D3D4D;
        font-size: 20px;
      }
      p {
        font-size: 16px;
        color: #A3A3A3;
        margin-top: 5px;
      }
    }

    svg {
      margin-left: auto;
      color: #CBCBD6;
    }

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }
  }


`;