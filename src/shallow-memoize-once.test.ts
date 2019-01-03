import shallowMemoizeOnce from './shallow-memoize-once'

describe('shallowMemoizeOnce', () => {
  it('returns function to memoize once', () => {
    const add = shallowMemoizeOnce((a, b) => ({ n: a.n + b.n }))

    const one = { n: 1 }
    const two = { n: 2 }

    const oneTwo = add(one, two)
    const twoOne = add(two, one)
    expect(oneTwo).toEqual(twoOne)

    const anotherOneTwo = add(one, two)
    expect(anotherOneTwo).toEqual(oneTwo)
    expect(anotherOneTwo).not.toBe(oneTwo)

    const anotherTwoOne = add(two, one)
    expect(anotherTwoOne).toEqual(twoOne)
    expect(anotherTwoOne).not.toBe(twoOne)
  })
})
