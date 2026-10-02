import { Pool } from "pg";
import "dotenv/config";

const pool = new Pool(
  process.env.NODE_ENV === "development"
    // Local DB
    ? {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    }

    // Neon DB
    : {
      connectionString: process.env.DB_URL,
      ssl: { rejectUnauthorized: false }
    }
);

export default pool;
