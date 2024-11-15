
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter(
    [
      {path:"",element:<Layout/>,children:[
        {index:true,element:<Home/>},
        {path:"about",element:<About/>},
        {path:"portfolio",element:<Portfolio/>},
        {path:"contact",element:<Contact/>},
        {
        path:"*",
        element:(
          <div className='h-screen bg-slate-300 flex justify-center items-center text-5xl'><h2>404</h2></div>
        )
        }
      ]}
      
    ]
  )

  return (
    <>
   <RouterProvider router = {router} />
    </>
  )
}

export default App
