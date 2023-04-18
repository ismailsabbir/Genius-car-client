import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Errorpage from './Pages/Errorpage/Errorpage';
import Servicespage from './Pages/Servicespage/Servicespage';
import Checkout from './Pages/Checkout/Checkout';
import Orders from './Pages/Orders/Orders';
import PrivetRoutes from './Routes/PrivetRoutes';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:`/services/:id`,
          element:<Servicespage></Servicespage>,
          loader:async({params})=>{
            return fetch(`http://localhost:5000/services/${params.id}`)
          }
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:`/checkout/:id`,
          element:<Checkout></Checkout>,
          loader:async({params})=>{
            return fetch(`http://localhost:5000/checkout/${params.id}`);
          }
        },
        {
          path:'/orders',
          element:<PrivetRoutes><Orders></Orders></PrivetRoutes>
        },
        {
          path:'*',
          element:<Errorpage></Errorpage>
        }
      ]

    }
  ])
  return (
    <div data-theme="light" className='main-container'>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
