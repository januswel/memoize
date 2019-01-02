import memoizeWithSelectors from './memoize-with-selectors'
import generateId from './utils/generate-id-shallowly'

export default memoizeWithSelectors(generateId)
