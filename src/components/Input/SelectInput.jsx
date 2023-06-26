import React, { useRef } from 'react';
import styled from 'styled-components';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import selectIcon from '../../assets/icon/selectIcon.png';

const InputWrap = styled.div`
  width: 100%;
  position: relative;
  width: 100%;

  > select {
    position: relative;
    display: flex;
    width: 100%;
    height: 39px;
    padding: 7px;
    margin-bottom: 5px;
    border: 1px solid #DADADA;
    border-radius: 5px;
    font-size: 13px;
    color: #989898;
    background: url(${selectIcon}) no-repeat 99%;
    
    > option {
      width: 100%;
    }
    input {
      position: absolute;
      left: -1000%;
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
  padding-bottom: 5px;
  color: ${(props) => props.theme.color.WARNING_MESSAGE};
  /* position: absolute;
  bottom: -17px; */

  ${props => props.theme.window.mobile} {
    padding-top: 0px;
    line-height: 20px;
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  left: -1000%;
`;


const SelectInput = ({name, label, options, required, ...rest}) =>  {
  const {register, control, formState: { errors } } = useFormContext({
    mode: 'onBlur',
  });
  const selectRef = useRef()
  console.log(selectRef.options)
  return (
    <>
      <InputWrap>
      {label && (<Label>{label}</Label>)}
      <select
        name={name}
        {...register(name, {
          required: required,
        })}
        {...rest}
      >
        {options.map(option => (
          <option key={option.value} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
      
      <ErrorMessage
        errors={errors}
        name={name}
        render={({message}) => <ErrorText>{message}</ErrorText>}
      />
    </InputWrap>
    
  </>
  )
}
export default SelectInput

const SelectCode = ({code}) => {
  return (
    <HiddenInput value={code}/>
  )
}
