import * as assert from 'assert'
import createSelector from './create-selector'

describe('createSelector', () => {
  it('returns memoized function', () => {
    const add = createSelector(
      ({ a, b }) => a + b,
      ['a', 'b'],
    )
    assert(typeof add === 'function')
    assert(add({ a: 1, b: 3 }) === 4)
    assert(add({ a: 1, b: 3 }) === 4)
    assert(add({ a: -394, b: 4858 }) === 4464)
  })

  it('throws list of argument names is empty', () => {
    assert.throws(() => {
      createSelector(
        () => {},
        [],
      )
    })
  })
})
