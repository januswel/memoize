# memoize v0.0.2

Exports functions to memoize functions.

## Usage

```typescript
import { memoize, memoizeObject } from '@januswel/memoize'

const memoized = memoize((a, b) => a + b)
const selector = memoizeObject(
  (store) => store.todos.filter(todo => todo.isCompleted).length,
  (store) => [store.todos]
)
```
