import React, { useState } from "react";
import styled from "styled-components";
import { useFormContext } from 'react-hook-form';
import closeIcon from '../../assets/icon/closeIcon.png';
import checkIcon from '../../assets/icon/checkListIcon.png';
import salseIcon from '../../assets/icon/salesIcon.png';
import Button from "../Button/BasicButton";

const checkData = [
  {
    id: 1,
    title: '소상공인의 상시 근로자 수를 광업,제조업,건설업,운수업은 10명 미만,그 밖의 업종은 5명 미만으로 제한합니다.',
    point_title: '피보험자의 상시 근로자수가 기준미만입니까?',
    name: 'MsmeCheck1',
    sales: ''
  },
  {
    id: 2,
    title: '',
    point_title: '피보험자의 평균 매출액이 기준 미만입니까?',
    name: 'MsmeCheck2',
    sales: '주요 업종별 연평균 매출액'
  },
  {
    id: 3,
    title: '계약자가 임차인인 경우 임대인 소유의 물건(건물)을 대신하여 가입하는 계약(제3자를 위한 계약)은 불가하며, 이 경우 사고발생시 임대인의 소상공인 해당여부를 불문하고 보험금 지급이 제한됩니다.',
    point_title: '동 내용을 정확히 확인하셨습니까?',
    name: 'MsmeCheck3',
    sales: ''
  }
]
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  > button {
    width: 30px;
    height: 30px;
    background-position: center;
    background-image: url(${closeIcon});
    align-self: flex-end;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  padding: 50px 0;
`;

const InfoBox = styled.div`
  border: 1px solid #DADADA;
  font-size: 15px;
  padding: 10px;
  margin-bottom: 20px;
`;

const CheckList = styled.ul`
`;

const RadioGrop = styled.li`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  
  > h2 {
    width: 100%;
    font-size: 13px;
    font-weight: 400;
    color: #222222;
    ::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 15px;
      background-image: url(${checkIcon});
      background-repeat: no-repeat;
    }
    > span {
      font-weight: 700;
      text-decoration: underline;
      color: #222222;
    }
  }
`;
const RadioBox = styled.div`
  position: relative;
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  > input {
    position: absolute;
    left: -1000%;
  }
  > label {
    display: block;
    text-align: center;
    width: 100%;
    border: 1px solid #176FFF;
    font-size: 14px;
    padding: 5px 0;
    border-radius: 5px;
    font-weight: 400;
  }
  > input:checked + label {
    background-color: #176FFF;
    color: #FFFFFF;
  }
`;

const SalesButton = styled.button`
  width: 100%;
  padding: 20px 0;
  > span {
    display: inline-flex;
    align-items: center;
    padding: 5px 50px;
    font-size: 15px;
    border-radius: 10px;
    color: #FFFFFF;
    font-weight: 400;
    background-color: #176FFF;

    ::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 5px;
      background-image: url(${salseIcon});
    }
  }
`;

const SalesInfo = styled.div`
  padding-bottom: 20px;
  table, th, td {
    border-collapse: collapse;
    border: 1px solid #DADADA;
  }
  > table {
    width: 100%;
    
    th, td {
      font-size: 13px;
      vertical-align: middle;
      text-align: center;
      
    }
    th {
      background-color: #CEDAEF;
      color: #666666;
      padding: 10px 0;
    }
  }
