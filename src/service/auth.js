
const apiUrl = 'https://cafeteriabackend-f3mo.onrender.com/'

export function register(data) {
   /* const data = {
        username: 'robert',
        password: 'robert18',
        nombre: 'robert',
        email: 'robert@gmail.com'
      };  */
      console.log(data)
      fetch(`${apiUrl}auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          response.json().then( (value) => {
            console.log(value.token)
          }).catch((error) => {
            console.error('Error al intentar leer');
          })
        } else {
          console.error('Error al registrar');
        }
      })
      .catch(error => {
        console.error('Error de red:', error);
      });
      
}
export function login(data) {
  /* Suponiendo que `data` contiene el nombre de usuario y la contraseña */
  console.log(data);

  return fetch(`${apiUrl}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error al iniciar sesión');
      }
    })
    .then(data => {
      const token = data.token;
      // Almacenar el token en localStorage
      localStorage.setItem('token', token);
      console.log('Token almacenado en localStorage:', token);
      return token;
    })
    .catch(error => {
      console.error('Error de red:', error);
      throw error;
    });

}
