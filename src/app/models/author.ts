// app/models/Author.ts
import { knex } from 'knex';
import knexConfig from '../../knexfile';

const environment = process.env.NODE_ENV || 'development';
const db = knex(knexConfig[environment]);

const Author = {
    getAll: (page: number, limit: number) => {
        const offset = (page - 1) * limit;
        return db('authors')
            .select('id', 'name', 'bio', 'birthdate')
            .limit(limit)
            .offset(offset);
    },
    getById: (id: number) => db('authors').where({ id }).first(),
    create: (author: { name: string, bio?: string, birthdate: string }) => db('authors').insert(author).returning('*'),
    update: (id: number, author: Partial<{ name: string, bio?: string, birthdate: string }>) => db('authors').where({ id }).update(author).returning('*'),
    delete: (id: number) => db('authors').where({ id }).del(),
};

export default Author;
