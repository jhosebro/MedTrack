import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();  // Obtener la función de login desde el AuthContext
  const navigate = useNavigate();  // Para redirigir después del login

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); // Reiniciar el estado de error antes de intentar loguearse
    try {
      await login(email, password);  // Intentar loguearse
      navigate('/');  // Redirigir al usuario a la página principal después del login exitoso
    } catch (error) {
      setError('Correo o contraseña incorrectos' + error);  // Mostrar error en caso de fallar el login
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Typography variant="h4" component="h1" align="center">
        Iniciar Sesión
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        label="Correo Electrónico"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />

      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Login
      </Button>
    </Box>
  );
}

export default Login;
