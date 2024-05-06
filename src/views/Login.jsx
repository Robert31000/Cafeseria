import { register, login } from "../service/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"



export default function Login()
{
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')

    const [error, setError]=useState('')
    const navigate = useNavigate();

    const validateForm = () => {
        if (!username.trim()) {
          setError('Por favor ingresa tu nombre de usuario');
          return false;
        }
        if (!password.trim()) {
          setError('Por favor ingresa tu contraseña');
          return false;
        }
        return true;
      };
    
      const loginUser = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
          return;
        }
        const data = {
          password: password,
          username: username
        };
        try {
          const token = await login(data);
          localStorage.setItem("token", token);
          console.log("Token almacenado en localStorage:", token);
          // Manejar la redirección u otras acciones después del inicio de sesión exitoso
          navigate('/'); // Redirigir al usuario a la página principal
        } catch (error) {
          console.error("Error al iniciar sesión:", error);
          setError("Credenciales incorrectas");
        }
      };

      

    return(
        <>
        <h1 className="text-4xl font-black">Iniciar sesíon</h1>
        <p>Para crear pedido debes iniciar sesíon</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form onSubmit={loginUser}>
                <div className="md-4">
                    <label className="text-slate-800"
                    htmlFor="email">
                        nombre de usuario
                    </label>

                    <input 
                      defaultValue={username}
                      onChange={(evento) => setUsername(evento.currentTarget.value)}
                    type="text"
                    id="username"
                    name="username"
                    placeholder="escribe tu correo"
                    className="mt-2 p-3 w-full bg-gray-50"/>

                    
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

                    
                </div>

                {error && <p className="text-white bg-red-600 font-bold text-center mt-2">{error}</p>}

                <input className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
                uppercase font-bold cursor-pointer"
                type="submit"
                value="Iniciar sesíon"
                />
            </form>
        </div>
        <nav className="mt-5">
            <Link to="/auth/Registro">¿No tienes cuenta? Crea una</Link>

        </nav>
</>
    )
}