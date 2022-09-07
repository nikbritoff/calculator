import styled from '@emotion/styled';
import { useCalculatorContext } from '../../../context/CalculatiorContext';
import { borderRadius, Colors } from '../../../styles/const';

const StyledDisplay = styled.div`
  grid-column: 1 / -1;
  border-radius: ${borderRadius}px;
  background-color: ${Colors.Display};

  display: grid;
  grid-template-rows: auto auto;
  align-content: center;
  justify-content: end;
  padding: 20px;
`;

const InputScreen = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${Colors.Border};
  width: 100%;
  display:inline-block
`;

const OperationScreen = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: ${Colors.Border};
  width: 100%;
`;

export const Display = (): JSX.Element => {
  const { firstOperand, secondOperand, operation} = useCalculatorContext();

  const firstScreen = secondOperand ? secondOperand : firstOperand;
  const secondScreen = operation ? `${firstOperand} ${operation} ${secondOperand}` : firstOperand;

  return (
    <StyledDisplay>
      <InputScreen>{firstScreen}</InputScreen>
      <OperationScreen>{secondScreen}</OperationScreen>
    </StyledDisplay>
  );
};
