'use strict'

export async function connectDB() {
  try {
    var sql = require("mssql");
    let pool = await sql.connect(config);
    return pool;
  } catch (error) {
    console.error("Database connection failed", error);
    throw new Error("Database connection failed");
  }
}

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // Use encryption (set false if local)
    trustServerCertificate: true, // Required for self-signed certs
  },
};

