import { Client, QueryConfig } from 'pg';

let query: (query: string | QueryConfig<any[]>, values: any) => Promise<any[]>;

try {
  const consumer = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'waiter',
  });

  consumer.connect();

  query = async (query: string | QueryConfig<any[]>, values: any) => {
    const { rows } = await consumer.query(query, values);
    return rows;
  };
} catch (error) {
  console.log(error);
}

export { query };
