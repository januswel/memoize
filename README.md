# memoize v0.2.0

Exports functions to memoize functions with / without selectors.

## Usage

```typescript
import { memoize, memoizeWithSelectors } from '@januswel/memoize'

const memoized = memoize((a, b) => a + b)
const selector = memoizeWithSelectors(
  (store) => store.todos.filter(todo => todo.isCompleted).length,
  (store) => [store.todos]
)
```
