import { Link } from 'react-router-dom'
import { useState } from 'react'
import { register } from '../service/auth'


export default function Registro()
{
    const [name, setName] = useState('')
    const [password, setPassword]= useState('')
    const [email, setEmail]=useState('')
    const [username, setUsername]= useState('')

    const [nameError, setNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [usernameError, setUsernameError] = useState('')

    const registerUser = (e) => {
       e.preventDefault();

       let isValid = true;


        if (!name) {
            setNameError('El nombre es obligatorio');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!password) {
            setPasswordError('La contraseña es obligatoria');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (!email) {
            setEmailError('El correo electrónico es obligatorio');
            isValid = false;
        } else {
            // Validar el formato del correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setEmailError('El formato del correo electrónico no es válido');
                isValid = false;
            } else {
                setEmailError('');
            }
        }

        if (!username) {
            setUsernameError('El nombre de usuario es obligatorio');
            isValid = false;
        } else {
            setUsernameError('');
        }

        // Enviar los datos si todas las validaciones pasan
        if (isValid) {
            const data = {
                name,
                password,
                email,
                username
            }
            register(data);
        }
    
    }

    return(
        <> 
                <h1 className="text-4xl font-black">Crea tu cuenta</h1>
                <p>Crea tu cuenta llenando el formulario</p>

                <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10 ">
                    <form onSubmit={registerUser} >
                        <div className="md-4">
                            <label className="text-slate-800"
                            htmlFor="name">
                                Nombre:
                            </label>

                            <input type="text"
                            defaultValue={name}
                            onChange={(evento) => setName(evento.currentTarget.value)}
                            id="name"
                            name="name"
                            placeholder="escribe tu nombre"
                            className="mt-2 p-3 w-full bg-gray-50"/>
                           {nameError && <p className="text-white bg-red-600 text-center font-bold">{nameError}</p>}


                            
                        </div>
                        <div className="md-4">
                            <label className="text-slate-800"
                            htmlFor="username">
                                nombre usuario:
                            </label>

                            <input type="text"
                            defaultValue={username}
                            onChange={(evento) => setUsername(evento.currentTarget.value)}
                            id="username"
                            name="username"
                            placeholder="escribe tu nombre de usuario"
                            className="mt-2 p-3 w-full bg-gray-50"/>
                            {usernameError && <p className="text-white bg-red-600 text-center font-bold">{usernameError}</p>}

                            
                        </div>

                        <div className="md-4">
                            <label className="text-slate-800"
                            htmlFor="email">
                                Correo electronico:
                            </label>

                            <input
                               defaultValue={email}
                               onChange={(evento) => setEmail(evento.currentTarget.value)}
                             type="email"
                            id="email"
                            name="email"
                            placeholder="escribe tu correo"
                            className="mt-2 p-3 w-full bg-gray-50"/>
                            {emailError && <p className="text-white bg-red-600 text-center font-bold">{emailError}</p>}


                            
                        </div>

                        <div className="md-4">
                            <label className="text-slate-800"
                            htmlFor="email">
                                 Contraseña:
                            </label>

                            <input 
                               defaultValue={password}
                               onChange={(evento) => setPassword(evento.currentTarget.value)}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="escribe tu contraseña"
                            className="mt-2 p-3 w-full bg-gray-50"/>
                          {passwordError && <p className="text-white bg-red-600 text-center font-bold">{passwordError}</p>}


                            
                        </div>

                        <div className="md-4">
                            <label className="text-slate-800"
                            htmlFor="email">
                              Confirma tu Contraseña:
                            </label>

                            <input 
                            
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            placeholder="escribe tu contraseña"
                            className="mt-2 p-3 w-full bg-gray-50"/>
        
                        </div>

                        <input className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
                        uppercase font-bold cursor-pointer"
                        type="submit"
                        value="Crea tu cuenta"
                        />
                    </form>


                </div>
                <nav className="mt-5">
            <Link to="/auth/Login">¿ tienes cuenta? Iniciar sesíon</Link>

              </nav>
        </>
    )
}