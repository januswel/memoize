import equals from './utils/equals'

let previous: Array<any>
let result: any

type Memoizee = (...args: Array<any>) => any
type Memoized = Memoizee
export default (memoizee: Memoizee): Memoized => {
  return (...args: Array<any>) => {
    if (previous && equals(previous, args)) {
      return result
    }

    previous = args.slice()
    result = memoizee.apply(null, args)
    return result
  }
}
