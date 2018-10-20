import React, { Fragment } from 'react'

import DataStore from '@data/DataStore'

export default ({ rowData, colDefs }) => {
  console.log('stableTable')

  return (
    <DataStore rowData={rowData}>
      {rows => {
        return (
          <Fragment>
            <h3>Hi</h3>
            <table>
              <tbody>
                {rows.map((row, i) => {
                  return (
                    <tr key={i}>
                      <td>Here is the data: {JSON.stringify(row)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Fragment>
        )
      }}
    </DataStore>
  )
}
