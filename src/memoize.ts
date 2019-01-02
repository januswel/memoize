import getId from './utils/get-id'

const tables = new Map()

export default (memoizee: Function): any => {
  if (!tables.has(memoizee)) {
    tables.set(memoizee, new Map())
  }
  const table = tables.get(memoizee)

  return (...args: Array<any>): any => {
    const id = args
      .map(arg => {
        const type = typeof arg
        return type === 'function' || type === 'object' ? getId(arg) : arg
      })
      .join(',')

    if (table.has(id)) {
      return table.get(id)
    }

    const result = memoizee.apply(null, args)
    table.set(id, result)
    return result
  }
}
