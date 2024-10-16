import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  url: varchar('url', { length: 255 }).notNull(),
  social: varchar('social', { length: 255 }).notNull(),
});
