import getId from './get-id'

export default (args: Array<any>): string =>
  args
    .map(arg => {
      const type = typeof arg
      return type === 'function' || type === 'object' ? getId(arg) : arg
    })
    .join(',')
