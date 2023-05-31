import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import Layout from "../components/Layout";
import yanolja from '../assets/img/yanloja.png';
import kbank from '../assets/img/kbank-ci.png';
import hy_db from '../assets/img/hyundai-db-ci.png';
import insurobo from '../assets/img/insurobo-ci.png';
import Input from "../components/Input/Input";
import CheckInput from "../components/Input/CheckInput";
import MsmeCheckList from "../components/MsmeCheckList";
import AddressInput from "../components/Input/AddressInput";
import SelectInput from "../components/Input/SelectInput";
import { business_owner, data } from "../data/business_type";
import Button from "../components/Button/BasicButton";
import RegiInput from "../components/Input/RegiInput";
import Modal from "../components/Modal";

const ApplyWrap = styled.div`
  padding-top: 20px;
  
`;

const Header = styled.div`
`;

const KBank = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
      font-weight: 700;
      color: #1A1A1A;
      line-height: 1;
      padding: 20px 0;
    }
  }
  > ul {
    > li {
      font-size: 14px;
      color: #1A1A1A;
      ::before {
        content: '';
        display: inline-block;
        width: 2px;
        height: 2px;
        background-color: #1A1A1A;
        border-radius: 50%;
        margin: 5px 5px 5px 0;
      }
    }
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  margin-top: 20px;
  > span {
    display: block;
  }
`;

const RegiGroup = styled.div`
  display: flex;
  align-items: flex-end;

  
`;

const Dash = styled.p`
  align-self: center;
  padding: 0 10px;
`;

const NonLabel = styled.div`
  > div {
    margin-bottom: 5px;
    > input {
      margin-bottom: 0;
    }
  }
`;

const ButtonGroup = styled.div`
  padding: 30px 0px;
  div:first-child {
    margin-bottom: 10px;
  }
`;


const Apply = () => {
  const [searchParams] = useSearchParams();
  const jehuCd = searchParams.get('jehuCd');
  const [showMsme, setShowMsme] = useState(false);
  const [checked, setChecked] = useState(false);
  const [jehuImage, setJehuImage] = useState('');
  const [knowPopup, setKnowPopup] = useState(false);
  
  const { watch, setValue, handleSubmit } = useFormContext({
    mode: 'all'
  });

  const onError = (error) => {
    console.log(watch())
    console.log(error);
  }

  const onSubmit = async(data) => {
    
    console.log(JSON.stringify(data), data)
  }

  const knowChecking = () => {
    
  }
  useEffect(() => {
    console.log(jehuCd)
    switch (jehuCd) {
      case 'yanolja_f' : 
        setJehuImage(yanolja);
        break;
      case 'lottecard_f' :
        setJehuImage(insurobo);
        break;
      default: 
    }
  }, [])
  const openMsmeCheckList = () => {
    setShowMsme(true)
    console.log(watch('msme'))
  }

  const msmeValidate = () => {
    if (watch('MsmeCheck1') === 'yes' && watch('MsmeCheck2') === 'yes' && watch('MsmeCheck3') === 'yes') {
      setChecked(true);
      setValue('msme', true);
    } else {
      setChecked(false);
      setValue('msme', false);
    }
    setShowMsme(false); 
  }
    return (
      <Layout apply>
        {showMsme ? (
          <MsmeCheckList 
            onClose={() => {setShowMsme(false)}}
            onClick={msmeValidate}
          />
        ) : (
        <>
          <Header>
            {jehuCd === 'kbank_f' ? (
              <>
                <KBank>
                  <img src={kbank} alt="kbank X insurobo"/>
                  <div>
                    <p>풍수해보험<br />무료가입 신청서</p>
                    <img src={hy_db} alt="현대해상 X DB손해보험"/>
                  </div>
                  <ul>
                    <li>본 신청서는 케이뱅크 개인사업자 전용 풍수해보험 무료가입을 위한 신청서입니다.</li>
                    <li>신청서 작성을 완료하시면 해당 보험사와의 보험계약절차가 진행됩니다.</li>
                    <li>가입 신청 후 익월부터 보험이 개시됩니다.</li>
                  </ul>
                </KBank>
                <Title>
                  풍수해보험VI 무료가입신청서
                </Title>
              </>
            ) : (
            <>
              <Logo style={{backgroundImage: `url(${jehuImage})`}} /> 
              <Title>
                <span>소상공인</span>
                풍수해보험 무료가입신청서
              </Title>
            </>
          )}
        </Header>
        <ApplyWrap>
          <Input 
            label='이름'
            name='polholder' 
            placeholder='이름' 
            type='text'
            require='*필수입력사항입니다.'
          />
          <RegiInput />
          <Input 
            label='휴대폰폰번호'
            name='mobile' 
            placeholder='본인명의 휴대폰번호 (-없이)' 
            type='text'
            require='*필수입력사항입니다.'
            maxLength={11}
          />
          <CheckInput
            label='법률상 소상공인'
            placeholder='소상공인여부 체크'
            onClick={openMsmeCheckList}
            checked={checked}
          />
          <AddressInput />
          <Input
            type='text'
            placeholder='상세주소'
            name='detail_addr'
            require='*필수입력사항입니다.'
          />
          <SelectInput
            label='가입업종'
            name='business_type'
            options={data} 
          />
          <NonLabel>
            <Input 
              name='business_number' 
              placeholder='사업자등록번호' 
              type='tel'
              require='*필수입력사항입니다.'
            />
            <Input 
              name='business_name' 
              placeholder='상호명' 
              type='text'
              require='*필수입력사항입니다.'
            />
          </NonLabel>
          <SelectInput
            name='business_owner'
            options={business_owner} 
          />
          <ButtonGroup>
            <Button onClick={() => setKnowPopup(true)}>알아두실 사항 확인하기</Button>
            <Button onClick={handleSubmit(onSubmit, onError)}>가입신청</Button>
          </ButtonGroup>         
        </ApplyWrap>
        {knowPopup && (
          <Modal onClick={() => setKnowPopup(false)}>
            <h2>알아두실사항</h2>
            <button onClick={knowChecking}>확인</button>
          </Modal>
        )}
      </>
    )}
  </Layout>
  )
}

export default Apply