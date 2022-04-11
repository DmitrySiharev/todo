import styled from 'styled-components'
import {coolPurple, white, lightGray, deepBlack, gray} from "../../../styled/colors"
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

  margin: 0;
  box-sizing: border-box;

  height: 100vh;
  width: 100%;
  background-color: ${coolPurple};

  display: flex;

  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0;
    padding: 90px 0 70px;
    box-sizing: border-box;

    font-family: 'Rubik', sans-serif;
    font-size: 70px;
    font-weight: normal;
  }
`

export const Arrow = styled.div`
  font-family: 'Rubik', sans-serif;

  width: 88px;
  height: 44px;
  background-color: ${props => props.color};
  box-shadow: 5px 5px 10px rgba(2, 1, 14, 0.37);
  border-radius: 4px;
  position: absolute;
  left: 97px;
  top: 97px;

  &::after {
    content: 'BACK';
    width: 100%;
    height: 100%;
    position: absolute;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const WrapperInputs = styled.div`
  position: relative;

  h1 {
    font-size: 48px;
    color: white;
    text-align: center;
  }
`

export const ButtonAdd = styled.button`
  position: absolute;
  right: 10px;
  top: 225px;
  font-size: 25px;

  width: 35px;
  height: 35px;
  color: ${white};
  background-color: ${coolPurple};

  border: 1px solid ${coolPurple};
  border-radius: 3px;
  
  cursor: pointer;
`

export const ButtonDelete = styled.button`
  font-size: 25px;

  position: absolute;
  right: 10px;

  width: 35px;
  height: 35px;
  color: ${white};

  background-color: ${coolPurple};
  border: 1px solid ${coolPurple};
  border-radius: 3px;

  cursor: pointer;
`

export const ButtonEdit = styled.button`
  font-size: 25px;

  position: absolute;
  right: 56px;

  width: 35px;
  height: 35px;
  color: ${deepBlack};

  background-color: ${lightGray};
  border: none;
  border-radius: 3px;
  
  cursor: pointer;
`

export const InputText = styled.input`
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  
  padding: 12px 0 12px 18px;
  width: 350px;
  height: 50px;

  outline-color: ${lightGray};

  position: relative;

  border: none;
  border-radius: 6px;

  margin-bottom: 50px;
`

export const InputEdit = styled.input`
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  border: none;
`

export const Lists = styled.div`
  min-width: 350px;
  min-height: 50px;

  font-size: 20px;
  font-family: 'Rubik', sans-serif;

  color: ${deepBlack};
  background-color: white;

  border-radius: 6px;

  margin-bottom: 15px;

  display: flex;
  align-items: center;

  list-style: none;

  padding: 5px;

  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    margin: 0 10px;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid ${gray};
    border-radius: 0.15em;
    transform: translateY(-0.075em) scale(1);
    cursor: pointer;
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    background-color: ${coolPurple};
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
  
  
  a {
    color: ${deepBlack};
  }
}

`

export const LinkPage = styled(Link)`
  text-decoration: none;
  
  
  .show {
    text-decoration: line-through;
  }

`
