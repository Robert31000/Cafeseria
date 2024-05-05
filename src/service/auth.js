
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

  fetch(`${apiUrl}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        response.json().then(value => {
          console.log(value.token);
          // Aquí puedes manejar el token de sesión devuelto por el backend
        }).catch(error => {
          console.error('Error al intentar leer');
        });
      } else {
        console.error('Error al iniciar sesión');
      }
    })
    .catch(error => {
      console.error('Error de red:', error);
    });
}
