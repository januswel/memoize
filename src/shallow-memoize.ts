import memoize from './memoize'
import getId from './utils/get-id'

const generateId = (args: Array<any>): string =>
  args
    .map(arg => {
      const type = typeof arg
      return type === 'function' || type === 'object' ? getId(arg) : arg
    })
    .join(',')

export default memoize(generateId)
