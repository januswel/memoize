const tables = new Map()

export default <T>(memoizee: (arg: T) => any, createSelectors: (arg: T) => Array<any>) => {
  if (!tables.has(memoizee)) {
    tables.set(memoizee, new Map())
  }
  const table = tables.get(memoizee)

  return (arg: T) => {
    const selectors = createSelectors(arg)
    if (selectors.length === 0) {
      return memoizee(arg)
    }

    const id = JSON.stringify(selectors)
    if (table.has(id)) {
      return table.get(id)
    }

    const result = memoizee(arg)
    table.set(id, result)
    return result
  }
}