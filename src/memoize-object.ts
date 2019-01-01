const tables = new Map()

export default <T>(memoizee: (arg: T) => any, createSelectors: (arg: T) => Array<any>) => {
  if (!tables.has(memoizee)) {
    tables.set(memoizee, new Map())
  }
  const table = tables.get(memoizee)

  return (argument: T) => {
    const selectors = createSelectors(argument)
    if (selectors.length === 0) {
      return memoizee(argument)
    }

    const id = JSON.stringify(selectors)
    if (table.has(id)) {
      return table.get(id)
    }

    const result = memoizee(argument)
    table.set(id, result)
    return result
  }
}
