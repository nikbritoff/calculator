import { createContext, useContext, useState } from 'react';
import { Clear } from '../const/clear';
import { KeyNumberType } from '../types/key-number';
import { Operator } from '../types/operator';

type CalculatiorContextType = {
  firstOperand: number | string,
  secondOperand: number | string,
  operation: Operator,
  handleNumberClick: (value: KeyNumberType) => void,
  handleOperationClick: (value: Operator) => void,
  handleResultClick: () => void,
  handleClearClick: (type: Clear) => void,
};

type CalculatorProviderProps = {
  children: React.ReactNode,
};

const MAX_OPERAND_LENGTH = 12;

const CalculatorContext = createContext({} as CalculatiorContextType);

export const CalculatorProvider = ({ children }: CalculatorProviderProps ) => {
  const [ firstOperand, setFirstOperand ] = useState<number | string>('');
  const [ secondOperand, setSecondOperand ] = useState<number | string>('');
  const [ operation, setOperation ] = useState<Operator>(null);

  const handleNumberClick = (operand: KeyNumberType) => {
    if (String(secondOperand) === '0' && operand === '.') {
      setSecondOperand((prev) => String(prev) + String(operand));
      return;
    }

    if (String(secondOperand) === '0' && operand !== '.') {
      setSecondOperand(operand);
      return;
    }

    if (String(secondOperand).length >= MAX_OPERAND_LENGTH ) {
      return;
    }

    if (String(secondOperand).length === 0 && operand === '.' ) {
      return;
    }

    const dotsAMount = String(secondOperand)
      .split('')
      .reduce((acc, item) => item === '.' ? acc + 1 : acc, 0);

    if (dotsAMount >= 1 && operand === '.') {
      return;
    }

    setSecondOperand((prev) => String(prev) + String(operand));
  };
  
  const handleOperationClick = (operation: Operator) => {
    if (!secondOperand && operation === '-') {
      setSecondOperand('-');
      return;
    }

    if (secondOperand && !firstOperand) {
      setFirstOperand(secondOperand);
      setSecondOperand('');
    }
    
    setOperation(operation);
  };

  const handleResultClick = () => {
    if (!operation && firstOperand && Number(secondOperand) < 0) {
      setFirstOperand(Number(firstOperand) + Number(secondOperand));
      setSecondOperand('');
      return;
    }

    switch(operation) {
      case '+':
        setFirstOperand(Number(firstOperand) + Number(secondOperand));
        break;
      case '-':
        setFirstOperand(Number(firstOperand) - Number(secondOperand));
        break;
      case '*':
        setFirstOperand(Number(firstOperand) * Number(secondOperand));
        break;
      case '/':
        setFirstOperand(Number(firstOperand) / Number(secondOperand));
        break;
      case '**':
        setFirstOperand(Number(firstOperand) ** Number(secondOperand));
        break;

      default:
        return;
    };

    setSecondOperand('');
    setOperation(null);
  };

  const handleClearClick = (type : Clear) => {
    switch(type) {
      case 'C':
        setSecondOperand('');
        setOperation(null);
        break;
      case 'CE': 
        setSecondOperand('');
        setFirstOperand('');
        setOperation(null);
        break;
      case 'Del':
        setSecondOperand((prev) => String(prev).slice(0, String(prev).length - 1));
        break;
    }
  };
  
  return (
    <CalculatorContext.Provider 
      value={{
        firstOperand,
        secondOperand,
        operation,
        handleNumberClick,
        handleOperationClick,
        handleResultClick,
        handleClearClick,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);

  return context;
};
