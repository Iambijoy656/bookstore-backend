import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
import knex from 'knex';
import knexConfig from './knexfile';


const app: Application = express();

app.use(cors());

const environment = process.env.NODE_ENV || 'development';
const knexInstance = knex(knexConfig[environment]);

// Make knex instance available throughout your app
app.set('knex', knexInstance);

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Applications routes
app.use('/api/v1/', routes);


//global error handler
app.use(globalErrorHandler);

//handle not Found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
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

// const academicSemester ={
//   code:'01',
//   year:'2025'
// }
// const testId = async()=>{

//   const testId = await generateFacultyId()
//   console.log(testId)
// }

// testId()

export default app;
