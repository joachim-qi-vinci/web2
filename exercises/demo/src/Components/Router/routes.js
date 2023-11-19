import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/connexion' : LoginPage,
  '/inscription' : RegisterPage
};

export default routes;
