import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';

function PrivateRoute({ element, ...props }) {
  const { user, error } = useAuth();

  if (error) {
    // Manejar errores de autenticación
    return <Navigate to="/auth/login" />;
  }

  if (!user) {
    // Redirigir a la página de inicio de sesión si el usuario no está autenticado
    return <Navigate to="/auth/login" />;
  }

  // Renderizar la ruta protegida si el usuario está autenticado
  return <Route {...props} element={element} />;
}

export default PrivateRoute;
