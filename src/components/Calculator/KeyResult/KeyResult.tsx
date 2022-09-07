import styled from '@emotion/styled';
import { useCalculatorContext } from '../../../context/CalculatiorContext';
import { Colors, borderRadius } from '../../../styles/const';

const StyledKey = styled.button`
  color: ${Colors.Display};
  background-color: ${Colors.Accent};
  border: 2px solid ${Colors.Border};

  font-size: 32px;
  border-radius: ${borderRadius}px;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 0px 2px ${Colors.Border} inset;
    color: ${Colors.Border};
  }
`;

export const KeyResult =  (): JSX.Element => {
  const { handleResultClick } = useCalculatorContext();

  return (
    <StyledKey onClick={handleResultClick}>=</StyledKey>
  );
};
