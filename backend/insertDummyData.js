const { Pool } = require('pg');
require('dotenv').config();
const dummyData = require('./dummyData'); // Import dummy data file

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const insertDummyData = async () => {
  try {
    const client = await pool.connect();
    
    // Create table 'customers' if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        customer_name VARCHAR(100),
        age INT,
        phone VARCHAR(20),
        location VARCHAR(100),
        created_at TIMESTAMP
      )
    `);

    // Insert dummy data into 'customers' table
    for (const data of dummyData) {
      await client.query(`
        INSERT INTO customers (customer_name, age, phone, location, created_at)
        VALUES ($1, $2, $3, $4, $5)
      `, [data.customer_name, data.age, data.phone, data.location, data.created_at_time]);
    }

    // Release the client back to the pool
    client.release();
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // End the pool (close all connections)
    pool.end();
  }
};

insertDummyData();
