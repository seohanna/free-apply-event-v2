import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Input from './Input';
import searchIcon from '../../assets/icon/searchIcon.png';
import DaumModal from '../Modal/DaumModal';


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


const AddressInput = () =>  {
  const [isOpenPost, setIsOpenPost] = useState(false);
  const el = useRef();
  const { register, trigger, setValue, formState: { errors } } = useFormContext({
    mode: 'onBlur',
  });

  

  const onChangeOpenPost = () => {
    setIsOpenPost(true);
  };
  const closePostCode = () => {
    setIsOpenPost(false)
  }

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = ''; 
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr += (extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
        fullAddr += (extraAddr !== '' ? ` (${extraAddr})` : '');
    }
      
    console.log(fullAddr)
    console.log(data.zonecode)
    setValue('address', fullAddr);
    trigger('address');
    closePostCode();

    window.addEventListener("click", modalOutSideClick);
      return () => {
    window.removeEventListener("click", modalOutSideClick);
    }
  }

  const modalOutSideClick = (e) => {
    if (isOpenPost && (!el.current || !el.current.contains(e.target))) setIsOpenPost(false);
  }

  return (
    <>
    <InputWrap>
      <Label>목적물 소재지</Label>
      <SearchInput onClick={onChangeOpenPost}>
        <input
          type='text'
          placeholder='도로명주소,건물명또는 지번입력'
          readOnly
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
    
    {isOpenPost  ? (
      <DaumModal 
        onComplete={onCompletePost}
        onClick={modalOutSideClick}
        onClose={closePostCode}
      />
    ) : null}
    </>
  )
}
export default AddressInput