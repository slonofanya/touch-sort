import _ from 'lodash'

export default (list, cb) => {
  const result = _.clone(list)

  _.forEach(result, (item, j) => {
    _.forEachRight(result, (item, i) => {
      if (item < result[i-1]) {
        result[i] = result[i-1]
        result[i-1] = item
        cb(_.clone(result), item, j + i)
      }
    })
  })
}

