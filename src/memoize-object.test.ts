import memoizeObject from './memoize-object'

interface Store {
  filter: Date;
  todos: Array<{
    title: string,
    isCompleted: boolean,
    createdAt: Date,
  }>;
}

const store: Store = {
  filter: new Date(2019, 0, 1, 21, 30, 0),
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

const filter = (store: Store) => store.todos.filter(todo => store.filter < todo.createdAt)
const createSelector = (store: Store) => [store.filter, store.todos]

describe('memoizeObject', () => {
  it('returns memoized function', () => {
    const filteredTodos = memoizeObject(filter, createSelector)

    const EXPECTED = [
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
    ]

    expect(typeof filteredTodos).toBe('function')
    const recorded = filteredTodos(store)
    expect(recorded).toEqual(EXPECTED)
    expect(filteredTodos(store)).toBe(recorded)
  })

  it('always calculates with no selectors', () => {
    const filteredTodos = memoizeObject(filter, () => [])
    const filtered = filteredTodos(store)
    const another = filteredTodos(store)

    expect(another).not.toBe(filtered)
    expect(another).toEqual(filtered)
  })
})
