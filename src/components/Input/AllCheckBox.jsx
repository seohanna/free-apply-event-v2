import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { marketingData } from "../../data/marketing_check";
import checkIcon from '../../assets/icon/checkInput.png';
import checkIconChecked from '../../assets/icon/checkInputChecked.png';

const CheckBoxGroup = styled.div`
  position: relative;
  width: 100%;
  
  input {
    position: absolute;
    left: -1000px;
  }
  input:checked + label::before {
    border-color: #176FFF;
    background-image: url(${checkIconChecked});
    background-repeat: no-repeat;
    background-position: center;
    background-color: none;
  }
  label {
    display: flex;
    align-items: center;
    height: 50px;
    color: #2F2F2F;
    font-size: 13px;

    ::before {
      content: '';
      display: block;
      width: 18px;
      height: 18px;
      margin-right: 15px;
      margin-left: 3px;
      background-image: url(${checkIcon});
      transition: background 0.3s;
    }
  }
`;

const AllChecked = styled.div`
  border: 1px solid #DADADA;
`;

const SelectChecked = styled.ul`
  padding: 15px 0;
  margin-bottom: 13px;

  > li {

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .button {
        width: 50px;
        font-size: 12px;
        text-align: center;
        height: 22px;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  ${props => props.theme.window.mobile} {
    padding: 14px 13px;
    margin-bottom: 10px;
  }
`;
const ErrorText = styled.p`
  font-size: 13px;
  line-height: 13px;
  padding-top: 5px;
  color: ${(props) => props.theme.color.WARNING_MESSAGE};

  ${props => props.theme.window.mobile} {
    padding-top: 0px;
    line-height: 20px;
  }
`;

const Info = styled.div`
  > div {
    height: 100px;
    overflow-y: scroll;
    transition: .3s;
    width: 100%;
    padding-left: 10px;
    font-size: 11px;
    
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      height: 30%;
      background: #217af4;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(33, 122, 244, .1);
    }
    > a {
      font-size: 11px;
      color: #222222;
      font-weight: 400;
    }
    > p {
      font-size: 11px;
      font-weight: 400;
      color: #222222;
    }
    > div {
      border: 1px solid #dadada;
      padding: 5px;
      line-height: 1.3;
      margin: 5px 0;
      > h2 {
        font-size: 11px;
      }
    }
    > ul {
      > li {
        font-size: 10px;
        line-height: 20px;
        > p {
          color: #222222;
          font-weight: 400;
        }
        > div {
          border: 1px solid #dadada;
          padding: 5px;
          line-height: 1.3;
        }
        table, th, td {
          border: 1px solid #dadada;
          border-collapse: collapse;
        }
        > table {
          
          th {
            width: 25%;
            text-align: center;
            background-color: #CEDAEF;
            color: #666666;
          }
          td {
            padding: 0 5px;
          }
        }
        > span {
          font-size: 10px;
          display: block;
          line-height: 1.2;
          margin-top: 5px;
        } 
        > ul {
          > li {
            line-height: 20px;
            > div {
              border: 1px solid #dadada;
              padding: 5px;
              line-height: 1.3;
            }
          }
        }
      }
    }
    
  }
  .closed {
    height: 0;
    overflow: hidden;
  }
`;

const AllCheckBox = (props) => {
  const {register, watch, formState: { errors }} = useFormContext({
    mode: 'onClick'
  });
  const [activeIndex, setActiveIndex] = useState();
  const [checkItems, setCheckItems] = useState([]);
  useEffect(() => {
    watch('')
  })
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
      
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
      watch('')
    }
  }

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      marketingData.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  }

  const activeMethod = (id) => {
    setActiveIndex(id)
  }

  return (
    <>
      <CheckBoxGroup>
        <AllChecked>
          <input type="checkbox" 
            checked={checkItems.length === marketingData.length ? true : false}
            onClick={(e) => handleAllCheck(e.target.checked)}  id='all'/>
          <label for='all'>전체 약관 동의</label>
        </AllChecked>
        <SelectChecked className="accordion">
          {marketingData.map((item) => {
            return (
              <>
              <li key={item.id}>
                <div>
                  <div>
                    <input 
                      type="checkbox" 
                      id={item.label}
                      checked={checkItems.includes(item.id) ? true : false}
                      {...register(item.name, {
                        required: item.required
                      })}
                      onClick={(e) => handleSingleCheck(e.target.checked, item.id)}
                      
                    />
                    <label for={item.label}>{item.title}</label>
                  </div>
                  <div className='button' onClick={() => activeMethod(item.id)}>보기</div>
                </div>
                <Info>
                  <div
                    className={item.id === activeIndex ? '' : 'closed' }
                    dangerouslySetInnerHTML={{__html: item.textArea }} />
                </Info>           
              </li>
              <>
                {item.required && (
                <ErrorMessage
                errors={errors}
                name={item.name}
                render={({message}) => <ErrorText>{message}</ErrorText>}
              />
              )}
              </>
              </>
            )})}
          </SelectChecked>
          
        </CheckBoxGroup>
      </>
    )
}

export default AllCheckBox;