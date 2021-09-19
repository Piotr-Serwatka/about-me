import About from '../views/About'
import Nasa from '../views/Nasa';

export default [
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/nasa',
    name: 'main',
    component: Nasa
  },
  {
    path: '/',
    redirect: {name: 'about'}
  }
]
