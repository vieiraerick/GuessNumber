import { FC, useState, useEffect, ChangeEvent } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo as redoDef } from '@fortawesome/fontawesome-free-solid';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import api from 'services/api';

import Header from 'components/header';
import Footer from 'components/footer';
import Display from 'components/display';

import { Container, Main, Title, Bar, Guess, Form } from './styles';

fontawesome.library.add(redoDef);

const PlayCheat: FC = () => {
  const [guess, setGuess] = useState<string>('0');
  const [drawnNo, setDrawnNo] = useState<string>();
  const [result, setResult] = useState<string>();
  const [newGame, setNewGame] = useState<boolean>(true);
  const [victory, setVictory] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const min = localStorage.getItem('minNumber');
    const max = localStorage.getItem('maxNumber');

    async function sorteio() {
      api
        .get(`rand?min=${min}&max=${max}`)
        .then((response: AxiosResponse) => {
          setDrawnNo(response.data.value);
        })
        .catch((error: AxiosError) => {
          if (error.response) {
            setHasError(true);
            setResult('ERRO');
            setGuess(String(error.response.status));
            document.getElementById('result')?.classList.add('error');
          }
        });
    }

    if (newGame) {
      sorteio();
      setNewGame(false);
    }
  }, [newGame]);

  function VerifyGuess(guessNo: string) {
    // Tranformando valores em inteiro
    const guessNumber = Number(guessNo);
    const drawnNumber = Number(drawnNo);

    if (guessNumber === drawnNumber) {
      setResult('Você Acertou!!!');
      setVictory(true);
      document.getElementById('result')?.classList.add('success');
    } else if (guessNumber < drawnNumber) {
      setResult('É maior');
    } else {
      setResult('É menor');
    }
  }

  function onChangeGuess(e: ChangeEvent<HTMLInputElement>) {
    // Prevenção contra valores aleatórios.
    const onlyNumbers = e.target.value.replace(/\D/g, '');
    const valor = onlyNumbers;

    // Torna o valor disponível para uso posterior.
    document.getElementById('guessInput')?.setAttribute('value', valor);
  }

  function MakeAGuess() {
    const guessValue = document
      .getElementById('guessInput')
      ?.getAttribute('value');

    // Prevenção contra valores inválidos
    if (guessValue === null || guessValue === undefined || guessValue === '') {
      toast.error('Insira um valor.');
      setResult('');
      document.getElementById('guessInput')?.classList.add('error');
    } else if (guessValue.length > 3) {
      toast.error('O valor deve ser abaixo de 1000.');
    } else {
      setGuess(guessValue);
      VerifyGuess(guessValue);
      document.getElementById('guessInput')?.classList.remove('error');
    }
  }

  function Reset() {
    setNewGame(true);
    setVictory(false);
    setHasError(false);
    setResult('');
    setGuess('0');
    document.getElementById('result')?.classList.remove('success');
    document.getElementById('result')?.classList.remove('error');
  }

  function GetStatus() {
    if (victory) {
      return 'victory';
    }
    if (hasError) {
      return 'error';
    }
    return 'default';
  }

  return (
    <Container>
      <Header />
      <ToastContainer />
      <Main>
        <Title>
          NÚMERO SORTEADO:&nbsp;
          {drawnNo}
        </Title>
        <Bar />
        <Guess>
          <span id="result">{result}</span>
          <Display guess={guess} status={GetStatus()} />
        </Guess>
        {(victory || hasError) && (
          <button type="button" onClick={() => Reset()}>
            <FontAwesomeIcon icon={faRedo} />
            NOVA PARTIDA
          </button>
        )}
        <Form>
          {victory || hasError ? (
            <>
              <input type="number" placeholder="Digite o palpite" disabled />
              <button type="button" id="btn" disabled>
                ENVIAR
              </button>
            </>
          ) : (
            <>
              <input
                type="number"
                placeholder="Digite o palpite"
                id="guessInput"
                onChange={e => onChangeGuess(e)}
              />
              <button type="button" id="btn" onClick={() => MakeAGuess()}>
                ENVIAR
              </button>
            </>
          )}
        </Form>
      </Main>
      <Footer />
    </Container>
  );
};

export default PlayCheat;
