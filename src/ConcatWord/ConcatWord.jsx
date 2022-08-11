import { useState } from 'react';
import './ConcatWord.css';

export const ConcatWord = () => {
  const [counter, setCounter] = useState(1);
  const [selected, setSelected] = useState(false);
  const [word, setWord] = useState('');
  const [wordList, setWordList] = useState([]);

  const handleBlur = () => {
    if (word.length === 0) setSelected(false);
  };

  const handleAddWord = () => {
    if (word.length > 0) {
      let newList = wordList;
      newList.push(word);
      setWordList(newList);
      setWord('');
      setCounter((prevState) => prevState + 1);
    }
  };

  return (
    <div className='Panel ConcatWord'>
      <h2>Concatena palavras</h2>

      <div className={`Panel-inputGroup ${selected && 'selected'}`}>
        <label htmlFor='palavra'>Digite a {counter}ª palavra</label>
        <input
          type='text'
          id='palavra'
          value={word}
          onFocus={() => setSelected(true)}
          onBlur={handleBlur}
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
      </div>

      {wordList.length > 0 && (
        <div className='ConcatWord-list'>{wordList.map((wordd) => wordd)}</div>
      )}

      <button onClick={handleAddWord}>Concatenar</button>
    </div>
  );
};
