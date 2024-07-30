"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const http_status_1 = __importDefault(require("http-status"));
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("./knexfile"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const environment = process.env.NODE_ENV || 'development';
const knexInstance = (0, knex_1.default)(knexfile_1.default[environment]);
// Make knex instance available throughout your app
app.set('knex', knexInstance);
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Applications routes
app.use('/api/v1/', routes_1.default);
//global error handler
app.use(globalErrorHandler_1.default);
//handle not Found
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        errorMessage: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
    next();
});
exports.default = app;
