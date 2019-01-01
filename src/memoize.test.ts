import * as assert from 'assert'
import memoize from './memoize'

describe('memoize', () => {
  it('returns memoized function', () => {
    const memoizedAdd = memoize((a, b) => a + b)
    assert(typeof memoizedAdd === 'function')
    assert(memoizedAdd(1, 3) === 4)
    assert(memoizedAdd(1, 3) === 4)
    assert(memoizedAdd(-394, 4858) === 4464)
  })
})
