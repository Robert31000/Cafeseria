import { Link } from 'react-router-dom'


export default function Registro()
{
    return(
        <> 
                <h1 className="text-4xl font-black">Crea tu cuenta</h1>
                <p>Crea tu cuenta llenando el formulario</p>

                <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                    <from>
                        <div className="md-4">
                            <label className="text-slate-800"
                            htmlFor="name">
                                Nombre:
                            </label>

                            <input type="text"
                            id="name"
                            name="name"
                            placeholder="escribe tu nombre"
                            className="mt-2 p-3 w-full bg-gray-50"/>

                            
                        </div>

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

                        <div className="md-4">
                            <label className="text-slate-800"
                            htmlFor="email">
                              Confirma tu Contraseña:
                            </label>

                            <input type="password"
                            id="password"
                            name="password_confirmation"
                            placeholder="escribe tu contraseña"
                            className="mt-2 p-3 w-full bg-gray-50"/>
        
                        </div>

                        <input className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
                        uppercase font-bold cursor-pointer"
                        type="submit"
                        value="Crea tu cuenta"
                        />
                    </from>


                </div>
                <nav className="mt-5">
            <Link to="/auth/Login">¿ tienes cuenta? Iniciar sesíon</Link>

              </nav>
        </>
    )
}