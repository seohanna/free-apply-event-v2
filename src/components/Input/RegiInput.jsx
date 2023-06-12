import React from "react";
import styled from "styled-components";
import Input from "./Input";
import { useFormContext } from "react-hook-form";

const Wrap = styled.div`
	display: flex;
	align-items: flex-end;
	width: 100%;
	height: 100px;
> div {
	position: relative;
	
	> p {
		position: absolute;
	}
}

`;

const Dash = styled.div`
	align-self: center;
	margin: 0 10px;
`;


const RegiInput = () => {
	const { watch, trigger } = useFormContext({
		mode: 'onBlur'
	})
	const juminCheck = () => {
    const reg1 = watch("regi_birth_front"); 
    const reg2 = watch("regi_birth_back");

    const totalJumin = reg1+reg2
    console.log('totalJumi', totalJumin)

    const arrNum1 = [];
	  const arrNum2 = [];

    for (let i = 0; i < reg1.length; i++) {
      arrNum1[i] = reg1.charAt(i);
    }
    for (let i = 0; i < reg2.length; i++) {
      arrNum2[i] = reg2.charAt(i);
    }

    var tempSum = 0;
    for (let i = 0; i < reg1.length; i++) {
      tempSum += arrNum1[i] * (2 + i);
    }

    for (let i = 0; i < reg2.length - 1; i++) {
      if (i >= 2) {
        tempSum += arrNum2[i] * i;
      } else {
        tempSum += arrNum2[i] * (8 + i);
      }
    }

    if (arrNum2[0] === 1 ||
      arrNum2[0] === 2 ||
      arrNum2[0] === 3 ||
      arrNum2[0] === 4 ||
      arrNum2[0] === 0 ||
      arrNum2[0] === 9) {
      if ((11 - (tempSum % 11)) % 10 !== arrNum2[6]) {
        return false;
      } else {
        return true
      }
    }
  }

  return (
    <Wrap>
			<Input
				label='주민등록번호'
				name='regi_birth_front' 
				placeholder='주민번호앞자리' 
				type='tel'
				require='*필수입력사항입니다.'
        validate={{
          reqCheck: () => juminCheck() ? true : '잘못된 주민번호 입니다.'
        }}
				maxLength={6}
			/>
			<Dash>-</Dash>
			<Input
				name='regi_birth_back' 
				placeholder='● ● ● ● ● ●' 
				type="password"
				require='*필수입력사항입니다.'
				validate={{
					regCheck: () => juminCheck() ? trigger('regi_birth_front') : '잘못된 주민번호 입니다.'
				}}
				maxLength={7}
			/>
    </Wrap>
  )
}

export default RegiInput;