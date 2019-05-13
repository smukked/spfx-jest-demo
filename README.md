# SPFx React Jest Demo

SPFx example running **React** and **Jest**.
    
Execute tests
```bash
npm test  
npm run test:watch
```

### Changes made to standard SPFx

```javascript
// package.json
"devDependencies": {
    "@microsoft/rush-stack-compiler-3.3": "^0.2.13",
    "@types/jest": "^24.0.12",
    "@types/enzyme": "^3.9.1",
    "@voitanos/jest-preset-spfx-react16": "^1.1.0",
    "jest": "^23.6.0",
    "typescript": "3.3"
    ...
}
```

```javascript
// tsconfig.json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "types": [
      "es6-promise",
      "webpack-env",
      "jest"
    ]
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