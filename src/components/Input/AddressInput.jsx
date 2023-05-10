import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Input from './Input';
import searchIcon from '../../assets/icon/searchIcon.png';

const InputWrap = styled.div`
  width: 100%;
  position: relative;
  margin: 20px 0;

  ${props => props.theme.window.mobile} {
    margin-bottom: 20px;
  }

`;

const SearchInput = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 7px;
  height: 39px;
  margin-bottom: 5px;
  border: 1px solid #DADADA;
  border-radius: 5px;
  font-size: 13px;
  background: none;
  color: #989898;
  > input {
    width: 100%;
    ::placeholder {
      color: #DADADA;
      font-size: 13px;
    }
  }
`;

const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${searchIcon});
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


const AddressInput = ({ onClick }) =>  {
  const { register, watch, setError, formState: { errors } } = useFormContext({
    mode: 'onBlur',
  });

  return (
    <InputWrap>
      <Label>목적물 소재지</Label>
      <SearchInput onClick={onClick}>
        <input
          type='text'
          placeholder='도로명주소,건물명또는 지번입력'
          {...register('address', {
            required: '*필수입력사항입니다.'
          })}
        />
        <SearchIcon />
      </SearchInput>
      <Input
        type='text'
        placeholder='상세주소'
        name='detail_addr'
        require='*필수입력사항입니다.'
      />
      <ErrorMessage
        errors={errors}
        name='msme'
        render={({message}) => <ErrorText>{message}</ErrorText>}
      />
    </InputWrap>
    
  )
}
export default AddressInput