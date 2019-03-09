import AppView from './App/App';
import RegisterView from './Register';

const routes = [
  {
    path: '/',
    component: AppView,
    exact: true,
  },
  {
    path: '/register',
    component: RegisterView,
    // exact: true,
  },
];

export default routes;
