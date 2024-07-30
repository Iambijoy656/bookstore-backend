// migrations/xxxxxx_create_books_table.ts
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('books', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description');
        table.date('published_date').notNullable();
        table.integer('author_id').unsigned().notNullable()
            .references('id').inTable('authors').onDelete('CASCADE');
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('books');
}