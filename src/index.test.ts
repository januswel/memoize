import * as assert from 'assert'
import memoize from './index'

describe('memoize', () => {
  it('returns memoized function', () => {
    const memoizedAdd = memoize(({ a, b }) => a + b, ['a', 'b'])
    assert(typeof memoizedAdd === 'function')
    assert(memoizedAdd({ a: 1, b: 3 }) === 4)
    assert(memoizedAdd({ a: 1, b: 3 }) === 4)
    assert(memoizedAdd({ a: -394, b: 4858 }) === 4464)
  })

  it('throws list of argument names is empty', () => {
    assert.throws(() => {
      memoize(() => {}, [])
    })
  })
})
