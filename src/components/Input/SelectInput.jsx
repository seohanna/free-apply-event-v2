import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

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
    background: none;
    color: #989898;
    > option {
      width: 100%;
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
  position: absolute;
  bottom: -17px;

  ${props => props.theme.window.mobile} {
    padding-top: 0px;
    line-height: 20px;
  }
`;


const SelectInput = ({name, label, options, ...rest}) =>  {
  const { register, formState: { errors } } = useFormContext({
    mode: 'onBlur',
  });

  return (
    <InputWrap>
      {label && (<Label>{label}</Label>)}
      <select
        name={name}
        {...register(name)}
        {...rest}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
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
  )
}
export default SelectInput