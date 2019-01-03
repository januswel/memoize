import deepMemoizeWithSelector from './deep-memoize-with-selector'
import { store, filter, selector, Store } from './fixtures'

describe('memoizeObject', () => {
  it('returns memoized function', () => {
    const filteredTodos = deepMemoizeWithSelector(filter, selector)

    expect(typeof filteredTodos).toBe('function')
    const newers = filteredTodos(store)
    expect(newers.length).toBe(2)
    expect(filteredTodos(store)).toBe(newers)

    const store2: Store = {
      ...store,
      filterConditions: {
        ...store.filterConditions,
        operator: 'olderThan',
      },
    }
    const olders = filteredTodos(store2)
    expect(olders.length).toBe(1)
    expect(filteredTodos(store2)).toBe(olders)

    const store3: Store = {
      ...store,
      filterConditions: {
        ...store.filterConditions,
        operator: 'newerThan',
      },
    }
    expect(filteredTodos(store3)).toBe(newers)
  })
})
