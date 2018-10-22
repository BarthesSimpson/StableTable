export const filterRowsOnField = ({ rows, field, value = '' }) => {
  /**
   * Simple filtering
   * @param {Array<Row>} rows - the row data
   * @param {String} field - the field on which to sort
   * @param {String|Number|Boolean} value - the value to filter on
   * @returns {{Array<Row>}}  - the filtered data
   */

  if (!value) {
    return rows
  }

  // filtering is always case insensitive
  const filterValue = value.toString().toLowerCase()

  return rows.filter(
    ({ [field]: datum }) =>
      datum
        ? datum
            .toString()
            .toLowerCase()
            .includes(filterValue)
        : false
  )
}
