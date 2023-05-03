import React from "react";
import styled from "styled-components";

const ButtonWrap = styled.div`
  width: 100%;
  background-color: #176FFF;
  color: #FFFFFF;
  font-size: 14px;
  height: 50px;
  border-radius: 8px;
  font-weight: 700;
  text-align: center;
  line-height: 50px;
`;


const Button = ({children}) => {
  return (
    <ButtonWrap>
      {children}
    </ButtonWrap>
  )
}

export default Button;

