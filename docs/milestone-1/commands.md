EMPTY WORKSPACE

Nx Cli

```bash
npm install -g nx
```

```bash
#WORKSPACE
npx create-nx-workspace@latest --preset=empty
#DOMAIN MODULE
yarn add -D @nrwl/nest
nx g @nrwl/nest:lib domain

#CONSUMER API API
nx g @nrwl/nest:app consumer-api
```

```bash
#Common library
nx g @nrwl/workspace:lib validation --directory=common
nx g @nrwl/workspace:lib validation --directory=utils
```
