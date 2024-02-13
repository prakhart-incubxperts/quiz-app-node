import sql, { ConnectionPool } from 'mssql';
import { config } from './config';
let pool: ConnectionPool | null = null;

export default async function DBConnection(qry: string) {
  try {
    if (!pool) {
      pool = await new ConnectionPool(config).connect();
      console.log('Connected to SQL Server (Connection Pool).');
    }
    const request = pool.request();
    const result = await request.query(qry);
    return result.recordset;
  } catch (error:any) {
    console.error('Error executing SQL query:', error);
    if (error.code === 'ECONNRESET') {
      console.error('Connection reset. Reconnecting...');
      if (pool) {
        await pool.close();
        pool = null;
      }
      return DBConnection(qry);
    }
    throw error;
  }
} 