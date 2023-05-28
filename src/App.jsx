import React from 'react';
import styles from './Container.module.css';
import buttonStyle from './components/Button/Button.module.css';
import './global.css';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [currentNumber, setCurrentNumber] = React.useState('0');
  const [firstNumber, setFirstNumber] = React.useState('0');
  const [operation, setOperation] = React.useState('');

  if (currentNumber === '') setCurrentNumber('0');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleNewNumber = (number) =>
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${number}`);

  const handleDeleteNumber = () => {
    if (currentNumber !== '0') {
      setCurrentNumber(currentNumber.slice(0, currentNumber.length - 1));
    }
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum =
        Number(firstNumber.replace(',', '.')) +
        Number(currentNumber.replace(',', '.'));
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const minus =
        Number(firstNumber.replace(',', '.')) -
        Number(currentNumber.replace(',', '.'));
      setCurrentNumber(String(minus));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const multiply =
        Number(firstNumber.replace(',', '.')) *
        Number(currentNumber.replace(',', '.'));
      setCurrentNumber(String(multiply));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const divide =
        Number(firstNumber.replace(',', '.')) /
        Number(currentNumber.replace(',', '.'));
      setCurrentNumber(String(divide));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Input value={currentNumber.replace('.', ',')} />
        <div className={styles.rows}>
          <Button onClick={handleOnClear} label="C" />
          <Button
            onClick={() => handleDeleteNumber()}
            label={<i className="fa-solid fa-delete-left"></i>}
          />
          <Button
            onClick={handleDivideNumbers}
            label={<i className="fa-solid fa-divide"></i>}
          />
          <Button onClick={handleMultiplyNumbers} label="x" />
          <Button onClick={() => handleNewNumber(7)} label="7" />
          <Button onClick={() => handleNewNumber(8)} label="8" />
          <Button onClick={() => handleNewNumber(9)} label="9" />
          <Button onClick={handleMinusNumbers} label="-" />
          <Button onClick={() => handleNewNumber(4)} label="4" />
          <Button onClick={() => handleNewNumber(5)} label="5" />
          <Button onClick={() => handleNewNumber(6)} label="6" />
          <Button onClick={handleSumNumbers} label="+" />
          <Button onClick={() => handleNewNumber(1)} label="1" />
          <Button onClick={() => handleNewNumber(2)} label="2" />
          <Button onClick={() => handleNewNumber(3)} label="3" />
          <Button
            additionalClass={'equalBtn'}
            label="="
            onClick={handleEquals}
          />
          <Button
            additionalClass={'twoColumns'}
            label="0"
            onClick={() => handleNewNumber(0)}
          />
          <Button onClick={() => handleNewNumber(',')} label="," />
        </div>
      </div>
    </div>
  );
}

export default App;
