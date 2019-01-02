import deepMemoizeOnce from './deep-memoize-once'

describe('deepMemoizeOnce', () => {
  it('returns function to memoize once', () => {
    const add = deepMemoizeOnce((a, b) => ({ n: a.n + b.n }))

    const one = { n: 1 }
    const two = { n: 2 }

    const oneTwo = add(one, two)
    expect(add({ n: 1 }, { n: 2 })).toBe(oneTwo)

    const twoOne = add(two, one)
    expect(twoOne).toEqual(oneTwo)

    const anotherOneTwo = add(one, two)
    expect(anotherOneTwo).toEqual(oneTwo)
    expect(anotherOneTwo).not.toBe(oneTwo)

    const anotherTwoOne = add(two, one)
    expect(anotherTwoOne).toEqual(twoOne)
    expect(anotherTwoOne).not.toBe(twoOne)
  })
})
