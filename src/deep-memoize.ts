const tables = new Map()

export default (memoizee: Function) => {
  if (!tables.has(memoizee)) {
    tables.set(memoizee, new Map())
  }
  const table = tables.get(memoizee)

  return (...args: Array<any>) => {
    const id = JSON.stringify(args)
    if (table.has(id)) {
      return table.get(id)
    }

    const result = memoizee.apply(null, args)
    table.set(id, result)
    return result
  }
}
