import memoizeWithSelector from './memoize-with-selector'
import generateId from './utils/generate-id-shallowly'

export default memoizeWithSelector(generateId)
