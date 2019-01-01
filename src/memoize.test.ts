import memoize from './memoize'

describe('memoize', () => {
  it('returns memoized function', () => {
    const memoizedAdd = memoize((a: number, b: number) => a + b)
    expect(typeof memoizedAdd).toBe('function')
    expect(memoizedAdd(1, 3)).toBe(4)
    expect(memoizedAdd(1, 3)).toBe(4)
    expect(memoizedAdd(-394, 4858)).toBe(4464)
  })
})
