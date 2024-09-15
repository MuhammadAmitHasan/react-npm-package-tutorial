# React NPM Package Tutorial

This repository provides a step-by-step guide on creating and publishing a React component as an NPM package. The example package is a simple login form component built with React.

## Developed Package Link

[react-login-form-package](https://www.npmjs.com/package/react-login-form-package)

## Instructions to create and publish similar package

### 1. Setup

1. Create a new folder for your package.
2. Inside the folder, open terminal and run the command and follow the instruction to create the `package.json` file.

   ```bash
   npm init
   ```

### 2. Prepare Your Component

1. Copy the `src` folder from your React login component. Keep the components and linked files that we want to publish.
2. Delete all global files that are not linked with the component you want to publish.
3. Create an `index.ts` file exporting your component and functions:

   ```typescript
   // index.ts

   // Export the AuthProvider and useAuth hook
   export { AuthProvider, useAuth } from './AuthContext';

   // Export the components
   export { default as Display } from './Display';
   export { default as Login } from './Login';

   // Export the logout function
   export { logout } from './AuthContext';
   ```

### 3. Install Dependencies

1. To get started, install the necessary dependencies for your project. Run the following command to install React, TypeScript, and `tslib`:

   ```bash
   npm install react typescript @types/react tslib --save-dev
   ```

### 4. Compile TypeScript Files

1. Create a tsconfig.json file by running:

   ```bash
   npx tsc --init
   ```

2. Use the following essential configuration for `tsconfig.json`:

   ```json
   {
     "compilerOptions": {
       "target": "es5",
       "lib": ["dom", "dom.iterable", "esnext"],
       "allowJs": true,
       "skipLibCheck": true,
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true,
       "strict": true,
       "forceConsistentCasingInFileNames": true,
       "noFallthroughCasesInSwitch": true,
       "module": "esnext",
       "moduleResolution": "node",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx"
     },
     "include": ["src"]
   }
   ```

### 5. Bundle Using Rollup

1.  Install Rollup and additional plugins:

    ```bash
    npm install rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-peer-deps-external rollup-plugin-postcss @rollup/plugin-terser rollup-plugin-dts --save-dev
    ```

    ### Rollup Plugins

    1. **[@rollup/plugin-node-resolve](https://www.npmjs.com/package/@rollup/plugin-node-resolve)**

    - **Purpose:** Resolves modules from `node_modules` and allows you to use third-party modules in your code.

    2. **[@rollup/plugin-commonjs](https://www.npmjs.com/package/@rollup/plugin-commonjs)**

    - **Purpose:** Converts CommonJS modules to ES6 modules, enabling compatibility with Rollup's ES module system.

    3. **[@rollup/plugin-typescript](https://www.npmjs.com/package/@rollup/plugin-typescript)**

    - **Purpose:** Adds support for TypeScript, allowing Rollup to understand and bundle TypeScript files.

    4. **[rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external)**

    - **Purpose:** Automatically marks peer dependencies as external, so they are not included in the final bundle.

    5. **[@rollup/plugin-terser](https://www.npmjs.com/package/@rollup/plugin-terser)**

    - **Purpose:** Minifies the JavaScript code to reduce the bundle size and improve performance.

    6. **[rollup-plugin-dts](https://www.npmjs.com/package/rollup-plugin-dts)**

    - **Purpose:** Generates TypeScript declaration files (`.d.ts`) to provide type information for your package.

    7. **[rollup-plugin-postcss](https://www.npmjs.com/package/rollup-plugin-postcss)**

    - **Purpose:** Allows you to import and bundle CSS files directly in your JavaScript code. It also supports PostCSS plugins and CSS modules.

2.  Create `rollup.config.js`:

    ```javascript
    import commonjs from '@rollup/plugin-commonjs';
    import resolve from '@rollup/plugin-node-resolve';
    import terser from '@rollup/plugin-terser';
    import typescript from '@rollup/plugin-typescript';
    import dts from 'rollup-plugin-dts';
    import peerDepsExternal from 'rollup-plugin-peer-deps-external';
    import postcss from 'rollup-plugin-postcss';

    const packageJson = require('./package.json');

    export default [
      {
        input: 'src/index.ts',
        output: [
          {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
          },
          {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
          },
        ],
        plugins: [
          peerDepsExternal(),
          resolve(),
          commonjs(),
          typescript({ tsconfig: './tsconfig.json' }),
          terser(),
          postcss(),
        ],
        external: ['react', 'react-dom'],
      },
      {
        input: 'src/index.ts',
        output: [{ file: packageJson.types }],
        plugins: [dts.default()],
        external: [/\.css$/],
      },
    ];
    ```

3.  Add a build script in `package.json`:

    ```json
    {
      "scripts": {
        "build": "rollup -c --bundleConfigAsCjs"
      }
    }
    ```

4.  Build the project:

    ```bash
    npm run rollup
    ```

### 6. Publish to NPM

1.  Login to npm

    ```bash
    npm login
    ```

2.  Publish the package
    ```bash
    npm publish
    ```

## Testing the package

1. Go inside the test folder
2. Open terminal and install packages

   ```bash
   npm install
   ```

3. Inside `app.js` the package I created `react-login-form-package` is used

   ```jsx
   import LoginComponent from 'react-login-form-package';

   function App() {
     return (
       <div>
         <LoginComponent />
       </div>
     );
   }

   export default App;
   ```

4. Run the project using the command

   ```bash
   npm run start
   ```
