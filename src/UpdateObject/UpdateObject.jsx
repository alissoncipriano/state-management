import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './UpdateObject.css';

const IPessoa = {
  nome: 'Alisson',
  idade: 22,
  profissao: 'Dev',
};

const schema = yup
  .object({
    nome: yup.string().required('O nome é obrigatório!'),
    idade: yup.string().required('A idade é obrigatória!'),
    profissao: yup.string().required('A profissão é obrigatória!'),
  })
  .required();

export const UpdateObject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [pessoa, setPessoa] = useState(IPessoa);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [profissao, setProfissao] = useState('');
  const [selectedElement, setSelectedElelent] = useState(null);

  const onSubmit = (data) => {
    setPessoa(data);
  };

  const handleClean = (e) => {
    e.preventDefault();
    setPessoa('');
  };

  const handleBlur = (e) => {
    if (e.target.value.length === 0) setSelectedElelent(null);
  };

  const handleFocus = (el) => {
    setSelectedElelent(el);
  };

  const handleChange = (e) => {
    if (e.target.name === 'nome') setNome(e.target.value);
    else if (e.target.name === 'idade') setIdade(e.target.value);
    else setProfissao(e.target.value);
  };

  return (
    <div className='Panel UpdateObject'>
      <h2>Atualiza Objetos</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`Panel-inputGroup ${
            nome.length > 0
              ? 'selected'
              : selectedElement && selectedElement === 'nome' && 'selected'
          }`}
        >
          <label htmlFor='nome'>Nome: </label>
          <input
            onFocus={() => handleFocus('nome')}
            onBlur={handleBlur}
            {...register('nome', {
              required: true,
              onBlur: (e) => handleBlur(e),
              onChange: (e) => handleChange(e),
            })}
            type='text'
          />
        </div>

        <div
          className={`Panel-inputGroup ${
            idade.length > 0
              ? 'selected'
              : selectedElement && selectedElement === 'idade' && 'selected'
          }`}
        >
          <label htmlFor='idade'>Idade: </label>
          <input
            onFocus={() => handleFocus('idade')}
            onBlur={handleBlur}
            {...register('idade', {
              required: true,
              onBlur: (e) => handleBlur(e),
              onChange: (e) => handleChange(e),
            })}
            type='text'
          />
        </div>

        <div
          className={`Panel-inputGroup ${
            profissao.length > 0
              ? 'selected'
              : selectedElement && selectedElement === 'profissao' && 'selected'
          }`}
        >
          <label htmlFor='profissao'>Profissao: </label>
          <input
            onFocus={() => handleFocus('profissao')}
            onBlur={handleBlur}
            {...register('profissao', {
              required: true,
              onBlur: (e) => handleBlur(e),
              onChange: (e) => handleChange(e),
            })}
            type='text'
          />
        </div>

        <button>Ok!!</button>
        <button className='Panel-clean-button' onClick={(e) => handleClean(e)}>
          Limpar
        </button>
      </form>

      <div className='UpdateObject Object'>{JSON.stringify(pessoa)}</div>
    </div>
  );
};
