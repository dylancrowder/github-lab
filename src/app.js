import express from 'express';

const app = express();

app.use(express.json());

// Define el endpoint
app.get('/api/hello', (req, res) => {
    res.status(200).json({ message: 'si funciona ahora' });
});

export default app;
