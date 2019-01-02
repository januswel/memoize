import getIdForObject from './get-id-for-object'

describe('getIdForObject', () => {
  it('returns id for its argument', () => {
    const target = { a: 1 }
    const id = getIdForObject(target)
    expect(typeof id).toBe('number')
    expect(getIdForObject(target)).toBe(id)
    expect(getIdForObject({ a: 1 })).not.toBe(id)
  })
})
