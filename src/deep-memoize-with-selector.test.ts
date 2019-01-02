import deepMemoizeWithSelector from './deep-memoize-with-selector'

const operators = {
  newerThan: (base: Date, target: Date) => base < target,
  olderThan: (base: Date, target: Date) => target < base,
}

interface Store {
  filterConditions: {
    operator: 'newerThan' | 'olderThan'
    operand: any
  }
  todos: Array<{
    title: string
    isCompleted: boolean
    createdAt: Date
  }>
}

const store: Store = {
  filterConditions: {
    operator: 'newerThan',
    operand: new Date(2019, 0, 1, 21, 30, 0),
  },
  todos: [
    {
      title: 'implement memoize',
      isCompleted: true,
      createdAt: new Date(2019, 0, 1, 21, 0, 0),
    },
    {
      title: 'implement memoizeObject',
      isCompleted: true,
      createdAt: new Date(2019, 0, 1, 22, 0, 0),
    },
    {
      title: 'write detailed documents',
      isCompleted: false,
      createdAt: new Date(2019, 0, 1, 23, 0, 0),
    },
  ],
}

const filter = (store: Store) =>
  store.todos.filter(todo => operators[store.filterConditions.operator](store.filterConditions.operand, todo.createdAt))
const selector = (store: Store) => [store.filterConditions, store.todos]

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

  it('always calculates with no selectors', () => {
    const filteredTodos = deepMemoizeWithSelector(filter, () => [])
    const filtered = filteredTodos(store)
    const another = filteredTodos(store)

    expect(another).not.toBe(filtered)
    expect(another).toEqual(filtered)
  })
})
