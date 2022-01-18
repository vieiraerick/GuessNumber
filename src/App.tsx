import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'styles/reset.css';
import 'react-toastify/dist/ReactToastify.min.css';

import Routes from './routes';

const App: FC = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
