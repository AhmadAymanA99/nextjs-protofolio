const Database = require("better-sqlite3");

// Initialize database
const db = new Database("analytics.db");

// Create table if it doesn't exist
db.prepare(
    `
  CREATE TABLE IF NOT EXISTS page_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path TEXT,
    referrer TEXT,
    user_agent TEXT,
    ip_address TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    country TEXT,
    device_type TEXT
  )
`
).run();

module.exports = db;
