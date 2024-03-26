import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Inicio/>
            }
        ]
    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                //index: true hace que se muestre en la pantalla principal de nuestro componente AuthLayout
                path:'/auth/login',
                element:<Login/>
            },
            {
                path:'/auth/registro',
                element:<Registro/>
            }
            
        ]
    }
    

])

export default router