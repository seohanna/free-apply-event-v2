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



const KnowList = styled.ul`
  width: 700px;
`; 


const Guarantee = styled.table`
  border: 1px solid #dadada;
  border-collapse: collapse;
  width: 70%;
  > tr, th , td {
    border: 1px solid #dadada;
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
            <h2>알아 두실 사항</h2>
            <KnowList>
              <li>
                - 보장내용
                <Guarantee>
                  <tr>
                    <th>-시설/집기:</th>
                    <td>3000</td>
                    <td>만원</td>
                  </tr>
                  <tr>
                    <th>-재고자산:</th>
                    <td>1000</td>
                    <td>만원</td>
                  </tr>
                  <tr>
                    <th>-자기부담금:</th>
                    <td>20</td>
                    <td>만원</td>
                  </tr>
                </Guarantee>
              </li>
              <li>
                - 가입자는 법률상 소상공인으로 일반물건인 경우 건물 또는 시설(비품포함)을 총 1억원 한도로 가입 가능하며, 공장물건인 경우 건물 또는 기계를 1.5억 한도까지 가입가능 합니다.
              </li>
              <li>
                - 재고자산은 5천만원까지 가입이 가능합니다.
                <p>* 재고자산 : 원/부자재, 재공품, 반제품, 제품, 부산물, 상품과 저장품 및 이와 비슷한 것</p>
              </li>
              <li>- 소재지와 건물구조에 따라 보험료가 달라집니다.</li>
              <li>- 보험개시는 가입일로부터 익월부터 개시됩니다.</li>
              <li>- 지하소재물건 및 옥외간판(건물 벽체와 분리된 입간판)의 경우 가입이 제외됩니다.</li>
            </KnowList>
            
            <button onClick={knowChecking}>확인</button>
          </Modal>
        )}
      </>
    )}
  </Layout>
  )
}

export default Apply;