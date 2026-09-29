import { Pool } from 'pg'
import 'dotenv/config'

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined
})

export default pool