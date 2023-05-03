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
  padding: 30px 10px;

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
      display: inline-block;
      width: 3px;
      height: 3px;
      background-color: #999999;
      border-radius: 50%;
      margin: 5px;
    }
    .dashed-list {
      border: none;
      margin-top: 10px;
      > li {
        color: #999999;
        > span {
          color: #999999;
        }
      }
    }
    > ul {
      width: 100%;
      border: 1px solid #FAFAFA;
      margin-top: 5px;
      > li {
        display: flex;
        flex-direction: column;
        > p {
          display: block;
          text-align: center;
          line-height: 30px;
          width: 100%;
          color: #999999;
          > ul {
        
            > li {
              display: flex;
              border-top: 1px solid #FAFAFA;
              > p {
                width: 50%;
                color: #999999;
              }
            }
          }
        }
      }
      .td {
        display: flex;
        justify-content: space-between;
        > span {
          width: 50%;
          color: #999999;
          
          :first-child {
            border-right: 1px solid #FAFAFA;
          }
        }
      }
      .th {
        display: block;
        text-align: center;
        line-height: 30px;
        width: 100%;
        background-color: #CEDAEF;
        color: #666666;
        height: 30px;
        font-size: 14px;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 700;
      }
      .th.sub {
        width: 50%;
      }
    }
  }

  > ol {
    > li {
      font-weight: 400;
      > ul {
        padding: 5px 0 0 10px;
        > li {
          padding-bottom: 12px;
          > span {
            font-size: 14px;
            color: #999999;
            font-weight: 200;
          }
          > p {
            color: #999999;
            font-weight: 400;
            padding-bottom: 5px;
          }
          .title {
            text-align: start;
            font-size: 14px;
            ::before {
              content: '';
              display: inline-block;
              width: 3px;
              height: 3px;
              background-color: #999999;
              margin: 5px;
              border-radius: 50%;
            }
          }
          .comment {
            font-size: 10px;
          }
          table {
            border: 1px solid #FAFAFA;
            td, th {
              height: 30px;
              text-align: center;
              font-size: 14px;
              border-bottom: 1px solid #FAFAFA;
              vertical-align: middle;
            }
            th {
              background-color: #CEDAEF;
              font-family: 'Noto Sans KR', sans-serif;
              color: #666666;
              :first-child {
                border-right: 1px solid #FAFAFA;
              }
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
            <ul>
              <li>
                <p className="th">보험기간</p>
                <p>1년</p>
              </li>
              <li>
                <p className="th">납입방법</p>
                <p>무료</p>
              </li>
              <li>
                <p className="th">가입대상 </p>
                <p>법률상 소상공인의 상가 및 공장</p>
              </li>
            </ul>
          </li>
          <li>
            가입예시
            <ul>
              <li>
                <p className="th">소재지</p>
                <p>부산</p>
              </li>
              <li>
                <p className="th">물건</p>
                <p className="td">
                  <span>시설 및 집기</span>
                  <span>재고자산</span>
                </p>
              </li>
              <li>
                <p className="th">보험가입금액(원)</p>
                <p className="td">
                  <span>보험가입금액</span>
                  <span>3천만원</span>
                </p>
                <p className="td">
                  <span>자부담</span><span>20만원</span>
                </p>
                <p className="td"><span>보험가입</span><span>1천만원</span></p>
                <p className="td"><span>자부담</span><span>20만원</span></p>
              </li>
              <li>
                <p className="th">연간보험료(원)</p>
                <p>
                  <ul>
                    <li>
                      <p className="th sub">총액</p>
                      <p>92,200</p>
                    </li>
                    <li>
                      <p className="th sub">정부지원</p>
                      <p>74,000</p>
                    </li>
                    <li>
                      <p className="th sub">자부담</p>
                      <p>18,200</p>
                    </li>
                  </ul>
                  
                </p>
              </li>
            </ul>
            <ul className="dashed-list">
              <li>-2021. 01월 기준 1년 보험료 / 건물급수 1급 / 6등지 /일반건물</li>
              <li>-국가·지자체 지원 : 82% 기준<span>(지자체 별로 월별 지원비율 상이)</span></li>
              <li>-지역별(시군구) / 건물주고 및 급수에 따라 보험료가 달라집니다.</li>
              <li>-이 상품은 순수 보장성 상품으로 만기 시 환급금이 없습니다.</li>
            </ul>
          </li>
        </InfoTextBox>
        <InfoTitleBox>꼭 알아두셔야 할 사항</InfoTitleBox>
        <InfoTextBox>
          <ol>
            <li>
              1. 상품안내
              <ul>
                <li>
                  <p>1)자연재해 사고 보장</p>
                  <span>
                    8대 자연재해<br />
                    (태풍, 홍수, 호우, 해일, 강풍, 풍랑, 대설, 지진)<br />
                    사고 발생시 실손비용 보상
                  </span>
                </li>
                <li>
                  <p>2) 일부 보험료를 정부에서 지원</p>
                  <span>
                    국가 및 지방자치단체에서 보험료의 일부를 지원<br />
                    (최소 70% 지원. 지방자지단체별 추가 지원 다름)
                  </span>
                </li>
                <li>
                  <p>3) 순수 보장성 상품으로 만기시 환급금 없음</p>
                </li>
              </ul>
            </li>
            <li>
              2.보장내용
              <ul>
                <li>
                  <p>1)풍수해</p>
                  <p className="title">기상청 특보 발표 기준</p>
                  <table>
                    <tr>
                      <th colSpan={2}>구분</th>
                      <th>내용</th>
                    </tr>
                    <tr>
                      <th colSpan={2}>태풍</th>
                      <td>태풍으로 인하여 강풍,풍량,호우,폭풍해일 현상 등이 주의보 기준에 도달할 것으로 예상될 때</td>
                    </tr>
                    <tr>
                      <th colSpan={2}>호우</th>
                      <td>3시간 강우량 50mm이상 예상되거나 12시간 강우량이 110mm이상 예상될 때</td>
                    </tr>
                    <tr>
                      <th colSpan={2}>강풍</th>
                      <td>육상에서 12m/s 이상 또는 순산풍속 20m/s 이상이 될 때. 단, 산지는 풍속이 17m/ 이상 또는 순간풍속 25m/s 이상이 예상될 때</td>
                    </tr>
                    <tr>
                      <th rowSpan={2} style={{width: '35px'}}>해일</th>
                      <th style={{width: '35px'}}>폭풍해일</th>
                      <td>천문조, 폭풍, 저기압 등의 복합적인 영향으로 해수면이 상승하여 발효기준값 이상이 예상될 때. 다만, 발효기준값은 지역별로 별도 지정</td>
                    </tr>
                    <tr>
                      <th>지진해일</th>
                      <td>천문조, 폭풍, 저기압 등의 복합적인 영향으로 해수면이 상승하여 발효기준값 이상이 예상될 때. 다만, 발효기준값은 지역별로 별도 지정</td>
                    </tr>
                  </table>
                  <p className="comment">※ 향후, 기상청 특보 발표기준 등이 변경되면 풍수해보험의 보상하는 재해기준도 동일하게 적용</p>
                </li>
                <li>
                  <p className="title">보장내용</p>
                  <ul>
                    <li>
                      -일반물건
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </InfoTextBox>
      </Info>
    </BottomSheetWrap>
  )
}

export default BottmSheet;
