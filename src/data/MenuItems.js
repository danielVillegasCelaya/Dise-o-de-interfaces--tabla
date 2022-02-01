import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import Perfil from '../components/Perfil';
import Coches from '../components/Coches';
import Videojuegos from '../components/Videojuegos';
import Animales from '../components/Animales';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path: '/coches',
    title: 'Coches',
    component: Coches,
  },
  {
    id: 5,
    path: '/videojuegos',
    title: 'Videojuegos',
    component: Videojuegos,
  },
  {
    id: 6,
    path: '/animales',
    title: 'Animales',
    component: Animales,
  },
];

/*
  path
  id
  title
  component

*/
