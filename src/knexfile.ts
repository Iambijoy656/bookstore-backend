import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
    development: {
        client: "pg",
        connection: {
            host: "localhost",
            user: "postgres",
            password: "1234",
            database: "bookstore",
            port: 5432,
        },
        migrations: {
            directory: "./migrations",
        },
        seeds: {
            directory: "./seeds",
        },
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: "./migrations",
        },
        seeds: {
            directory: "./seeds",
        },
    },
};

export default config;
