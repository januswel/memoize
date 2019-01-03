type GenerateId = (args: Array<any>) => string

type Memoizee = (...args: Array<any>) => any
type Memoized = (arg: any) => any
type Selector = (arg: any) => Array<any>

export default (generateId: GenerateId) => {
  const tables = new Map()

  return (memoizee: Memoizee, selector: Selector): Memoized => {
    if (!tables.has(memoizee)) {
      tables.set(memoizee, new Map())
    }
    const table = tables.get(memoizee)

    return (arg: Object) => {
      const args = selector(arg)
      if (args.length === 0) {
        return memoizee.apply(null, args)
      }

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
