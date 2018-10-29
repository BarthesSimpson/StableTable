export const sortRowsByField = ({ rows, field, descending = false }) => {
  /**
   * Crude attempt to sort efficiently
   * for a range of different data types
   * @param {Array<Row>} rows - the row data
   * @param {String} field - the field on which to sort
   * @param {Boolean} descending - sort ascending unless this is true
   * @returns {{Array<Row>}}  - the sorted data
   */

  const dataType = inferDataType({ rows, field })
  switch (dataType) {
    case 'string':
      if (descending) {
        return rows.sort(({ [field]: a }, { [field]: b }) => b.localeCompare(a))
      } else {
        return rows.sort(({ [field]: a }, { [field]: b }) => a.localeCompare(b))
      }
    default:
      if (descending) {
        return rows.sort(({ [field]: a }, { [field]: b }) => b - a)
      } else {
        return rows.sort(({ [field]: a }, { [field]: b }) => a - b)
      }
  }
}

const inferDataType = ({ rows, field }) => {
  /**
   * Infer the data type by getting the first non-falsy
   * datum using the field accessor on each row and
   * checking its type. If all fields are falsy, fall
   * back to Boolean.
   * @param {Array<Row>} rows - the row data
   * @param {String} field - the field for which the type should be checked
   * @returns {Type}
   */
  for (let i = 0; i < rows.length; i++) {
    const datum = rows[i][field]
    if (!!rows[i][field]) {
      return typeof datum
    }
    return 'boolean'
  }
}
