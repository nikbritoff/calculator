import styled from '@emotion/styled';
import { useCalculatorContext } from '../../../context/CalculatiorContext';
import { Colors, borderRadius } from '../../../styles/const';
import { KeyNumberType } from '../../../types/key-number';

type KeyNumberProps = {
  value: KeyNumberType,
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

export const KeyNumber =  ({ value }: KeyNumberProps): JSX.Element => {
  const { handleNumberClick } = useCalculatorContext();

  return (
    <StyledKey onClick={() => {
      handleNumberClick(value);
    }}>
      {value}
    </StyledKey>
  );
};
