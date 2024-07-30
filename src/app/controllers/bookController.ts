// app/controllers/bookController.ts
import { Request, Response, NextFunction } from 'express';
import Book from '../models/book';

export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await Book.getAll();
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

export const getBookById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const book = await Book.getById(Number(req.params.id));
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        next(error);
    }
};

export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedBook = await Book.update(Number(req.params.id), req.body);
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        next(error);
    }
};

export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deleted = await Book.delete(Number(req.params.id));
        if (!deleted) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(204).json();
    } catch (error) {
        next(error);
    }
};
