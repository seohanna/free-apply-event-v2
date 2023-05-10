import React, { useState } from "react";
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

const Apply = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const jehuCd = searchParams.get('jehuCd');
  const [showMsme, setShowMsme] = useState(false);
  const [checked, setChecked] = useState(false);
  const { watch, setValue } = useFormContext({
    mode: 'all'
  });

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
              <Logo
                style={{
                  backgroundImage: `url(${jehuCd === 'lottecard_f' ? insurobo : 'yanolja_f' ? yanolja : ''})`
                }}
              /> 
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
          <RegiGroup>
            <Input 
              label='주민등록번호'
              name='regi_birth_front' 
              placeholder='주민번호앞자리' 
              type='tel'
              require='*필수입력사항입니다.'
              maxLength={6}
            />
            <Dash>-</Dash>
            <Input 
              name='regi_birth_back' 
              placeholder='● ● ● ● ● ●' 
              type="password"
              require='*필수입력사항입니다.'
              maxLength={7}
            />
          </RegiGroup>
          <Input 
            label='휴대폰폰번호'
            name='mobile' 
            placeholder='휴대폰번호' 
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
          <SelectInput
            label='가입업종'
            name='business_type'
            options={data} 
          />
          <NonLabel>
            <Input 
              name='business_number' 
              placeholder='사업자등록번호' 
              type='number'
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
        </ApplyWrap>
      </>
    )}
  </Layout>
  )
}

export default Apply