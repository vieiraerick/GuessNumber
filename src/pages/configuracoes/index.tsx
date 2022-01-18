/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import Header from 'components/header';
import Footer from 'components/footer';

import { Container, Main } from './styles';

const Configuracoes: FC = () => {
  const [minimo, setMinimo] = useState<string>();
  const [maximo, setMaximo] = useState<string>();

  useEffect(() => {
    // Busca dos valores no localStorage;
    let getMin = localStorage.getItem('minNumber');
    let getMax = localStorage.getItem('maxNumber');

    /* esse trecho garante que não serão passados valores nulos
    para o estado */
    getMin = getMin !== null ? getMin : '0';
    getMax = getMax !== null ? getMax : '300';

    setMinimo(getMin);
    setMaximo(getMax);
  }, []);

  function onChangeMin(e: ChangeEvent<HTMLInputElement>) {
    const onlyNumbers = e.target.value.replace(/\D/g, '');
    const valor: number = +onlyNumbers;

    if (valor >= Number(maximo)) {
      toast.error('O valor mínimo dever ser menor que o valor máximo.');
    } else if (valor > 998) {
      toast.error('O valor mínimo deve ser menor que 999.');
    } else {
      const txtMinimo = String(valor);
      setMinimo(txtMinimo);

      document.getElementById('menor')?.setAttribute('value', txtMinimo);
      localStorage.setItem('minNumber', txtMinimo);
    }
  }

  function onChangeMax(e: ChangeEvent<HTMLInputElement>) {
    const onlyNumbers = e.target.value.replace(/\D/g, '');
    const valor: number = +onlyNumbers;

    if (valor <= Number(minimo)) {
      /* Essa validação precisa ser melhorada pois não é possivel apagar todo
      o campo para digitar um valor novo pois ele caíra na condição de menor
      que o mínimo */
      toast.error('O valor máximo deve ser maior que o valor mínimo.');
    } else if (valor > 1000) {
      toast.error('O valor máximo deve ser menor que 1000.');
    } else {
      const txtMaximo = String(valor);
      setMaximo(txtMaximo);

      document.getElementById('menor')?.setAttribute('value', txtMaximo);
      localStorage.setItem('maxNumber', txtMaximo);
    }
  }

  return (
    <Container>
      <Header />
      <ToastContainer />
      <Main>
        <form>
          <label htmlFor="maximo">Escolha o valor máximo</label>
          <input
            type="number"
            name="maximo"
            id="maior"
            placeholder={maximo}
            defaultValue={maximo}
            value={maximo}
            onChange={e => onChangeMax(e)}
          />
          <label htmlFor="minimo">Escolha o valor mínimo</label>
          <input
            type="number"
            name="minimo"
            id="menor"
            placeholder={minimo}
            defaultValue={minimo}
            value={minimo}
            onChange={e => onChangeMin(e)}
          />
          <Link to="/play">
            <button type="button">COMEÇAR</button>
          </Link>
        </form>
      </Main>
      <Footer />
    </Container>
  );
};

export default Configuracoes;
