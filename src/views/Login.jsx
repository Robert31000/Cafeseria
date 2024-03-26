import { Link } from 'react-router-dom'


export default function Login()
{
    return(
        <>
        <h1 className="text-4xl font-black">Iniciar sesíon</h1>
        <p>Para crear pedido debes iniciar sesíon</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <from>
                <div className="md-4">
                    <label className="text-slate-800"
                    htmlFor="email">
                        Correo electronico:
                    </label>

                    <input type="email"
                    id="email"
                    name="email"
                    placeholder="escribe tu correo"
                    className="mt-2 p-3 w-full bg-gray-50"/>

                    
                </div>

                <div className="md-4">
                    <label className="text-slate-800"
                    htmlFor="email">
                         Contraseña:
                    </label>

                    <input type="password"
                    id="password"
                    name="password"
                    placeholder="escribe tu contraseña"
                    className="mt-2 p-3 w-full bg-gray-50"/>

                    
                </div>
                <input className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
                uppercase font-bold cursor-pointer"
                type="submit"
                value="Iniciar sesíon"
                />
            </from>
        </div>
        <nav className="mt-5">
            <Link to="/auth/Registro">¿No tienes cuenta? Crea una</Link>

        </nav>
</>
    )
}