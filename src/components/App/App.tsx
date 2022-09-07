import styled from '@emotion/styled';
import { CalculatorProvider } from '../../context/CalculatiorContext';
import { Calculator } from '../Calculator/Calculator';

const StyledDiv = styled.div`
  text-align: center;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const App = (): JSX.Element => {
  return (
    <StyledDiv>
      <CalculatorProvider>
        <Calculator />     
      </CalculatorProvider>
    </StyledDiv>
  );
};
