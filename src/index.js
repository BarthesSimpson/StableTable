import React from 'react'
import ReactDOM from 'react-dom'

import Table from '@table'
import { rowData, colDefs } from '@examples/boringExample'

const example = (
  <div style={{ maxWidth: '100%' }}>
    <Table rowData={rowData} colDefs={colDefs} />
  </div>
)

ReactDOM.render(example, document.getElementById('vortex'))
