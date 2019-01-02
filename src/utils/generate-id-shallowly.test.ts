import generateIdShallowly from './generate-id-shallowly'

describe('generateIdShallowly', () => {
  it('returns id', () => {
    expect(generateIdShallowly([1])).toBe('n:1')
    expect(generateIdShallowly(['abc'])).toBe('s:abc')
    expect(generateIdShallowly([1, 'abc'])).toBe('n:1,s:abc')
    expect(generateIdShallowly([{ a: 1 }])).toBe('o:1')
    expect(generateIdShallowly([{ a: 1 }])).toBe('o:2')
  })

  it('throws with functions', () => {
    expect(() => generateIdShallowly([() => {}])).toThrow()
    expect(() => generateIdShallowly([1, () => {}])).toThrow()
  })
})
