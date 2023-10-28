import axios from "axios";

export default async function ram(email, password) {
  try {
            const API_URL = 'https://school-dev-6d242b4deb31.herokuapp.com/api/auth/login';
            const response = await axios.post(API_URL, {
                email,
                password,
            });
            console.log('Usuario Conectado', response.data);
            // Puedes realizar acciones adicionales con la respuesta del servidor aquí
        } catch (error) {
            console.error('Error en la solicitud:', error);
            // Puedes manejar errores específicos aquí si es necesario
            throw new Error('No se pudo conectar al servidor');
        }
}
