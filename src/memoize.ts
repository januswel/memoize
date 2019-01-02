type GenerateId = (args: Array<any>) => string

export default (generateId: GenerateId) => {
  const tables = new Map()

  return (memoizee: Function): any => {
    if (!tables.has(memoizee)) {
      tables.set(memoizee, new Map())
    }
    const table = tables.get(memoizee)

    return (...args: Array<any>): any => {
      const id = generateId(args)

      if (table.has(id)) {
        return table.get(id)
      }

      const result = memoizee.apply(null, args)
      table.set(id, result)
      return result
    }
  }
}
