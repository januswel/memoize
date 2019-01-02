import getIdForObject from './get-id-for-object'

export default (args: Array<any>): string =>
  args
    .map(arg => {
      const type = typeof arg
      return type === 'function' || type === 'object' ? getIdForObject(arg) : arg
    })
    .join(',')
