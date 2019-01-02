import memoize from './memoize'

describe('memoize', () => {
  it('returns memoized function', () => {
    const n = memoize(() => {})
    const foo = n()

    const add = memoize((a: { n: number }, b: { n: number }) => ({ n: a.n + b.n }))
    expect(typeof add).toBe('function')

    const one = { n: 1 }
    const two = { n: 2 }
    const oneTwo = add(one, two)
    expect(add(one, two)).toBe(oneTwo)

    const twoOne = add(two, one)
    expect(twoOne).toEqual(oneTwo)
    expect(twoOne).not.toBe(oneTwo)
  })
})
