import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const InputWrap = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 25px;
  
  ${props => props.theme.window.mobile} {
    margin-bottom: 20px;
  }

`;

const InputBase = styled.input`
  width: 100%;
  height: 39px;
  padding: 7px;
  margin-bottom: 5px;
  border: 1px solid #DADADA;
  border-radius: 5px;
  font-size: 13px;
  background: none;
  color: #989898;
  
  
  ::placeholder {
    color: #DADADA;
    font-size: 13px;
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
  /* position: absolute; */
  bottom: -17px;

  ${props => props.theme.window.mobile} {

  }
`;

const Input = ({
  name, placeholder, onChange, label, type, defaultValue,
  readOnly, require, validate, pattern, maxLength, minLength
}) =>  {
  const { register, formState: { errors } } = useFormContext({
    mode: 'onBlur'
  });
  return (
    <InputWrap>
      {label && (
        <Label>{label}</Label>
      )}
      <InputBase
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        defaultValue={defaultValue}
        {...register(name, {
          required: require,
          validate: validate,
          pattern: pattern,
          maxLength: maxLength,
          minLength: minLength,
        })}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({message}) => <ErrorText>{message}</ErrorText>}
      />
    </InputWrap>
  )
}
export default Input