import styled from 'styled-components'
import {white} from "../styled/colors"

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  height: 100vh;
  width: 100%;
  background-color: white;
  
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

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 603px;
`

export const ButtonClick = styled.button`
  width: 262px;
  height: 256px;
  
  font-size: 48px;
  
  border: none;
  border-radius: 25px;
  
  background-color: ${props => props.color};
  color: ${white};

  box-shadow: 10px 10px 22px #C6C4D7;

  transition: all 100ms ease-in;
  
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: all 150ms ease-in-out;
  }
`


