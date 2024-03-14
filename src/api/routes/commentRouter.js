const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');

// Routes pour les commentaires
router.post('/comments', CommentController.createComment);
router.get('/comments', CommentController.getAllComments);
router.get('/comments/:id', CommentController.getCommentById);
router.put('/comments/:id', CommentController.updateComment);
router.delete('/comments/:id', CommentController.deleteComment);

module.exports = router;
