# memoize v0.2.1

Exports functions to memoize functions with / without selectors.

## Usage

See the `*.test.ts` files.

## Exported functions

        | without selector  | with selector
--------|-------------------|---------------------------
shallow | memoize           | memoizeWithSelector
deep    | deepMemoize       | deepMemoizeWithSelector

Selector is a function to select arbitrary properties from any objects. Selected properties by selector are used as arguments for memoized function.

```javascript
const selector = obj => [obj.foo, obj.bar]
```
