# SPFx React Jest Demo

SPFx 1.8.2 example running **React** and **Jest**.
    
Execute tests
```bash
npm test  
npm run test:watch
```

### Changes made to standard SPFx

```javascript
// package.json
"devDependencies": {
    "@microsoft/rush-stack-compiler-3.3": "^0.2.15",
    "@voitanos/jest-preset-spfx-react16": "^1.2.0",
    "inline-css": "^2.4.2",
    "jest-trx-results-processor": "^0.1.0",
    "typescript": "3.3"
    ...
}
```

```javascript
// tsconfig.json
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-3.3/includes/tsconfig-web.json",
  "compilerOptions": {
    "esModuleInterop": true,
  }
}
```

### Optional
If you are working with Office UI Fabric, you might need this.
```javascript
// jest.config.json
{
  "moduleNameMapper": {
    "office-ui-fabric-react/lib/(.*)$": "office-ui-fabric-react/lib-commonjs/$1"
  }
}
```