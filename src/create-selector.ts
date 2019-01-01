const tables = new Map()

export default (memoizee: Function, properties: Array<string>) => {
  if (properties.length === 0) {
    throw new Error('Specify some property names as 2nd argument')
  }
  if (!tables.has(memoizee)) {
    tables.set(memoizee, new Map())
  }
  const table = tables.get(memoizee)

  return (argument: { [key: string]: any }) => {
    const values = properties.map(property => {
      const value = argument[property]
      if (value == null) {
        throw new Error(`Required parameter ${property} is missing`)
      }
      return value
    })

    const id = JSON.stringify(values)
    if (table.has(id)) {
      return table.get(id)
    }

    const result = memoizee(argument)
    table.set(id, result)
    return result
  }
}
