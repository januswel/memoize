import deepMemoizeOnceWithSelector from './deep-memoize-once-with-selector'
import { store, filter, selector, Store } from './fixtures'

describe('deepMemoizeOnceWithSelector', () => {
  it('returns function to memoize once', () => {
    const filteredTodos = deepMemoizeOnceWithSelector(filter, selector)

    expect(typeof filteredTodos).toBe('function')
    const newers = filteredTodos(store)
    expect(newers.length).toBe(2)
    expect(filteredTodos(store)).toBe(newers)

    const sameStore: Store = {
      ...store,
    }
    expect(filteredTodos(sameStore)).toBe(newers)

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
    const anotherNewers = filteredTodos(store3)
    expect(anotherNewers).toEqual(newers)
    expect(anotherNewers).not.toBe(newers)

    const store4: Store = {
      ...store,
      filterConditions: {
        ...store.filterConditions,
        operator: 'olderThan',
      },
    }
    const anotherOlders = filteredTodos(store4)
    expect(anotherOlders).toEqual(olders)
    expect(anotherOlders).not.toBe(olders)
  })
})
