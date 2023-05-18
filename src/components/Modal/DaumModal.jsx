import React from 'react'
import styled from 'styled-components'
import closeIcon from '../../assets/icon/closeIcon.png';
import DaumPostcode from 'react-daum-postcode';

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
  width: 500px;
  height: 500px;
  z-index: 1000;
  position: relative;
  margin: 0 auto;
  background-color: #FFFFFF;
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 20px;
  position: absolute;
  top: -40px;
  right: 0;

  ${(props) => props.theme.window.mobile} {
    width: 28px;
    height: 28px;
    background-size: contain;
    margin-left: 90%;
    z-index: 999;
    top: 50px;
    right: 10px;
  }

`;
const postCodeStyle = { 
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0'
};

function DaumModal({onClick, onClose, onComplete, }) {

  return (
    <ModalOveray onClick={onClick}>
      <ModalWrap>
        <CloseButton onClose={onClose} />
        <DaumPostcode 
          style={postCodeStyle} 
          autoClose 
          onComplete={onComplete} 
        />
      </ModalWrap>
    </ModalOveray>
  )
}

export default DaumModal