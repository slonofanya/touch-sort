import _ from 'lodash'

function quick (list, cb) {
  cb(_.sortBy(list))
}

export default quick

