import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
  > a {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }

  ${props => props.disabled && css`
    opacity: 0.3;
  `} 
`;


const Button = ({children, onClick, disabled, link}) => {
  return (
    <ButtonWrap onClick={onClick} disabled={disabled}>
      {link ? (<Link to={link}>{children}</Link>) : children}
    </ButtonWrap>
  )
}

export default Button;

