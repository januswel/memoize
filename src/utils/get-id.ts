let currentId = 0
const table = new WeakMap()

export default (obj: Object): number => {
  if (table.has(obj)) {
    return table.get(obj)
  }

  table.set(obj, ++currentId)
  return currentId
}
