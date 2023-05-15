import React from "react";
import styled, { css } from "styled-components";
import Button from "../Button/BasicButton";

const BottomSheetWrap = styled.div`
  background-color: #FFFFFF;
  border-radius: 30px 30px 0 0;
  width: 375px;
  margin: 0 auto;
  transform: translateY(-39px);
  padding: 57px 28px 30px;
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
  > span {
    font-size: 14px;
    color: #999999;
    font-weight: 400;
    padding-top: 15px;
    display: block;
  }
  
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

  ${props => props.ol_list && css`
    height: 357px;
    overflow: scroll;
    > li {
      font-weight: 400;
      ::before {
        content: none;
      }
      > ul {
        > li {
          > span {
            font-size: 14px;
            color: #999999;
            font-weight: 200;
          }
          > p {
            color: #999999;
            font-weight: 400;
            line-height: 1;
            padding-top: 10px;
            text-align: start;
          }
          .title {
            text-align: start;
            font-size: 14px;
            line-height: 1.2;
            ::before {
              content: '';
              display: inline-block;
              width: 3px;
              height: 3px;
              background-color: #999999;
              margin: 5px;
              border-radius: 50%;
            }
            > span {
              color: #999999;
              display: block;
              font-size: 10px;
              margin-left: 10px;
            }
          }
          .sub-list {
            padding: 0px 10px 10px;
  
            > li {
              line-height: 1;
              > p {
                font-size: 13px;
                color: #999999;
                line-height: 1;
              }
              > span {
                color: #999999;
                display: block;
                font-size: 10px;
                margin-left: 10px;
              }
            }
          }
          .comment {
            font-size: 10px;
            line-height: 1;
            margin-bottom: 10px;
            padding-top: 0;
          }

          table {
            border: 1px solid #FAFAFA;
            margin-bottom: 5px;
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
  `}
    
  
`;

const BottmSheet = ({ jehuCd }) => {
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
      <Button link={`/apply?jehuCd=${jehuCd ? jehuCd : ''}`}>무료 가입하기</Button>
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
        <InfoTextBox ol_list>
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
                  <ul className="sub-list">
                    <li>
                      -일반물건
                      <p>보험가입금액 한도내 실손보상<br />
                      (건물/시설은 합계 1억원 한도, 재고자산은 5천만원 한도) 
                      </p>
                    </li>
                    <li>
                      -공장물건
                      <p>보험가입금액 한도내 실손보상<br />
                      (건물/기계는 합계 1.5억원 한도, 재고자산은 5천만원 한도)
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="title">지급기준</p>
                  <ul className="sub-list">
                    <li>태풍, 호우, 홍수, 강풍, 풍랑, 해일, 지진, 대설로 보험 목적물에 손해가 발생한 경우 손해를 보상(자기부담금액 제외)</li>
                  </ul>
                </li>
                <li>
                  <p>2) 손해방지비용</p>
                  <ul>
                    <li><p className="title">보험가입금액과 별개로 추가지급</p></li>
                    <li><p className="title">손해의 방지 또는 경감을 위해 지출한 필요 또는 유익한 비용</p></li>
                  </ul>
                </li>
                <li>
                  <p>3) 잔존물보존비용</p>
                  <ul>
                    <li><p className="title">보험가입금액과 별개로 추가지급</p></li>
                    <li><p className="title">회사에 잔존물을 넘기는 경우 잔존물을 보전하기 위하여 지출한 필요 또는 유익한 비용</p></li>
                  </ul>
                </li>
                <li>
                  <p>4) 잔존물제거비용</p>
                  <ul>
                    <li><p className="title">풍수해로 인한 보험금과 잔존물 제거비용의 합계액은 보험증권에 기재된 보험가입금액한도. 단, 잔존물 제거비용은 손해액의 10%를 초과할 수 없음.</p></li>
                    <li>
                      <p className="title">
                        풍수해로 잔존물제거비용이 발생한 경우 보상
                        <span>㈜ 잔존물 제거비용 : 잔존물의 해체비용, 청소비용, 상차비용</span>
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
              <p>5) 대위권 보전비용</p>
              <ul>
                <li><p className="title">보험가입금액과 별개로 추가지급</p></li>
                <li>
                  <p className="title">
                  제3자로부터 손해배상을 받을 권리가 있는 경우 권리를 지키거나 행사하기 위해 지출한 필용 또는 유익한 비용
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>6) 기타협력비용</p>
              <ul>
                <li><p className="title">보험가입금액과 별개로 추가지급</p></li>
                <li>
                  <p className="title">
                  회사의 요구를 따르기 위하여 지출한 필요 또는 유익한 비용
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          3.유의사항(보험가입시 유의사항)
          <ul>
            <li>
              <p>1) 보험금 지급제한 사항</p>
              <p className="title">아래와 같은 손해는 보상하지 않음.</p>
              <ul className="sub-list">
                <li>- 계약자, 피보험자(보험대상자, 법인인 경우에는 그 이사 또는 법인의 업무를 집행하는 그 밖의 기관) 또는 이들의 법정대리인의 고의 또는 중대한 과실</li>
                <li>- 풍수해가 발생했을 때 생긴 도난, 또는 분실로 생긴 손해</li>
                <li>- 풍수해로 생긴 화재, 폭발 손해(단, 지진으로 인해 발생한 화재손해는 보상)</li>
                <li>- 한파, 서리, 얼음, 우박으로 인한 손해</li>
                <li>- 축대, 제방 등의 붕괴로 인한 손해(단, 붕괴의 직접원인이 이 약관에 의하여 보상되는 사고일 때에는 보상)</li>
                <li>- 침식활동 및 지하수로 인한 손해</li>
                <li>- 보험계약일 현재 이미 진행 중인 태풍, 호우, 홍수, 강풍, 풍랑, 해일, 대설, 지진으로 인한 손해</li>
              </ul>
              [이미 진행 중]<br />          
              <ul className="sub-list">
                <li style={{ fontWeight: '700', color: '#999999' }}>→ 보험기간 중에 보험의 목적이 위치하고 있는 지역에 기상청(홍수통제소 포함) 기상특보(주의보, 경보) 또는 에비특보 발령시점을 기준으로 합니다.</li>
                <li>- 온실 시설의 단순 피복재(비닐 등) 파열(단, 단순비닐파손특약에 가입한 경우는 제외)</li>
                <li>- 풍수해가 발생했을 때 생긴 도난, 또는 분실로 생긴 손해</li>
                <li>- 전쟁, 내란, 폭동, 소요, 노동쟁의 등으로 인한 손해</li>
              </ul>
            </li>
            <li>
              <p>2) 보험모집질서위반</p>
              <p className="title">보험계약 청약과 관련 특별이익을 제공하는 등 보험모집질서 위반행위는 보험업법에 의해 처벌 받을 수 있습니다.</p>
              <p className="title">금육감독원 위반행위 신고 센터</p>
              <ul className="sub-list">
                <li>- 전화 : 국번없이 1332</li>
                <li>- 휴대전화 : 02-1332</li>
                <li>- 풍수해가 발생했을 때 생긴 도난, 또는 분실로 생긴 손해</li>
                <li>- 인터넷 : www.fss.or.kr 내 “보험모집질서위반신고”</li>
              </ul>
              <p className="title">손해보험협회</p>
              <ul className="sub-list">
                <li>- 전화 : 02-3702-8585</li>
                <li>- 팩스 : 02-3702-8691</li>
                <li>- 인터넷 : www.knia.or.kr 내 “모집질서문란 신고센터＂</li>
              </ul>
            </li>
            <li>
              <p>3) 보험료 환급</p>
              <p className="title">
                순수 보장성 상품으로 만기 시 환급금이 없습니다.
                <span>※ 기타 자세한 사항은 약관의 내용을 따릅니다.</span>
              </p>
            </li>
            <li>
              <p>4) 보험계약상의 알릴 의무</p>
              <p className="title">계약 전 알릴 의무
                <ul className="sub-list">
                  <li>- 계약을 맺을 때에 계약자, 피보험자 또는 이들의 대리인은 계약 청약서(질문서를 포함. 이하 동일)의 기재사항에 관하여 아는 사실을 빠짐없이 그대로 회사에 알려야 합니다. 인터넷 계약의 경우 입력사항을 정확하게 기재해 주셔야 합니다.</li>
                </ul>
              </p>
              <p className="title">계약 후 알릴 의무</p>
              <ul className="sub-list">
                <li>- 이 계약에서 담보하는 위험과 동일한 위험에 대해서 다른 회사와 다른 계약을 맺을 때</li>
                <li>- 보험의 목적물을 양도할 때</li>
                <li>- 보험의 목적 또는 보험의 목적을 수용하는 건물의 구조를 변경, 개축, 증축하거나 계속하여 15일 이상 수선하는 경우</li>
                <li>- 보험의 목적 또는 보험의 목적을 수용하는 건물의 용도를 변경함으로써 위험이 변경하는 경우</li>
                <li>- 보험의 목적인 건물 또는 보험의 목적이 들어있는 건물을 계속하여 30일 이상 비워 두거나 휴업하는 경우</li>
                <li>- 위 이외의 위험이 뚜렷이 증가할 경우</li>
                <li>- 알릴 의무를 위반하신 경우 계약을 해지하거나 보험금 지급이 제한될 수 있습니다.<br /><span>※ 기타 자세한 사항은 약관의 내용을 따릅니다.</span></li>
              </ul>
            </li>
            <li>
              <p>5) 3대 기본 지키기 및 계약자 의무사항</p>
              <p className="title">자필서명 (인터넷 계약은 공동인증을 통해 대체될 수 있음)</p>
              <p className="title">청약서 부본전달 (인터넷 계약은 예외)</p>
              <p className="title">
                보험약관전달 (인터넷 계약은 이메일 등 전자적 수단에 의해 전달될 수 있음)
                <span>※ 3대 기본 지키기 미이행시는 계약성립일로부터 3개월 이내에 계약을 취소할 수 있습니다.</span>
              </p>
            </li>
            <li>
              <p>6) 청약철회 청구제도</p>
              <p className="title">보험계약자는 보험증권을 받은 날부터 15일 이내에 그 청약을 철회할 수 있으며, 이 경우 3일 이내에 보험료를 돌려드립니다. 다만, 진단계약, 보험기간이 1년 미만인 계약 또는 전문보험계약자가 체결한 계약 및 청약을 한 날로부터 30일을 초과하는 경우에는 청약을 철회할 수 없습니다. 청약철회 기간 내에 청약철회를 하실 경우 납입한 보험료 전액을 돌려받으실 수 있습니다.</p>
              <p className="title">
                전문보험계약자<br />
                보험계약에 관한 전문성, 자산규모 등에 비추어 보험계약의 내용을 이해하고 이행할 능력이 있는 자로서 보험업법 제2조(정의), 보험업법시행령 제6조의 2(전문보험계약자의 범위 등) 도는 보험업감독규정 제1-4조의 2(전문보험계약자의 범위)에서 정한 국가, 한국은행, 대통령령으로 정하는 금융기관, 주권상장법인, 지방자치단체, 단체보험계약자 등의 전문보험계약자를 말합니다.
              </p>
            </li>
            <li>
              <p>7) 상담 및 보험분쟁조정안내</p>
              <p className="title">보험에 대한 문의사항 및 불만사항이 있을 경우 현대해상(전화 1588-5656 / 인터넷 hi.co.kr &gt; 전자민원접수) 또는 인슈로보(전화 070-4126-3333 / 카카오톡채널 “인슈로보”)로 연락주시면 신속하게 처리해 드립니다. 또한 보험에 관한 분쟁이 있을 때에는 금융감독원 및 한국소비자원에 분쟁조정을 신청하실 수 있습니다.</p>
              <p className="title">금융감독원</p>
              <ul className="sub-list">
                <li>- 전화 : 1332</li>
                <li>- 홈페이지 : www.fss.or.kr</li>
                <li>- e-금융센터 : www.fcsc.kr</li>
              </ul>
              <p className="title">한국소비자원</p>
              <ul className="sub-list">
                <li>- 전화 : 1372</li>
                <li>- 홈페이지 : www.kca.go.kr</li>
              </ul>
            </li>
            <li>
              <p>8) 계약자배당에 관한 사항</p>
              <p className="title">무배당 상품으로 배당을 하지 않습니다.</p>
            </li>
            <li>
              <p>9) 보험계약체결</p>
              <p className="title">보험계약 체결 전에 상품설명서 및 약관을 읽어 보시기 바랍니다.</p>
              <p className="title">기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절, 보험료가 안상 또는 보장내용이 달라질 수 있습니다.</p>
            </li>
            <li>
              <p>10) 예금자 보호안내</p>
              <p className="title">이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호 한도는 본 보험회사에 귀하의 모든 예금보호 대상 금융상품의 해약환급금(또는 만기시 보험금이나 사고 보험금)에 기타지급금을 합하여 1인당 “최고 5천만원＂이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다. 또한, 보험계약자 및 보험료 납부자가 법인이면 보호되지 않습니다.</p>
              <p className="title">
                기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절, 보험료가 인상 또는 보장내용이 달라질 수 있습니다.
                <span>※ 위 내용은 예금자보호법 및 관련 법령의 개정에 따라 달라질 수 있으며, 자세한 내용은 예금보험공사(www.kdic.or.kr)로 문의 바랍니다.</span>
              </p>
            </li>
          </ul>
        </li>   
      </InfoTextBox>
      <span>소상공인 풍수해보험 문의 : 담당자 010-2312-9868</span>
    </Info>
  </BottomSheetWrap>
  )
}

export default BottmSheet;
