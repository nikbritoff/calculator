import styled from '@emotion/styled';
import { useState } from 'react';
import { useCalculatorContext } from '../../context/CalculatiorContext';
import { UseCalculator } from '../../hooks/useCalculator';
import { borderRadius, Colors, gapSize, keySize } from '../../styles/const';
import { KeyNumberType } from '../../types/key-number';
import { Operator } from '../../types/operator';
import { KeyNumber } from './KeyNumber/KeyNumber';
import { KeyOperator } from './KeyOperation/KeyOperation';
import { Display } from './Display/Display';
import { KeyResult } from './KeyResult/KeyResult';
import { Clear } from '../../const/clear';
import { KeyClear } from './KeyClear/KeyClear';

const StyledCase = styled.div`
  display: grid;
  background-color: ${Colors.Body};
  padding: ${gapSize}px;

  grid-template-columns: repeat(4, ${keySize}px);
  grid-template-rows: ${keySize * 2}px repeat(5, ${keySize}px);
  column-gap: ${gapSize}px;
  row-gap: ${gapSize}px;
  border-radius: ${borderRadius}px;
`;

const StyledDisplay = styled.div`
  grid-column: 1 / -1;
  border-radius: ${borderRadius}px;
  background-color: ${Colors.Display};
`;

const StyledKey = styled.button`
  color: ${Colors.Display};
  background-color: ${Colors.Key};
  border: 2px solid ${Colors.Border};

  font-size: 32px;
  border-radius: ${borderRadius}px;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 0px 2px ${Colors.Border} inset;
    color: ${Colors.Border};
  }
`;

export const Calculator = (): JSX.Element => {
  // const [ firstOperand, setFirstOperand ] = useState<number | null | string>('');
  // const [ secondOperand, setSecondOperand ] = useState<number | null | string>('');
  // const [ operation, setOperation ] = useState<Operator>('');
  // // <!!!!!!>
  // const [ displayInfo, setDisplayInfo ] = useState<number | string>('');
  // // <!!!!!!>

  // const handleNumberClick = (operand: KeyNumberType) => {
  //   setSecondOperand((prev) => String(prev) + String(operand));
  // };
  
  // const handleOperationClick = (operation: Operator) => {
  //   if (secondOperand) {
  //     setFirstOperand(secondOperand);
  //     setSecondOperand('');
  //   }
    
  //   setOperation(operation);
  // };

  // const handleResultClick = () => {
  //   switch(operation) {
  //     case '+':
  //       setFirstOperand(Number(firstOperand) + Number(secondOperand));
  //       break;
  //     case '-':
  //       setFirstOperand(Number(firstOperand) - Number(secondOperand));
  //       break;
  //     case '*':
  //       setFirstOperand(Number(firstOperand) * Number(secondOperand));
  //       break;
  //     case '/':
  //       setFirstOperand(Number(firstOperand) / Number(secondOperand));
  //       break;
  //   };

  //   setSecondOperand('');
  //   setOperation('');
  //   // <!!!!!!> 
  //   // Почему эта функция не выполняется сразу? - стейт обновляется асинхронно, вот почему!
  //   setDisplayInfo(() => {
  //     console.log('display');
  //     return String(firstOperand);
  //   });
  //   // <!!!!!>
  // };

  const {
    firstOperand,
    // secondOperand,
    // operation,
    handleNumberClick,
    handleOperationClick,
    handleResultClick,
    handleClearClick,
  // } = UseCalculator();
  } = useCalculatorContext();

  return (
    <StyledCase>
      <Display />

      <KeyClear type={Clear.Input}/>
      <KeyClear type={Clear.All}/>
      <KeyClear type={Clear.Last}/>
      <KeyOperator value='**'/>

      <KeyNumber value='1'/>
      <KeyNumber value='2'/>
      <KeyNumber value='3'/>
      <KeyOperator value='+'/>

      <KeyNumber value='4'/>
      <KeyNumber value='5'/>
      <KeyNumber value='6'/>
      <KeyOperator value='-'/>

      <KeyNumber value='7'/>
      <KeyNumber value='8'/>
      <KeyNumber value='9'/>
      <KeyOperator value='*'/>
      
      <KeyNumber value='0'/>
      <KeyNumber value='.'/>
      <KeyResult/>
      <KeyOperator value='/'/>


    </StyledCase>
  );
};
