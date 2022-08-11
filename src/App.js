import './App.css';
import { ConcatWord } from './ConcatWord/ConcatWord';
import { UserProvider } from './context/UserContext';
import { LoggedUser } from './LoggedUser/LoggedUser';
import { Login } from './Login/Login';
import { SimpleClicker } from './SimpleClicker/SimpleClicker';
import { UpdateObject } from './UpdateObject/UpdateObject';

function App() {
  return (
    <div className='App' data-testid='App'>
      <p className='App-obs'>
        Obs.: Cada painel branco é um componente à parte.
      </p>

      <div className='App-container'>
        <h1>States com React</h1>
        <SimpleClicker />
        <ConcatWord />
        <UpdateObject />
      </div>

      <UserProvider>
        <div className='App-container'>
          <h1>States com ContextAPI</h1>
          <Login />
          <LoggedUser />
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
