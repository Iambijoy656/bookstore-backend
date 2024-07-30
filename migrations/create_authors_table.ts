// migrations/xxxxxx_create_authors_table.ts
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('authors', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('bio');
        table.string('birthdate').notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('authors');
}
