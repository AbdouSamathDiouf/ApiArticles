const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');
const commentRouter = require('./routers/commentRouter');
const categoryRouter = require('./routers/categoryRouter');

const app = express();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Middleware pour les routes des utilisateurs
app.use('/api', userRouter);

// Middleware pour les routes des articles
app.use('/api', postRouter);

// Middleware pour les routes des commentaires
app.use('/api', commentRouter);

// Middleware pour les routes des catégories
app.use('/api', categoryRouter);

// Middleware pour gérer les erreurs 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Middleware pour gérer les erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Démarrer le serveur Express
    app.listen(8888, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
