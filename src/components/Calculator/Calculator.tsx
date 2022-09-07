import styled from '@emotion/styled';
import { borderRadius, Colors, gapSize, keySize } from '../../styles/const';
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

export const Calculator = (): JSX.Element => {
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
