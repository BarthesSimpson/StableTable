import React from 'react'
import ReactDOM from 'react-dom'

import Table from '@table'
import { rowData, colDefs } from '@examples/boringExample'

const example = <Table rowData={rowData} colDefs={colDefs} />

ReactDOM.render(example, document.getElementById('vortex'))
