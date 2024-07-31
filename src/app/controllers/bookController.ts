// app/controllers/bookController.ts
import { Request, Response, NextFunction } from 'express';
import Book from '../models/book';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';
import { IBook } from '../interfaces';
import sendResponse from '../../shared/sendResponse';




export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newBook = await Book.create(req.body);
        if (Array.isArray(newBook) && newBook.length > 0) {
            const book: IBook = newBook[0];

            if (!newBook.length) {
                throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to book');
            }

            sendResponse<IBook>(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: 'Book created successfully',
                data: book,
            });
        }
    } catch (error) {
        next(error);
    }
};



export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = parseInt(req.query.page as string, 10) || 1;
        const limit = parseInt(req.query.limit as string, 10) || 10;
        const books = await Book.getAll(page, limit);
        if (!books.length) {
            throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get books');
        }
        sendResponse<IBook[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Books Retrieve successfully',
            data: books,
        });
    } catch (error) {
        next(error);
    }
};








export const getBookById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const book = await Book.getById(Number(req.params.id));
        if (!book) {
            throw new ApiError(httpStatus.NOT_FOUND, 'book not found');
        }
        sendResponse<IBook[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book Retrieve successfully',
            data: book,
        });
    } catch (error) {
        next(error);
    }
};


export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedBook = await Book.update(Number(req.params.id), req.body);
        if (Array.isArray(updatedBook) && updatedBook.length > 0) {
            const book: IBook = updatedBook[0];

            if (!updatedBook.length) {
                throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to update Book');
            }

            sendResponse<IBook>(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: 'Book updated successfully',
                data: book,
            });
        }
    } catch (error) {
        next(error);
    }
};

export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deleted = await Book.delete(Number(req.params.id));
        if (!deleted) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Not Found');
        }
        sendResponse<IBook>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book Deleted successfully',

        });
    } catch (error) {
        next(error);
    }
};
