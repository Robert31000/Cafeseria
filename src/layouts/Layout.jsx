import { Outlet } from 'react-router-dom'
import Resumen from '../components/Resumen';
import Sidebar from '../components/Sidebar';

//OUTLET TE PERMITE QUE SE MUESTRE TU PAGINA DE INICIO AL PRINCIO

export default function Layout() {

  
    return (
        <div className='md:flex'>
            <Sidebar/>
            
            <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
            <Outlet/>
            </main>
            <Resumen/>
        </div>

    );
}

