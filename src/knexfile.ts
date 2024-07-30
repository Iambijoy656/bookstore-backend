import type { Knex } from "knex";
import path from "path";

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
            directory: path.join(__dirname, "../migrations"),
        },
        seeds: {
            directory: path.join(__dirname, "../seeds"),
        },
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: path.join(__dirname, "../migrations"),
        },
        seeds: {
            directory: path.join(__dirname, "../seeds"),
        },
    },
};

export default config;
