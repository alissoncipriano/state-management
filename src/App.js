import './App.css';
import { ConcatWord } from './ConcatWord/ConcatWord';
import { SimpleClicker } from './SimpleClicker/SimpleClicker';
import { UpdateObject } from './UpdateObject/UpdateObject';

function App() {
  return (
    <div className='App' data-testid='App'>
      <div className='App-container'>
        <h1>States com React</h1>
        <SimpleClicker />
        <ConcatWord />
        <UpdateObject />
      </div>
    </div>
  );
}

export default App;
