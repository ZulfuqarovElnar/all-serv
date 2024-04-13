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
    path: '/',
    element: <MainLayout />,
  },
  { 
    path: 'nanny', 
    element: <Nanny /> 
  },
  { 
    path: '/cleaning', 
    element: <Cleaning /> 
  },
  { 
    path: '/gym',
    element: <Gym />,
  },  
  { 
    path: 'gym/:id',  
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
    path: '/beauty',   
    element: <BeautyPage />
  },
  {
    path: '/reserve',   
    element: <Reserve />
  }

];

export { routes };
