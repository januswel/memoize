import equals from './utils/equals'

const table = new Map()

type Memoizee = (...args: Array<any>) => any
type Memoized = (arg: any) => any
type Selector = (arg: any) => Array<any>

export default (memoizee: Memoizee, selector: Selector): Memoized => (arg: Object) => {
  if (!table.has(memoizee)) {
    table.set(memoizee, { previous: null, result: null })
  }
  const cache = table.get(memoizee)

  const args = selector(arg)
  if (cache.previous && equals(cache.previous, args)) {
    return cache.result
  }

  cache.previous = args.slice()
  cache.result = memoizee.apply(null, args)
  return cache.result
}
