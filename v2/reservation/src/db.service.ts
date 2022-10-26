import { Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class DbService {
  constructor(name: string) {
    this.init(name);
  }

  public client: Client;

  private async init(name: string) {
    const user = 'postgres';
    const database = name;
    const password = 'root';
    const port = 5432;

    this.client = new Client({
      user,
      database,
      password,
      port,
      client_encoding: 'WIN1251',
      ssl: { rejectUnauthorized: false },
    });
    this.client.connect((err) => {
      if (err) {
        console.log('Connection error');
        throw err;
      } else console.log('Connected');
    });
  }
}
