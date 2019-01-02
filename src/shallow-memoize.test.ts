import shallowMemoize from './shallow-memoize'

describe('shallowMemoize', () => {
  it('returns memoized function with no arguments', () => {
    const nop = shallowMemoize(() => ({}))
    expect(typeof nop).toBe('function')
    const empty = nop()
    expect(nop()).toBe(empty)
  })

  it('returns memoized function with some arguments', () => {
    const add = shallowMemoize((a: { n: number }, b: { n: number }) => ({ n: a.n + b.n }))
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
