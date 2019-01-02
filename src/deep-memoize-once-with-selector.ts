import equals from './utils/equals'

let previous: Array<any>
let result: any

type Memoizee = (arg: Object) => any
type Memoized = Memoizee
type Selector = (arg: Object) => Array<any>

export default (memoizee: Memoizee, selector: Selector): Memoized => {
  return (arg: Object) => {
    const ids = selector(arg).map(element => JSON.stringify(element))
    if (previous && equals(previous, ids)) {
      return result
    }

    previous = ids
    result = memoizee(arg)
    return result
  }
}
