let currentId = 0
const table = new WeakMap()

export default (obj: Object): number => {
  if (!table.has(obj)) {
    table.set(obj, ++currentId)
  }

  return table.get(obj)
}
