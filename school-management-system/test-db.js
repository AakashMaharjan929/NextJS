import { Client } from 'pg';

const client = new Client({
  user: 'aakash',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'school',
});

client.connect()
  .then(() => {
    console.log('✅ Connected to database!');
    client.end();
  })
  .catch(err => {
    console.error('❌ Connection failed:', err.message);
  });