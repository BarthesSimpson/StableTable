import React from 'react'

import { ExpandableTableRow } from '@presentation'
import { flattenRows } from '@data/tree'

const TreeData = ({ rowTree, groupBy, colDefs }) => {
  return rowTree.children.map((node, i) => (
    <ExpandableTableRow key={i} colDefs={colDefs} groupBy={groupBy} {...node} />
  ))
}

export default TreeData
