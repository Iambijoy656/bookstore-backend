"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const config = {
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
            directory: path_1.default.join(__dirname, "../migrations"),
        },
        seeds: {
            directory: path_1.default.join(__dirname, "../seeds"),
        },
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: path_1.default.join(__dirname, "../migrations"),
        },
        seeds: {
            directory: path_1.default.join(__dirname, "../seeds"),
        },
    },
};
exports.default = config;
