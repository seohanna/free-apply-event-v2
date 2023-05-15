import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import windstorm from '../assets/img/windstorm.png';
import BottmSheet from "../components/BottomSheet";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const jehuCd = searchParams.get('jehuCd');
  return (
    <Layout>
      <Banner>
        <div>
          <TextGroup>
            <p>소상공인 안전지킴이</p>
            <h2>풍수해보험</h2>
          </TextGroup>
          <ImageGroup />
        </div>
      </Banner>
      <BottmSheet jehuCd={jehuCd}/>
    </Layout>
  )
}

export default Guide