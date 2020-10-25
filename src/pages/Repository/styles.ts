import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    text-decoration: none;
    color: #A8A8B3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    
    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3D3D4D;
      }

      P {
        font-size: 18px;
        margin-top: 4px;
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
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3D3D4D;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6C6C80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 24px;
    width: 100%;
    border-radius: 5px;
    text-decoration: none;

    div {
      margin: 0 16px;
      flex: 1;

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