import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
const queryString = process.env.DATABASE_URL as string;
export const connection = postgres(queryString);

export const db = drizzle(connection);