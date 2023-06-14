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
// import RegiInput from "../components/Input/RegiInput";
import Modal from "../components/Modal";
import AllCheckBox from "../components/Input/AllCheckBox";

const ApplyWrap = styled.div`
  padding-top: 20px;
  input[type='checkbox'] {
    position: absolute;
    left: -1000%;
    
  }

  .input-box {
    margin-bottom: 25px;
    > input {
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
    }
  }

  .label {
    display: block;
    width: 100%;
    color: #222222;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
  }

  .error-text {
    font-size: 13px;
    line-height: 13px;
    padding-top: 5px;
    color: ${(props) => props.theme.color.WARNING_MESSAGE};
  }
`;

const Header = styled.div`
`;

const RegiInput = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    width: 48%; 
    position: relative;
    ::after {
      content: '-';
      display: block;
      position: absolute;
      top: 5px;
      right: -5%;
    }
    :last-child::after {
      content: none;
    }
  }
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
  padding: 20px;
  width: 700px;

  > li {
    font-size: 14px;
    font-weight: 700;
    margin-top: 15px;
    > p {
      font-size: 12px;

    }
    > input {
      position: absolute;
      left: -1000%;
    }
    label {
      color: #FFFFFF;
      font-weight: 700;
    }
  } 
`; 


const Guarantee = styled.table`
  border: 1px solid #dadada;
  border-collapse: collapse;
  width: 70%;
  
  
  > tr, th, td {
    border: 1px solid #dadada;
    font-size: 12px;
  }
  th {
    font-weight: 300;
    font-family: 'Noto Sans KR', sans-serif;
  }
  td {
    text-align: end;
  }
`;

const MarketingPopupWrap = styled.div`
  padding: 20px;
  width: 768px;
  overflow-y: scroll;
`;

const Apply = () => {
  const [searchParams] = useSearchParams();
  const jehuCd = searchParams.get('jehuCd');
  const [showMsme, setShowMsme] = useState(false);
  const [checked, setChecked] = useState(false);
  const [jehuImage, setJehuImage] = useState('');
  const [knowPopup, setKnowPopup] = useState(false);
  const [marketingPopup, setMarketingPopup] = useState(false);
 
  const { watch, setValue, handleSubmit, register, formState: { errors } } = useFormContext({
    mode: 'all'
  });

  useEffect(() => {console.log(watch('know_check'))}, [knowPopup]);

  const onError = (error) => {
    console.log(watch())
    console.log(error);
  }

  const onSubmit = async(data) => {
    if (!watch('know_check')) {
      setKnowPopup(true);
    } else {
      setMarketingPopup(true);
    }
    console.log(JSON.stringify(data), data)
  }

  const onSubmit2 = async(data) => {
    console.log(watch())
    console.log(JSON.stringify(data), data)
  }

  const knowChecking = () => {

    setValue('know_check', true)
    setKnowPopup(false)
    
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
  const juminCheck = () => {
    const reg1 = watch("regi_birth_front"); 
    const reg2 = watch("regi_birth_back");

    if (reg1 === '') {  
      return false;
    } else {
      const totalJumin = reg1+reg2
      console.log('totalJumi', totalJumin)

      const arrNum1 = new Array();
      const arrNum2 = new Array();

      for (var i = 0; i < reg1.length; i++) {
        arrNum1[i] = reg1.charAt(i);
      }
      for (var i = 0; i < reg2.length; i++) {
        arrNum2[i] = reg2.charAt(i);
      }

      var tempSum = 0;
      for (var i = 0; i < reg1.length; i++) {
        tempSum += arrNum1[i] * (2 + i);
      }

      for (var i = 0; i < reg2.length - 1; i++) {
        if (i >= 2) {
          tempSum += arrNum2[i] * i;
        } else {
          tempSum += arrNum2[i] * (8 + i);
        }
      }

      if (arrNum2[0] == 1 ||
        arrNum2[0] == 2 ||
        arrNum2[0] == 3 ||
        arrNum2[0] == 4 ||
        arrNum2[0] == 0 ||
        arrNum2[0] == 9) {
        if ((11 - (tempSum % 11)) % 10 !== arrNum2[6]) {
          return false;
        } else {
          return true
        }
      }
    }
    
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
          <label className="label">주민등록번호</label>
          <RegiInput>
            <div className="input-box">
              <input 
                type='number' 
                name='regi_birth_front'
                placeholder="주민번호 앞자리"
                {...register('regi_birth_front', {
                  required: '*필수입력사항입니다.'
                })} 
              />
              <p className="error-text">{errors.regi_birth_front?.message}</p>
            </div>
            <div className="input-box">
              <input
                type='password'
                placeholder="주민번호 뒷자리"
                name='regi_birth_back'
                // {...register('regi_birth_back', {
                //   required: '*필수 입력 항목입니다.',
                //   validate: {
                //     regCheck: () => juminCheck() ? true : '잘못된 주민번호 입니다.'
                //   }
                // })}
              />
              <p className="error-text">{errors.regi_birth_back?.message}</p>
            </div>
          </RegiInput>
            
            
          <div className="input-box">
            <label className="label">휴대폰번호</label>
            <input
              type='phone'
              placeholder="휴대폰번호"
              {...register('mobile', {
                required: '*필수 입력 항목입니다.',
                pattern : {
                  value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                  message: '잘못된 전화번호 입니다.'
                }
              })}
            />
            <p className="error-text">{errors.mobile?.message}</p>
          </div>
          
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
            required='*필수선택사항입니다.'
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
            required='*필수선택사항입니다.'
          />
          <input type='checkbox' {...register('know_check')} />
          <ButtonGroup>
            <Button onClick={() => setKnowPopup(true)} disabled={watch('know_check') ? false : true}>알아두실 사항 확인하기</Button>
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
                    <th>-시설/집기 :</th>
                    <td>3000</td>
                    <td>만원</td>
                  </tr>
                  <tr>
                    <th>-재고자산 :</th>
                    <td>1000</td>
                    <td>만원</td>
                  </tr>
                  <tr>
                    <th>-자기부담금 :</th>
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
              <li>
                <Button onClick={knowChecking}>확인</Button>
              </li>
              
            </KnowList>
          </Modal>
        )}
        {marketingPopup && (
          <Modal onClick={() => setMarketingPopup(false)}>
            <MarketingPopupWrap>
              <AllCheckBox />
              <Button onClick={handleSubmit(onSubmit2, onError)}>가입신청</Button>
            </MarketingPopupWrap>
          </Modal>
        )}
      </>
    )}
  </Layout>
  )
}

export default Apply;