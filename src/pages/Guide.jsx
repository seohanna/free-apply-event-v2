import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import styled, { css } from "styled-components";
import windstorm from '../assets/img/windstorm.png';
import BottmSheet from "../components/BottomSheet";
import frip_banner from '../assets/img/frip-banner.png';

const Banner = styled.div`
  width: 375px;
  height: 310px;
  padding: 42px 0 25px;
  background: linear-gradient(to top, #5974FF 0%, #63BDFF 100%);
  display: flex;
  margin: 100px auto 0;
  justify-content: center;
  > div {
    width: 375px;
    position: relative;
    padding: 0 28px;
  }
  ${props => props.frip && css`
    background-image: url(${frip_banner});
    background-position: top;
    height: 398px;
    > div {
      display: none;
    }
  `}
`;

const TextGroup = styled.div`
  > p {
    font-size: 12px;
    color: #0C1F6F;
    font-weight: 700;
  }
  > h2 {
    color: #FFFFFF;
    font-family: 'Noto Sans KR', sans-serif;
    margin-top: 4px;
    font-size: 26px;
  }
`;

const ImageGroup = styled.div`
  background-image: url(${windstorm});
  width: 240px;
  height: 179px;
  position: absolute;
  right: 28px;
  top: 17px;
`;



const Guide = () => {
  const [jehuText, setJehuText] = useState({
    text1: {
      target: '소상공인이면 누구나'
    },
    text2: {
      target: ''
    }
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const jehuCd = searchParams.get('jehuCd');
  useEffect(() => {
    switch (jehuCd) {
      case 'bccard_f' :
        setJehuText((prevState) => ({
          ...prevState,
          text2: {
            ...prevState.text2,
            target: "비씨카드 회원을"
          }
        }))
        break;
      case 'frip_f' :
        setJehuText((prevState) => ({
          ...prevState,
          text1: {
            ...prevState.text1,
            target: "사업자등록증상 소재지가 서울/강원 지역인\n소상공인 호스트님",
          },
          text2: {
            ...prevState.text2,
            target: "프립 호스트를"
          }
        }))
        break;
      case 'yanolja_f' :
        setJehuText((prevState) => ({
          ...prevState,
          text2: {
            ...prevState.text2,
            target: "야놀자 회원을"
          }
        }))
        break;
      case 'kbank_f' :
        setJehuText((prevState) => ({
          ...prevState,
          text2: {
            ...prevState.text2,
            target: "케이뱅크 회원을"
          }
        }))
        break;
      case 'lottecard_f' : 
      setJehuText((prevState) => ({
        ...prevState,
        text2: {
          ...prevState.text2,
          target: "롯데카드 회원을"
        }
      }))
        break;
      default : 
    }
  }, [jehuCd]);
  return (
    <Layout>
      <Banner frip={jehuCd === 'frip_f' ? true : false}>
       <div>
          <TextGroup>
            <p>소상공인 안전지킴이</p>
            <h2>풍수해보험</h2>
          </TextGroup>
          <ImageGroup />
        </div>
      </Banner>
      <BottmSheet jehuCd={jehuCd} jehuText={jehuText} />
    </Layout>
  )
}

export default Guide