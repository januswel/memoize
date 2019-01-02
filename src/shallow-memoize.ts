import memoize from './memoize'
import generateShallowId from './utils/generate-shallow-id'

export default memoize(generateShallowId)
