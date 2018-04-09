import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.status(200).render('index');
});

app.listen(3000, () => console.log('App running on port 3000'));

export default app;
