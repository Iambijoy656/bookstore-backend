/* eslint-disable @typescript-eslint/consistent-type-definitions */

import knex from 'knex';
import knexConfig from '../../knexfile';

const environment = process.env.NODE_ENV || 'development';
const config = knexConfig[environment];

const db = knex(config);



export default {
    getAll: () => db('books').select('*'),
    getById: (id: number) => db('books').where({ id }).first(),
    create: (book: object) => db('books').insert(book).returning('*'),
    update: (id: number, book: object) => db('books').where({ id }).update(book).returning('*'),
    delete: (id: number) => db('books').where({ id }).del(),
    getByAuthorId: (authorId: number) => db('books').where({ author_id: authorId })
};