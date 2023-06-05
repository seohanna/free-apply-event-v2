import React from 'react'
import styled from 'styled-components'
import closeIcon from '../../assets/icon/closeIcon.png';

const ModalOveray = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



const ModalWrap = styled.div`
  z-index: 1000;
  margin: 0 auto;
  background-color: #FFFFFF;
  ${(props) => props.theme.window.mobile} {
    
  }
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-position: center;
  margin: 1% 0 0 95%;

  ${(props) => props.theme.window.mobile} {
    width: 28px;
    height: 28px;
    background-size: contain;
    margin-left: 90%;
  }

`;

const Content = styled.div`
  > h2 {
    font-size: 20px;
    text-align: center;
  }
`;

function Modal({onClick, children}) {

  return (
    <ModalOveray>
      <ModalWrap>
        <CloseButton onClick={onClick} />
        <Content>
          {children}
        </Content>
      </ModalWrap>
    </ModalOveray>
  )
}

export default Modal