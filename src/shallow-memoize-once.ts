import equals from './utils/equals'

const table = new Map()

type Memoizee = (...args: Array<any>) => any
type Memoized = Memoizee

export default (memoizee: Memoizee): Memoized => (...args: Array<any>) => {
  if (!table.has(memoizee)) {
    table.set(memoizee, { previous: null, result: null })
  }
  const cache = table.get(memoizee)

  if (cache.previous && equals(cache.previous, args)) {
    return cache.result
  }

  cache.previous = args.slice()
  cache.result = memoizee.apply(null, args)
  return cache.result
}
