import { useState } from 'react';
import './SimpleClicker.css';

export const SimpleClicker = () => {
  const [clicks, setClicks] = useState(0);
  return (
    <div className='Panel SimpleClicker'>
      <h2>Soma os clicks</h2>

      <span className='SimpleClicker-clicks'>{clicks}</span>
      <button onClick={() => setClicks((prevClick) => prevClick + 1)}>
        Click!!
      </button>
    </div>
  );
};
