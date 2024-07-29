/* eslint-disable no-console */
import app from './app';
import config from './config';
import { Server } from 'http';

process.on('uncaughtException', error => {
  console.error(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    // Ensure Knex is connected
    const knex = app.get('knex');
    await knex.raw('select 1+1 as result');

    console.log('Database is connected successfully');

    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.error('Failed to connect database', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();


