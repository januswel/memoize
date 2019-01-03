# memoize v0.4.1

Exports functions to memoize functions with / without selectors.

## Usage

See the `*.test.ts` files.

## Exported functions

|                               | shallowly     | deeply            |
|-------------------------------|---------------|-------------------|
| **cache all args**            | `memoize`     | `deepMemoize`     |
| **cache only previous args**  | `memoizeOnce` | `deepMemoizeOnce` |

### With selector

Selector is a function to select arbitrary properties from any objects. Selected properties by selector are used as arguments for memoized function.

```javascript
const selector = obj => [obj.foo, obj.bar]
```

`*WithSelector` are available to memoize with selector.
