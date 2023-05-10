import React from "react";
import styled, { css } from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #CCCCCC;
`;

const Content = styled.div`
  width: 768px;
  position: relative;

  ${props => props.apply && css`
    padding: 20px;
    margin: 20px 0;
    background-color: #FFFFFF;
    border-radius: 10px;
  `}
`;


const Layout = ({children, apply}) => {
  return (
    <Wrap>
      <Content apply={apply}>
        {children}
      </Content>
    </Wrap>
  )
}


export default Layout