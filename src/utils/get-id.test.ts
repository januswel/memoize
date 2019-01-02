import getId from './get-id'

describe('getId', () => {
  it('returns id for its argument', () => {
    const target = { a: 1 }
    const id = getId(target)
    expect(typeof id).toBe('number')
    expect(getId(target)).toBe(id)
    expect(getId({ a: 1 })).not.toBe(id)
  })
})
