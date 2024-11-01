import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	name: text('name').unique(),
	active: boolean('active'),
	creationTimestamp: timestamp('creationTimestamp').defaultNow(),
});
