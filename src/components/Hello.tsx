import * as React from 'react';
import './Hello.css';

export interface Props {
  languageName: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
function Hello({languageName, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic.:D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {languageName + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}
export default Hello;
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
