# memoize v0.2.1

Exports functions to memoize functions with / without selectors.

## Usage

```typescript
import { deepMemoize, memoizeWithSelectors } from '@januswel/memoize'

const deepMemoized = deepMemoize((a, b) => a + b)
const selector = memoizeWithSelectors(
  (store) => store.todos.filter(todo => todo.isCompleted).length,
  (store) => [store.todos]
)
```
