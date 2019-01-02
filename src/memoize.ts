import getId from './utils/get-id'

const tables = new Map()

export default (memoizee: (first: any, ...rest: Array<any>) => any): any => {
  if (!tables.has(memoizee)) {
    tables.set(memoizee, new Map())
  }
  const table = tables.get(memoizee)

  return (first: any, ...rest: Array<any>): any => {
    const args = [first].concat(rest)
    console.log(first, rest)

    const id = args
      .map(arg => {
        const type = typeof arg
        return type === 'function' || type === 'object' ? getId(arg) : arg
      })
      .join(',')

    if (table.has(id)) {
      return table.get(id)
    }

    const result = memoizee.apply(null, [first, rest])
    table.set(id, result)
    return result
  }
}
