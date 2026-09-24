import { DataSource } from 'typeorm';

// Reuse the DataSource initialized by TypeOrmModule.forRoot in AppModule.
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useExisting: DataSource,
  },
];
