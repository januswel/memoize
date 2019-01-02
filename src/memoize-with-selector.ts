type GenerateId = (args: Array<any>) => string

export default (generateId: GenerateId) => {
  const tables = new Map()

  return (memoizee: (arg: Object) => any, selector: (arg: Object) => Array<any>) => {
    if (!tables.has(memoizee)) {
      tables.set(memoizee, new Map())
    }
    const table = tables.get(memoizee)

    return (arg: Object) => {
      const args = selector(arg)
      if (args.length === 0) {
        return memoizee(arg)
      }

      const id = generateId(args)
      if (table.has(id)) {
        return table.get(id)
      }

      const result = memoizee(arg)
      table.set(id, result)
      return result
    }
  }
}
