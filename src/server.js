import app from './app.js';

const PORT = 3000;

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
