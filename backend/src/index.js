import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>TODO: Conectar a la base de datos</h1>");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});