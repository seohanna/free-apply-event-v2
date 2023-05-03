import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #CCCCCC;
`;

const Content = styled.div`
  width: 768px;
  position: relative;
`;


const Layout = ({children}) => {
  return (
    <Wrap>
      <Content>
        {children}
      </Content>
    </Wrap>
  )
}


export default Layout