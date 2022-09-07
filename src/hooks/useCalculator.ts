import { useState } from 'react';
import { KeyNumberType } from '../types/key-number';
import { Operator } from '../types/operator';

export const UseCalculator = () => {
  const [ firstOperand, setFirstOperand ] = useState<number | string>('');
  const [ secondOperand, setSecondOperand ] = useState<number | string>('');
  const [ operation, setOperation ] = useState<Operator>(null);
  // <!!!!!!>
  const [ displayInfo, setDisplayInfo ] = useState<number | string>('');
  // <!!!!!!>

  const handleNumberClick = (operand: KeyNumberType) => {
    setSecondOperand((prev) => String(prev) + String(operand));
  };
  
  const handleOperationClick = (operation: Operator) => {
    console.log('use oper')
    if (secondOperand) {
      setFirstOperand(secondOperand);
      setSecondOperand('');
    }
    
    setOperation(operation);
  };

  const handleResultClick = () => {
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

      default:
        console.log('default');
        return;
    };

    setSecondOperand('');
    setOperation(null);
    // <!!!!!!> 
    // Почему эта функция не выполняется сразу? - стейт обновляется асинхронно, вот почему!
    setDisplayInfo(() => {
      console.log('display', firstOperand);
      return String(firstOperand);
    });
    // <!!!!!>
  };

  return {
    firstOperand,
    secondOperand,
    operation,
    handleNumberClick,
    handleOperationClick,
    handleResultClick,
  };
};