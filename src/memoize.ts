const tables = new Map()

export default (memoizee: Function) => {
  if (!tables.has(memoizee)) {
    tables.set(memoizee, new Map())
  }
  const table = tables.get(memoizee)

  return (...args) => {
    const id = JSON.stringify(args)
    console.log(id)
    if (table.has(id)) {
      console.log('hit')
      return table.get(id)
    }

    const result = memoizee.apply(null, args)
    table.set(id, result)
    return result
  }
}
