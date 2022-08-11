import './Login.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useUser } from '../context/UserContext';

const schema = yup
  .object({
    usuario: yup.string().required('O nome de usuário é obrigatório!'),
    senha: yup
      .string()
      .required('A senha é obrigatória!')
      .min(6, 'A senha deve ter pelo menos 6 caracteres!'),
  })
  .required();

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { dispatch } = useUser();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [selectedElement, setSelectedElelent] = useState(null);

  const onSubmit = (data) => {
    dispatch({
      type: 'login',
      payload: { name: data.usuario, password: data.senha },
    });
  };

  const handleBlur = (e) => {
    if (e.target.value.length === 0) setSelectedElelent(null);
  };

  const handleFocus = (el) => {
    setSelectedElelent(el);
  };

  const handleChange = (e) => {
    if (e.target.name === 'usuario') setUsuario(e.target.value);
    else setSenha(e.target.value);
  };

  return (
    <div className='Panel Login'>
      <h2>Fazer login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`Panel-inputGroup ${
            usuario.length > 0
              ? 'selected'
              : selectedElement && selectedElement === 'usuario' && 'selected'
          }`}
        >
          <label htmlFor='nome'>Usuario: </label>
          <input
            onFocus={() => handleFocus('usuario')}
            onBlur={handleBlur}
            {...register('usuario', {
              required: true,
              onBlur: (e) => handleBlur(e),
              onChange: (e) => handleChange(e),
            })}
            type='text'
          />
        </div>

        <div
          className={`Panel-inputGroup ${
            senha.length > 0
              ? 'selected'
              : selectedElement && selectedElement === 'senha' && 'selected'
          }`}
        >
          <label htmlFor='nome'>Senha: </label>
          <input
            onFocus={() => handleFocus('senha')}
            onBlur={handleBlur}
            {...register('senha', {
              required: true,
              onBlur: (e) => handleBlur(e),
              onChange: (e) => handleChange(e),
            })}
            type='password'
          />
        </div>

        <button>Login</button>
      </form>

      {Object.keys(errors).length > 0 &&
        Object.values(errors).map((error) => (
          <div className='Login-error'>
            <span>{error.message}</span>
          </div>
        ))}
    </div>
  );
};
