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

describe('memoizeObject', () => {
  it('returns memoized function', () => {
    const numofCompleted = memoizeObject(
      (store: Store) => store.todos.filter(todo => todo.isCompleted).length,
      (store: Store) => [store.todos],
    )
    expect(typeof numofCompleted).toBe('function')
    expect(numofCompleted(store)).toBe(2)
    expect(numofCompleted(store)).toBe(2)
  })

  it('returns memoized function', () => {
    const filteredTodos = memoizeObject(
      (store: Store) => store.todos.filter(todo => store.filter < todo.createdAt),
      (store: Store) => [store.filter, store.todos],
    )

    const expected = [
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
    expect(filteredTodos(store)).toEqual(expected)
    expect(filteredTodos(store)).toEqual(expected)
  })

  it('always calculates with no selectors', () => {
    const numofCompleted = memoizeObject(
      (store: Store) => store.todos.filter(todo => todo.isCompleted).length,
      () => [],
    )
    expect(numofCompleted(store)).toBe(2)
    expect(numofCompleted(store)).toBe(2)
    expect(numofCompleted(store)).toBe(2)
    expect(numofCompleted(store)).toBe(2)
  })
})
