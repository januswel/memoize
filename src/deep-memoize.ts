import memoize from './memoize'
import generateDeepId from './utils/generate-deep-id'

export default memoize(generateDeepId)
