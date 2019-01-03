import equals from './utils/equals'

const table = new Map()

type Memoizee = (...args: Array<any>) => any
type Memoized = Memoizee

export default (memoizee: Memoizee): Memoized => (...args: Array<any>) => {
  if (!table.has(memoizee)) {
    table.set(memoizee, { previous: null, result: null })
  }
  const cache = table.get(memoizee)

  const ids = args.map(element => JSON.stringify(element))
  if (cache.previous && equals(cache.previous, ids)) {
    return cache.result
  }

  cache.previous = ids
  cache.result = memoizee.apply(null, args)
  return cache.result
}
