import { useUser } from '../context/UserContext';
import './LoggedUser.css';

export const LoggedUser = () => {
  const { state, dispatch } = useUser();

  return (
    <div className='Panel LoggedUser'>
      {state.logged ? (
        <>
          <h2>Olá, {state.name}!</h2>
          <p>Você está logado.</p>
          <button onClick={() => dispatch({ type: 'logout', payload: null })}>
            Sair
          </button>
        </>
      ) : (
        <>
          <h2>Nenhum usuário logado.</h2>
        </>
      )}
    </div>
  );
};
