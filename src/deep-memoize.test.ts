import deepMemoize from './deep-memoize'

describe('memoize', () => {
  it('returns memoized function with no arguments', () => {
    const nop = deepMemoize(() => ({}))
    expect(typeof nop).toBe('function')
    const empty = nop()
    expect(nop()).toBe(empty)
  })

  it('returns memoized function with some arguments', () => {
    const add = deepMemoize((a: number, b: number) => ({ answer: a + b }))
    expect(typeof add).toBe('function')
    const oneTwo = add(1, 2)
    expect(add(1, 2)).toBe(oneTwo)

    const twoOne = add(2, 1)
    expect(twoOne).toEqual(oneTwo)
    expect(twoOne).not.toBe(oneTwo)
  })
})
