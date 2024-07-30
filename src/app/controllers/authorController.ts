// app/controllers/authorController.ts
import { Request, Response, NextFunction } from 'express';
import Author from '../models/author';
import sendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status';
import { IAuthor } from '../interfaces';
import ApiError from '../../errors/ApiError';



export const createAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Author.create(req.body);
        if (Array.isArray(result) && result.length > 0) {
            const newAuthor: IAuthor = result[0];

            if (!result.length) {
                throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Author');
            }

            sendResponse<IAuthor>(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: 'Author created successfully',
                data: newAuthor,
            });
        }
    } catch (error) {
        next(error);
    }
};

export const getAllAuthors = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authors = await Author.getAll();
        // res.status(200).json(authors);
        sendResponse<IAuthor[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Authors Retrieve successfully',
            data: authors,
        });
    } catch (error) {
        next(error);
    }
};

export const getAuthorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const author = await Author.getById(Number(req.params.id));
        if (!author) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Author Not Found');
        }
        sendResponse<IAuthor>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Author Retrieve successfully',
            data: author,
        });
    } catch (error) {
        next(error);
    }
};



export const updateAuthor = async (req: Request, res: Response, next: NextFunction) => {


    try {
        const updatedAuthor = await Author.update(Number(req.params.id), req.body);
        if (Array.isArray(updatedAuthor) && updatedAuthor.length > 0) {
            const author: IAuthor = updatedAuthor[0];

            if (!updatedAuthor.length) {
                throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to update Author');
            }

            sendResponse<IAuthor>(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: 'Author updated successfully',
                data: author,
            });
        }
    } catch (error) {
        next(error);
    }
};

export const deleteAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deleted = await Author.delete(Number(req.params.id));
        if (!deleted) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Author Not Found');
        }
        sendResponse<IAuthor>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Author Deleted successfully',

        });
    } catch (error) {
        next(error);
    }
};
