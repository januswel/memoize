import equals from './utils/equals'

let previous: Array<any>
let result: any

type Memoizee = (...args: Array<any>) => any
type Memoized = (arg: any) => any
type Selector = (arg: any) => Array<any>

export default (memoizee: Memoizee, selector: Selector): Memoized => {
  return (arg: Object) => {
    const args = selector(arg)
    const ids = args.map(element => JSON.stringify(element))
    if (previous && equals(previous, ids)) {
      return result
    }

    previous = ids
    result = memoizee.apply(null, args)
    return result
  }
}
