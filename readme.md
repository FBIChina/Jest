# Init project
- `npm init`
- install jest: `yarn add --dev jest`
- `mkdir src`
    - create a sum.js file 
    ```javascript
        function sum(a, b) {
            return a + b;
        }
        module.exports = sum;
    ```
    - create a file named sum.test.js
    ```javascript
        const sum = require('./sum');

        test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
        });
    ```

- Add the following section to your package.json:
```json
{
  "scripts": {
    "test": "jest"
  }
}
```
- run yarn test or npm run test and Jest will print this message:
```shell
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```
> you can view all steps above in https://jestjs.io/docs/en/getting-started


# support es6 
- `yarn add --dev babel-jest @babel/core @babel/preset-env`

- babel.config.js
```javascript
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

>  reference documentation: https://jestjs.io/docs/en/getting-started#using-babel

# support TypeScript 
- yarn add --dev @babel/preset-typescript
- babel.config.js
```javascript
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
+    '@babel/preset-typescript',
  ],
};
```

>  reference documentation: https://jestjs.io/docs/en/getting-started#using-typescript. Maybe you need to install @types/jest

