# React Testing with TS + Jest + React Testing Library

Topics:
* JEST
* React Testing Library
* JEST + TS Integration
* Unit testing examples


## JEST Installation

[Jest](https://jestjs.io/) required some configuration steps to use in React + TS environments.

### 1. Check and install missing dependencies

```bash
npm install @types/jest @testing-library/react @testing-library/jest-dom
```
These dependencies usually are installed when we generate a React Typescript Project from CLI.


### 2. Integrate Typescript with Jest

Jest does not support TS by default however we have two options to get it:
1. Install __BABEL__ with this way we will transpile all our tests from ts to js and then Jest runs them --> With this option we lost type-checks
2. Install [TS-JEST](https://kulshekhar.github.io/ts-jest/) 

#### TS-JEST vs BABEL: No type-checking
This is the big PRO of using TypeScript vs Babel, you have type-checking out of the box.

You'll get a more fluent TDD experience (when using ts-jest) since files will be type-checked at the same time they're compiled and ran.

Here TypeScript will throw while Babel won't:

```typescript
const str: string = 42
```
_With Babel, files are transpiled as isolated modules, there is no notion of "project". With TypeScript, files are part of a project and are compiled in that scope._

#### We will use: TS-JEST 
Install:
```bash
npm install --save-dev jest typescript ts-jest @types/jest
```

### 3. Install missing dependencies 

_(Jest 27 set NODE environment as default instead 'jsdom' fro this reason we will get this error: __ReferenceError: global is not defined).__ To fix:_
```bash
npm i jest-environment-jsdom
```

_to  avoid error when components that we can test import svg images --> App.tsx sentence: import logo from './logo.svg';:_
```bash
npm i jest-svg-transformer
```

_to  avoid error when components that we can test import css files --> App.tsx sentence: import './App.css';_
```bash
npm i jest-css-modules
```

### 4. Generate configuration file: jest.config.js in the root directory

Copy this file from our repository or create a new one from cli: [jest-installation](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation)

### 5. Update package.json
```typescript
{
    ...
    "scripts": {
        ...
         "test": "jest --coverage",
         "test:watch": "jest --watch",
    }
}

```

```bash
npm run test
npm run test:watch

```

_Note: when we invoke the command:
npm run test --> it will execute: jest --coverage --> And it will generate a coverage folder with a html report with coverage details_

### 6. check: tsconfig.json has the esModuleInterop flag enabled for compatibility with Jest (and Babel):
```typescript
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}

```
