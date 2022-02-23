## Data Layer

- isolated and decoupled module
- typeorm
- project _infrastructure-cms-data_
- run from codebase root
- using typeorm cli
- cwd is _libs/infrastructure/cms-date_
- using environment _apps/consumer-api/.env.local_
- command is defined in "infrastructure-cms-data" project.json

```bash
#Generate a migration
nx migration:generate infrastructure-cms-data-access --name={NameOfTheMigration}

#Apply a migration
nx migration:run infrastructure-cms-data-access
```
