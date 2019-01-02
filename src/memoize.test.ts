import memoize from './memoize'

describe('memoize', () => {
  it('returns memoized function', () => {
    const memoizedAdd = memoize((a: number, b: number) => ({ answer: a + b }))
    expect(typeof memoizedAdd).toBe('function')
    const oneTwo = memoizedAdd(1, 2)
    expect(memoizedAdd(1, 2)).toBe(oneTwo)

    const twoOne = memoizedAdd(2, 1)
    expect(twoOne).toEqual(oneTwo)
    expect(twoOne).not.toBe(oneTwo)
  })
})
