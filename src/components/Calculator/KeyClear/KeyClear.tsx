import styled from '@emotion/styled';
import { Clear } from '../../../const/clear';
import { useCalculatorContext } from '../../../context/CalculatiorContext';
import { Colors, borderRadius } from '../../../styles/const';

type KeyClearProps = {
  type: Clear,
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

export const KeyClear =  ({ type }: KeyClearProps): JSX.Element => {
  const { handleClearClick } = useCalculatorContext();

  return (
    <StyledKey onClick={() => {
      handleClearClick(type);
    }}>
      {type}
    </StyledKey>
  );
};
