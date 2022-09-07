import styled from '@emotion/styled';
import { borderRadius, Colors, gapSize, keySize } from '../../styles/const';
import { KeyNumber } from './KeyNumber/KeyNumber';
import { KeyOperator } from './KeyOperation/KeyOperation';
import { Display } from './Display/Display';
import { KeyResult } from './KeyResult/KeyResult';
import { Clear } from '../../const/clear';
import { KeyClear } from './KeyClear/KeyClear';
import { useEffect } from 'react';
import { useCalculatorContext } from '../../context/CalculatiorContext';

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

export const Calculator = (): JSX.Element => {
  const {
    handleNumberClick,
    handleOperationClick,
    handleResultClick,
    handleClearClick,
  } = useCalculatorContext();

  const handleButtonKeydown = (evt: KeyboardEvent) => {
    switch (evt.key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case '.':
        handleNumberClick(evt.key);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        handleOperationClick(evt.key);
        break;
      case '=':
      case 'Enter':
        handleResultClick();
        break;
      case 'Backspace':
        handleClearClick(Clear.Last);
        break;
      case 'Delete':
        handleClearClick(Clear.Input);
        break;
      case 'C':
      case 'c':
        handleClearClick(Clear.All);
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleButtonKeydown);
    
    return () => {
      document.removeEventListener('keydown', handleButtonKeydown);
    }
  });

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
