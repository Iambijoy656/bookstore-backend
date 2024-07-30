import knex from 'knex';
import knexConfig from '../../knexfile';

const environment = process.env.NODE_ENV || 'development';
const config = knexConfig[environment];

const db = knex(config);

export default {
    getAll: () => db('authors').select('*'),
    getById: (id: number) => db('authors').where({ id }).first(),
    create: (author: object) => db('authors').insert(author).returning('*'),
    update: (id: number, author: object) => db('authors').where({ id }).update(author).returning('*'),
    delete: (id: number) => db('authors').where({ id }).del()
};
