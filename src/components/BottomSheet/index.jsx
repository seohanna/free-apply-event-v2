import React from "react";
import styled from "styled-components";
import Button from "../Button/BasicButton";

const BottomSheetWrap = styled.div`
  background-color: #FFFFFF;
  border-radius: 30px 30px 0 0;
  width: 375px;
  margin: 0 auto;
  transform: translateY(-39px);
  padding: 57px 28px;
  
`;

const Title = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #E2E2E2;
  margin-bottom: 30px;

  > h2 {
    font-weight: 300;
    font-size: 16px;
  }
  > h3 {
    font-weight: 600;
    font-size: 18px;
  }

`;

const TextBox = styled.div`
  padding-bottom: 28px;
  
  > h2 {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    margin-bottom: 4px;
  }
  > p {
    font-size: 14px;
  }

  > div {
    display: flex;
    margin-bottom: 30px;
    ul {
      > li {
        font-size: 14px;
      }
      :first-child {
        margin-right: 20px;
      }
      :last-child {
        > li {
          text-align: end;
        }
      }
    }
  }
  
`;

const Info = styled.div`
  margin-top: 30px;
  border-top: 1px solid #E2E2E2;
`;

const InfoTitleBox = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #222222;
  padding: 4px 12px;
  background-color: #ADC9F9;
  display: inline-block;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-top: 40px;
`;

const InfoTextBox = styled.ul`
  border-radius: 8px;
  border: 1px solid #E2E2E2;
  padding: 30px 20px;
  
  > li {
    color: #999999;
    font-size: 14px;
    position: relative;
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0;
    }
    ::before {
      content: '';
      display: block;
      width: 3px;
      height: 3px;
      background-color: #999999;
      border-radius: 50%;
      position: absolute;
      left: -10px;
      top: 10px;
    }
    > ul {
      > li {
        color: #999999;
        
      }
    }
    > table {
      width: 100%;
      border: 1px solid #FAFAFA;
      margin-top: 5px;
      > tr {
        display: flex;
        flex-direction: column;
        > th {
          display: block;
          text-align: center;
          line-height: 30px;
          width: 100%;
          background-color: #CEDAEF;
          color: #666666;
          height: 30px;
          font-size: 14px;
          font-family: 'Noto Sans KR', sans-serif;
        }
        > td {
          display: block;
          text-align: center;
          line-height: 30px;
          width: 100%;
          color: #999999;
          height: 30px;
          > span {
            display: inline-block;
            width: 50%;
            border-bottom: 1px solid #FAFAFA;
            :first-child {
              border-right: 1px solid #FAFAFA;
            }
          }
        }
      }
    }
  }
`;

const BottmSheet = () => {
  return (
    <BottomSheetWrap>
      <Title>
        <h2>소상공인 전용</h2>
        <h3>풍수해보험 무료가입 EVENT!</h3>
      </Title>
      <TextBox>
        <h2>가입대상</h2>
        <p>소상공인이면 누구나</p>
      </TextBox>
      <TextBox>
        <h2>가입방법</h2>
        <p>① “무료가입” 버튼 클릭</p>
        <p>② 무려가입신청서 작석 후 “가입신청” 누르면 끝</p>
      </TextBox>
      <TextBox>
        <h2>보장내용</h2>
        <div>
          <ul>
            <li>시설/집기</li>
            <li>재고자산</li>
            <li>자기부담금</li>
          </ul>
          <ul>
            <li>3,000만원</li>
            <li>1,000만원</li>
            <li>20만원</li>
          </ul>
        </div>
      </TextBox>
      <Button>무료 가입하기</Button>
      <Info>
        <InfoTitleBox>이벤트 유의사항</InfoTitleBox>
        <InfoTextBox>
          <li>
            풍수해보험이란?
            <ul>
              <li>국가 및 지자체에서 보험료 일부 지원하는 보험으로 행정안전부가 관장하고 민영보험사가 판매하는 정책보험으로 지진, 태풍, 홍수, 호우, 강풍 등으로 인한 사고발생 시 실손비용을 보장하는 보험</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>본 상품의 보험료는 이벤트 주최사인 인슈로보가 부담합니다.</li>
            </ul>
          </li>
        </InfoTextBox>
        <InfoTitleBox>가입시 유의사항</InfoTitleBox>
        <InfoTextBox>
          <li>일반금융소비자는 금융상품판매업자로부터 충분한 설명을 받을 권리가 있으며 그 설명을 이해하신 후에 가입하시기 바랍니다.</li>
          <li>이 자료는 요약된 것이므로 가입 전 해당상품의 약관 및 상품설명서를 반드시 확인하세요</li>
          <li>본 보험은 비씨카드 회원을 대상으로 현대해상화재보험에서 보장하는 “풍수해보험VI” 입니다.</li>
          <li>보험개시는 가입일로부터 익월부터 개시됩니다.</li>
          <li>가입대상이 아닌 경우 보험가입이 거절되거나 해지 시 보험계약은 취소될 수 있습니다.</li>
          <li>해지 또는 취소 시에도 환급보험료는 발생하지 않습니다.</li>
          <li>
            가입안내
            <table>
              <tr>
                <th>보험기간</th>
                <td>1년</td>
              </tr>
              <tr>
                <th>납입방법</th>
                <td>무료</td>
              </tr>
              <tr>
                <th>가입대상 </th>
                <td>법률상 소상공인의 상가 및 공장</td>
              </tr>
            </table>
          </li>
          <li>
            가입예시
            <table>
              <tr>
                <th>소재지</th>
                <td>부산</td>
              </tr>
              <tr>
                <th>물건</th>
                <td>
                  <span>시설 및 집기</span>
                  <span>재고자산</span>
                </td>
              </tr>
              <tr>
                <th>보험가입금액(원)</th>
                <td>
                  <span>보험가입금액</span>
                  <span>3천만원</span>
                </td>
                <td>
                  <span>자부담</span><span>20만원</span>
                </td>
                <td><span>보험가입</span><span>1천만원</span></td>
                <td><span>자부담</span><span>20만원</span></td>
              </tr>
              <tr>
                <th>연간보험료(원)</th>
                <td>
                  <tr>
                    <th>총액</th>
                  </tr>
                </td>
                
    
              </tr>
            </table>
          </li>
        </InfoTextBox>
      </Info>
    </BottomSheetWrap>
  )
}

export default BottmSheet;
