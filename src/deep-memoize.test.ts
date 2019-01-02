import deepMemoize from './deep-memoize'

describe('deepMemoize', () => {
  it('returns memoized function with no arguments', () => {
    const nop = deepMemoize(() => ({}))
    expect(typeof nop).toBe('function')
    const empty = nop()
    expect(nop()).toBe(empty)
  })

  it('returns memoized function with some arguments', () => {
    const add = deepMemoize((a: { n: number }, b: { n: number }) => ({ n: a.n + b.n }))
    expect(typeof add).toBe('function')

    const oneTwo = add({ n: 1 }, { n: 2 })
    expect(add({ n: 1 }, { n: 2 })).toBe(oneTwo)

    const twoOne = add({ n: 2 }, { n: 1 })
    expect(twoOne).toEqual(oneTwo)
    expect(twoOne).not.toBe(oneTwo)
  })
})
