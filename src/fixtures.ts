const operators = {
  newerThan: (base: Date, target: Date) => base < target,
  olderThan: (base: Date, target: Date) => target < base,
}

interface FilterConditions {
  operator: 'newerThan' | 'olderThan'
  operand: any
}
type Todos = Array<{
  title: string
  isCompleted: boolean
  createdAt: Date
}>

export interface Store {
  filterConditions: FilterConditions
  todos: Todos
}

export const store: Store = {
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

export const filter = (filterConditions: FilterConditions, todos: Todos) =>
  todos.filter(todo => operators[filterConditions.operator](filterConditions.operand, todo.createdAt))
export const selector = (store: Store) => [store.filterConditions, store.todos]
