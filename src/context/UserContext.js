import React, { createContext, useContext, useReducer } from 'react';

export const UserContext = createContext();

// Object containing all my states initial state
const initialState = { logged: false, name: '', password: '' };

// Function to manage my states
function userReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'login':
      return {
        logged: true,
        name: payload.name,
        password: payload.password,
      };
    case 'logout':
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Provider
export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const value = { state, dispatch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Custom hook to use the provider
export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a UserProvider');
  }

  return context;
}
