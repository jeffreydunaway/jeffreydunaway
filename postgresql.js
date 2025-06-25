const express = require('express');
const { Pool } = require('pg');
const app = express();

app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'dapp_db',
  password: 'your_db_password',
  port: 5432,
});

// Create tables (run once)
async function initDb() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        wallet_address VARCHAR(42) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        tx_hash VARCHAR(66) NOT NULL,
        amount DECIMAL(18, 8) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Tables created successfully');
  } catch (err) {
    console.error('Error creating tables:', err);
  }
}

// API: Register user
app.post('/users', async (req, res) => {
  const { wallet_address } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (wallet_address) VALUES ($1) RETURNING *',
      [wallet_address]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API: Log transaction
app.post('/transactions', async (req, res) => {
  const { wallet_address, tx_hash, amount } = req.body;
  try {
    const user = await pool.query('SELECT id FROM users WHERE wallet_address = $1', [wallet_address]);
    if (user.rows.length === 0) return res.status(404).json({ error: 'User not found' });

    const result = await pool.query(
      'INSERT INTO transactions (user_id, tx_hash, amount) VALUES ($1, $2, $3) RETURNING *',
      [user.rows[0].id, tx_hash, amount]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
initDb().then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});
