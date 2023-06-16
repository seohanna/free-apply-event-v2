import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import checkIcon from '../../assets/icon/checkInput.png';
import checkedIcon from '../../assets/icon/checkInputChecked.png';
import { ErrorMessage } from '@hookform/error-message';

const InputWrap = styled.div`
  width: 100%;
  position: relative;

  ${props => props.theme.window.mobile} {
   
  }

`;

const CheckGroup = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 39px;
  padding: 7px;
  margin-bottom: 5px;
  border: 1px solid #DADADA;
  border-radius: 5px;
  font-size: 13px;
  background: none;
  color: #989898;
  > input {
    position: absolute;
    left: -1000%;
    ::placeholder {
      color: #DADADA;
      font-size: 13px;
   }
  }
  
  > label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    
    ::after {
      content: '';
      display: block;
      width: 18px;
      height: 18px;
      background-image: url(${checkIcon});
      margin: 2.5px 0;
    }
  }
  > input:checked + label {
    ::after {
      background-image: url(${checkedIcon});
    }
  }

`;

const Label = styled.label`
  display: block;
  width: 100%;
  color: #222222;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;

`;

const ErrorText = styled.p`
  font-size: 13px;
  line-height: 13px;
  padding-top: 5px;
  color: ${(props) => props.theme.color.WARNING_MESSAGE};


  ${props => props.theme.window.mobile} {
    padding-top: 0px;
    line-height: 20px;
  }
`;

const Caution = styled.span`
  color: #ED0000;
  display: block;
  font-size: 10px;
`;

const CheckInput = ({
   label, placeholder, onClick, checked
}) =>  {
  const { register, formState: { errors } } = useFormContext({
    mode: 'onBlur',
  });

  return (
    <InputWrap>
      {label && (
        <Label>{label}</Label>
      )}
      <CheckGroup onClick={onClick}>
        <input
          name='msme'
          type='checkbox'
          checked={checked}
          id='check'
          {...register('msme')}
        />
        <label for='check'>
          소상공인여부 체크
        </label>
      </CheckGroup>
      <Caution>*업종 중 주유소 및 경정비업소는 가입이 불가합니다.</Caution>
      <ErrorMessage
        errors={errors}
        name='msme'
        render={({message}) => <ErrorText>{message}</ErrorText>}
      />
    </InputWrap>
    
  )
}
export default CheckInput