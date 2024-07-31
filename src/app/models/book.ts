// app/models/Book.ts
import { knex } from 'knex';
import knexConfig from '../../knexfile';

const environment = process.env.NODE_ENV || 'development';
const db = knex(knexConfig[environment]);

const Book = {
    getAll: (page: number, limit: number) => {
        const offset = (page - 1) * limit;
        return db('books')
            .join('authors', 'books.author_id', 'authors.id')
            .select(
                'books.id',
                'books.title',
                'books.description',
                'books.published_date',
                'books.author_id',
                'authors.name as author_name',
                'authors.bio as author_bio',
                'authors.birthdate as author_birthdate'
            )
            .limit(limit)
            .offset(offset);
    },
    getById: (id: number) => {
        return db('books')
            .join('authors', 'books.author_id', 'authors.id')
            .select(
                'books.id',
                'books.title',
                'books.description',
                'books.published_date',
                'books.author_id',
                'authors.name as author_name',
                'authors.bio as author_bio',
                'authors.birthdate as author_birthdate'
            )
            .where('books.id', id)
            .first();
    },
    create: (book: { title: string, description?: string, published_date: string, author_id: number }) => db('books').insert(book).returning('*'),
    update: (id: number, book: Partial<{ title: string, description?: string, published_date: string, author_id: number }>) => db('books').where({ id }).update(book).returning('*'),
    delete: (id: number) => db('books').where({ id }).del(),
};

export default Book;
