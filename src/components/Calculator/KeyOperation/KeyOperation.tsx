import styled from '@emotion/styled';
import { useCalculatorContext } from '../../../context/CalculatiorContext';
import { Colors, borderRadius } from '../../../styles/const';
import { Operator } from '../../../types/operator';

type KeyOperatorProps = {
  value: Operator,
};

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

export const KeyOperator =  ({ value }: KeyOperatorProps): JSX.Element => {
  const { handleOperationClick } = useCalculatorContext();

  return (
    <StyledKey onClick={() => {
      handleOperationClick(value);
    }}>{value}</StyledKey>
  );
};
