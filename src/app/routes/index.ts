
import { Router } from 'express';
import { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from '../controllers/authorController';
import { getAllBooks, getBookById, createBook, updateBook, deleteBook, getBooksByAuthorId, getBooksBySpecificAuthorId } from '../controllers/bookController';
import { validateAuthor, validateBook } from '../Validation/validation';

const router = Router();

router.get('/authors', getAllAuthors);
router.get('/authors/:id', getAuthorById);
router.post('/authors', validateAuthor, createAuthor);
router.put('/authors/:id', validateAuthor, updateAuthor);
router.delete('/authors/:id', deleteAuthor);

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', validateBook, createBook);
router.put('/books/:id', validateBook, updateBook);
router.delete('/books/:id', deleteBook);

router.get('/authors/:id/books', getBooksByAuthorId);
router.get('/books/author/:id', getBooksBySpecificAuthorId);

export default router;
