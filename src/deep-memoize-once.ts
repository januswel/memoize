import equals from './utils/equals'

let previous: Array<any>
let result: any

type Memoizee = (...args: Array<any>) => any
type Memoized = Memoizee
export default (memoizee: Memoizee): Memoized => {
  return (...args: Array<any>) => {
    const ids = args.map(element => JSON.stringify(element))
    if (previous && equals(previous, ids)) {
      return result
    }

    previous = ids
    result = memoizee.apply(null, args)
    return result
  }
}