`;

const MsmeCheckList = ({onClick, onClose}) => {
  const [showInfo, setShowInfo] = useState(false);
  const openSalesInfo = () => {
    setShowInfo(!showInfo)
  }
  const { register, formState: { errors } } = useFormContext({
    defaultChecked: {
      MsmeCheck1: 'yes',
      MsmeCheck2: 'yes',
      MsmeCheck3: 'yes',
    },
    mode: 'onChange'
  });
  return (
    <Wrap>
      {showInfo ? (
        <>
          <button onClick={openSalesInfo} />
          <SalesInfo>
            <Title>주요 업종별 연평균 매출액</Title>
            <table>
              <thead>
                <tr>
                  <th>주요업종</th>
                  <th>규모기준</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>식료품제조업</td>
                  <td rowSpan={17}>평균매출액 등 120억원 이하</td>
                </tr>
                <tr>
                  <td>음료 제조업</td>
                </tr>
                <tr>
                  <td>의복, 의복액세서리 및 모피제품 제조업</td>
                </tr>
                <tr>
                  <td>가죽, 가방 및 신발 제조업</td>
                </tr>
                <tr>
                  <td>코크스, 연탄 및 석유 정제품 제조업</td>
                </tr>
                <tr>
                  <td>화학물질 및 화학제품 제조업(의약품 제조업은 제외)</td>
                </tr>
                <tr>
                  <td>의료용 물질 및 의약품 제조업</td>
                </tr>
                <tr>
                  <td>비금속 광물 제품 제조업</td>
                </tr>
                <tr>
                  <td>1차 금속 제조업</td>
                </tr>
                <tr>
                  <td>금속가공제품 제조업(기계 및 가구제조업은 제외)</td>
                </tr>
                <tr>
                  <td>전자부품, 컴퓨터, 영상, 음향 및 통신장비 제조업</td>
                </tr>
                <tr>
                  <td>전기장비 제조업</td>
                </tr>
                <tr>
                  <td>그 밖의 기계 및 장비 제조업</td>
                </tr>
                <tr>
                  <td>자동차 및 트레일러 제조업</td>
                </tr>
                <tr>
                  <td>가구 제조업</td>
                </tr>
                <tr>
                  <td>전기, 가스, 증기 및 공기조절 공급업</td>
                </tr>
                <tr>
                  <td>수도업</td>
                </tr>
                <tr>
                  <td>농업, 임업 및 어업</td>
                  <td rowSpan={14}>80억원 이하</td>
                </tr>
                <tr>
                  <td>광업</td>
                </tr>
                <tr>
                  <td>담배 제조업</td>
                </tr>
                <tr>
                  <td>석유제품 제조업(의복 제조업은 제외)</td>
                </tr>
                <tr>
                  <td>목재 및 나무제품 제조업(가구 제조업은 제외)</td>
                </tr>
                <tr>
                  <td>펄프, 종이 및 종이제품 제조업</td>
                </tr>
                <tr>
                  <td>인쇄 및 기록 매체 복제업</td>
                </tr>
                <tr>
                  <td>고무제품 및 플라스틱제품 제조업</td>
                </tr>
                <tr>
                  <td>의료, 정밀, 광학기기 및 시계 제조업</td>
                </tr>
                <tr>
                  <td>그 밖의 운송장비 제조업</td>
                </tr>
                <tr>
                  <td>그 밖의 제품 제조업</td>
                </tr>
                <tr>
                  <td>건설업</td>
                </tr>
                <tr>
                  <td>운수 및 창고업</td>
                </tr>
                <tr>
                  <td>금융 및 보험업</td>
                </tr>
                <tr>
                  <td>도매 및 소매업</td>
                  <td rowSpan={2}>50억원 이하</td>
                </tr>
                <tr>
                  <td>정보통신업</td>
                </tr>
                <tr>
                  <td>수도, 하수 및 폐기물 처리, 원료 재생업</td>
                  <td rowSpan={5}>30억원 이하</td>
                </tr>
                <tr>
                  <td>부동산업</td>
                </tr>
                <tr>
                  <td>전문·과학 및 기술 서비스업</td>
                </tr>
                  <tr>
                  <td>사업시설관리, 사업지원 및 임대 서비스업</td>
                </tr>
                <tr>
                  <td>예술, 스포츠 및 여가 관련 서비스업</td>
                </tr>
                <tr>
                  <td>산업용 기계 및 장비 수리업</td>
                  <td rowSpan={5}>10억원 이하</td>
                </tr>
                <tr>
                  <td>숙박 및 음식점업</td>
                </tr>
                <tr>
                  <td>교육 서비스업</td>
                </tr>
                <tr>
                  <td>보험업 및 사회복지 서비스업</td>
                </tr>
                <tr>
                  <td>수리(修理) 및 기타 개인 서비스업</td>
                </tr>
              </tbody>
            </table>
          </SalesInfo>
          <Button onClick={openSalesInfo}>확인</Button>
        </>
      ) : (
        <>
          <button onClick={onClose} />
          <Title>소상공인 확인 체크리스트</Title>
          <InfoBox>
            <p>피보험자에 관한 다음 사항은 회사가 보험계약의 청약을 심사,확인,인수 및 사고처리시 필요한 자료이므로 보험계약자 및 피보험자는 아래 질문에 대해 사실대로 체크해주시기 바랍니다.</p>
          </InfoBox>
          <CheckList>
            {checkData.map((dt) => (
              <RadioGrop key={dt.id}>
                <h2>{dt.title}<span>{dt.point_title}</span></h2>
                {dt.sales && 
                  (<SalesButton onClick={openSalesInfo}>
                    <span>{dt.sales}</span>
                  </SalesButton>)
                }
                <RadioBox>
                  <input type='radio' id={`r${dt.id}-no`} value='no' name={dt.name} {...register(dt.name)} onChange={(e) => e.target.value} />
                  <label for={`r${dt.id}-no`}>
                    아니요
                  </label>
                </RadioBox>
                <RadioBox>
                  <input type='radio' id={`r${dt.id}-yes`} value='yes' name={dt.name} {...register(dt.name)} defaultChecked onChange={(e) => e.target.value} />
                  <label for={`r${dt.id}-yes`}>
                    예
                  </label>
                </RadioBox>
              </RadioGrop>
            ))}
            <InfoBox>
              <p>
                유의사항<br />
                소상공인 확인 체크리스트는 청약서의 일부를 구성하여 약관상 주요한 사항에 해당되며 만약 아래 질문들에 대하여 사실대로 알리지 않거나 사실과 다르게 알린 경우에는 보험가입이 거절될 수 있으며 이미 보험사고가 발생하였더라도 보험금 지급을 거절하는 등 보장이 제한될 수 있습니다.
              </p>
            </InfoBox>
            <Button onClick={onClick}>확인</Button>
          </CheckList>
        </>
      )}
    </Wrap>
      
  )
}

export default MsmeCheckList