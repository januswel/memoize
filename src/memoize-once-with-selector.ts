import equals from './utils/equals'

let previous: Array<any>
let result: any

type Memoizee = (...args: Array<any>) => any
type Memoized = (arg: any) => any
type Selector = (arg: any) => Array<any>

export default (memoizee: Memoizee, selector: Selector): Memoized => {
  return (arg: Object) => {
    const args = selector(arg)
    if (previous && equals(previous, args)) {
      return result
    }

    previous = args.slice()
    result = memoizee.apply(null, args)
    return result
  }
}
