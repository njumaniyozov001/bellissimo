import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Recycle from '../recycle/recycle.jsx'
import Body from '../body/body.jsx'
import Layout from '../layout/Layout.jsx'
import Halal from '../halal/halal.jsx'
import Restarans from '../restaranlar/restaranlar.jsx'
import About from '../about/about.jsx'
import Kirish from "../kirish/kirish.jsx";

const route = createBrowserRouter([
   {
    element:<Layout/>,
    children:[
        {
            path:'/',
            element:<Body/>
          },
        {
          path: '/cart',
          element: <Recycle />
        },
        {
          path:'/halal',
          element:<Halal />
        },
        {
          path:'/restaurants',
          element:<Restarans />
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/kirish',
          element:<Kirish/>
        }
       
    ]
   }
]);

const Routers = () => {
  return <RouterProvider router={route} />;
};

export default Routers;