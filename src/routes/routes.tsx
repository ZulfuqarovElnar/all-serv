import { RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/main';
import Nanny from '../components/nanny';
import Cleaning from '../components/cleaning';
import Gym from '../components/gym';
import GymPage from '../pages/gymPage';
import FitnessDetails from '../components/gym/fitness/details';
import FitnessGallery from '../components/gym/fitness/gallery';
import FitnessEmployees from '../components/gym/fitness/employees';
import BeautyPage from '../pages/beautyPage';
import Reserve from '../components/beauty';

const routes: RouteObject[] = [
  {
    path: '/allserv/',
    element: <MainLayout />,
  },
  { 
    path: '/allserv/nanny', 
    element: <Nanny /> 
  },
  { 
    path: '/allserv/cleaning', 
    element: <Cleaning /> 
  },
  { 
    path: '/allserv/gym',
    element: <Gym />,
  },  
  { 
    path: '/allserv/gym/:id',  
    element: <GymPage />,
    children: [
      {
        path: '', 
        element: <FitnessDetails />, 
      },  
      {
        path: 'details',  
        element: <FitnessDetails />, 
      },
      {
        path: 'gallery',  
        element: <FitnessGallery />, 
      },
      {
        path: 'employees',   
        element: <FitnessEmployees />, 
      }
    ]
  },
  {
    path: '/allserv/beauty',   
    element: <BeautyPage />
  },
  {
    path: '/allserv/reserve',   
    element: <Reserve />
  }

];

export { routes };
