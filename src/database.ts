import { createPool, Pool } from "mysql2/promise";

export default async function connect(): Promise<Pool> {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: process.env.db_pass,
    database: "mysql_ts_api",
    connectionLimit: 10,
  });
  console.log("MySQL connected");
  return connection;
}
