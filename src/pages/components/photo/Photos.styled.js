import styled from 'styled-components'
import {coolYellow, lightGray} from "../../../styled/colors";


export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

  display: flex;
  flex-direction: column;
  background-color: ${coolYellow};

  min-height: 100vh;

  h1 {
    margin: 90px 0 0 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Rubik', sans-serif;
    font-size: 48px;
    font-weight: normal;
    text-align: center;
    color: white;
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

export const WrapperInput = styled.div`
  max-width: 583px;

  margin: 70px auto;

  input {
    font-family: 'Rubik', sans-serif;
    font-size: 20px;

    padding: 12px 0 12px 18px;
    margin: 0 10px;
    width: 400px;
    height: 50px;

    outline-color: ${lightGray};
    
    border: none;
    border-radius: 6px;

  }
`

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${coolYellow};
  color: white;
  border: none;
  border-radius: 6px;
  box-shadow: 5px 5px 10px rgba(2, 1, 14, 0.37);
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  cursor: pointer;
`

export const WrapperImgs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
 

  div {
    display: flex;
    align-items: center;
    border-radius: 6px 6px 0 0;
    background-color: white;
    min-height: 4em;
    p {
      font-family: "Rubik", sans-serif;
      font-size: 16px;
      max-width: 270px;
      margin: 0 auto;
     

      text-align: center;
    }
  }
  
  img {
    max-width: 270px;
    max-height: 400px;
    margin-bottom: 25px;
  }
`

export const WrapperPhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 20px;
`