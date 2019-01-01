# memoize v0.0.1

export functions to memoize and create selector

## Usage

```typescript
import { memoize, createSelector } from '@januswel/memoize'

const memoized = memoize((a, b) => a + b)
const selector = createSelector((store) => store.todos.filter(todo => todo.isCompleted).length, ['todos'])
```
