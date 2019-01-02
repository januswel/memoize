import equals from './equals'

describe('equals', () => {
  describe('with primitive values', () => {
    it('returns true when passed arguments are the same', () => {
      expect(equals([1], [1])).toBe(true)
      expect(equals(['a'], ['a'])).toBe(true)
      expect(equals([true], [true])).toBe(true)
      expect(equals([1, 'a', true], [1, 'a', true])).toBe(true)
    })

    it('returns false when passed arguments are not same', () => {
      expect(equals([1], [2])).toBe(false)
      expect(equals(['foo'], ['bar'])).toBe(false)
      expect(equals([true], [false])).toBe(false)
      expect(equals([1, 'a', true], [1, 'b', true])).toBe(false)
    })
  })

  describe('with no primitive values', () => {
    it('returns true when references of passed arguments are the same', () => {
      const a = { a: 1 }
      expect(equals([a], [a])).toBe(true)
      expect(equals([a, a], [a, a])).toBe(true)
    })

    it('returns false when references of passed arguments are not same', () => {
      expect(equals([{ a: 1 }], [{ a: 1 }])).toBe(false)
    })
  })
})
