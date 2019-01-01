const tables = new Map()

export default (memoizee: Function, properties: Array<string>) => {
  if (properties.length === 0) {
    throw new Error('Specify some property names as 2nd argument')
  }
  if (!tables.has(memoizee)) {
    tables.set(memoizee, new Map())
  }
  const table = tables.get(memoizee)

  return (argument: Object) => {
    const values = properties.map(property => {
      const value = argument[property]
      if (value == null) {
        throw new Error(`Required parameter ${property} is missing`)
      }
      return value
    })

    if (table.has(values)) {
      return table.get(values)
    }

    const result = memoizee(argument)
    table.set(values, result)
    return result
  }
}
