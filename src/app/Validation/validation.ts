
import { z, } from 'zod';
import { Request, Response, NextFunction } from 'express';

const authorSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    bio: z.string().optional(),
    birthdate: z.string().refine(val => !isNaN(Date.parse(val)), { message: "Invalid date" }),
});

const bookSchema = z.object({
    title: z.string().nonempty({ message: "Title is required" }),
    description: z.string().optional(),
    published_date: z.string().refine(val => !isNaN(Date.parse(val)), { message: "Invalid date" }),
    author_id: z.number(),
});

export const validateAuthor = (req: Request, res: Response, next: NextFunction) => {
    try {
        authorSchema.parse(req.body);
        next();
    } catch (error) {
        next(error);
    }
};

export const validateBook = (req: Request, res: Response, next: NextFunction) => {
    try {
        bookSchema.parse(req.body);
        next();
    } catch (error) {
        next(error);
    }
};
