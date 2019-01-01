import createSelector from './create-selector'

describe('createSelector', () => {
  it('returns memoized function', () => {
    const add = createSelector(
      ({ a, b }: { a: number, b: number }) => a + b,
      ['a', 'b'],
    )
    expect(typeof add).toBe('function')
    expect(add({ a: 1, b: 3 })).toBe(4)
    expect(add({ a: 1, b: 3 })).toBe(4)
    expect(add({ a: -394, b: 4858 })).toBe(4464)
  })

  it('throws list of argument names is empty', () => {
    expect(() => {
      createSelector(
        () => {},
        [],
      )
    }).toThrow()
  })
})
