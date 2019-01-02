import equals from './utils/equals'

let previous: Array<any>
let result: any

type Memoizee = (arg: Object) => any
type Memoized = Memoizee
type Selector = (arg: Object) => Array<any>

export default (memoizee: Memoizee, selector: Selector): Memoized => {
  return (arg: Object) => {
    const args = selector(arg)
    if (previous && equals(previous, args)) {
      return result
    }

    previous = args.slice()
    result = memoizee(arg)
    return result
  }
}
