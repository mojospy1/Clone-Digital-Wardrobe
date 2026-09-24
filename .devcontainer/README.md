# Digital Wardrobe Dev Container

Open the repository in VS Code and select **Dev Containers: Reopen in Container**. The container installs the root and NestJS backend dependencies, starts MariaDB, and initializes the `digital_wardrobe` tables from `../sql/digital_wardrobe.sql` the first time the database volume is created.

The NestJS backend connects to MariaDB using the container environment variables. From the repository root, start it with:

```bash
cd backend
npm run start:dev
```

The NestJS API is available on port `3000`. The legacy Express API can be started separately from the repository root with `node backend/server.js`; it listens on port `9000` when `PORT` is not set. MariaDB is reachable from the app container as `db:3306` and from the host on port `3306`.

The credentials in `docker-compose.yml` are local development credentials. Do not reuse them for a deployed environment.
