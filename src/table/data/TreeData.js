import React from 'react'

import { ExpandableTableRow } from '@presentation'

class TreeNode {
  constructor(row) {
    this.children = []
    this.row = row
  }
}
const buildRowTree = ({ rows, groupBy }) => {
  const sortedByLevel = rows.sort(
    ({ parents: a }, { parents: b }) => a.length - b.length
  )
  let root = new TreeNode(null)
  sortedByLevel.forEach(row => {
    let currentNode = root
    // base case -> row with no parents
    if (row.parents.length === 0) {
      currentNode.children.push(new TreeNode(row))
      return
    }
    // row with parents -> traverse the tree and insert at correct place
    for (let i = 0; i < row.parents.length; i++) {
      currentNode = currentNode.children.find(
        ({ row: { [groupBy]: rowId } }) => rowId === row.parents[i]
      )
      if (!currentNode) return
    }
    currentNode.children.push(new TreeNode(row))
  })
  return root
}

const TreeData = ({ rows, groupBy, colDefs }) => {
  const rowTree = buildRowTree({ rows, groupBy })
  // console.log({ rowTree })
  return rowTree.children.map((node, i) => (
    <ExpandableTableRow key={i} colDefs={colDefs} groupBy={groupBy} {...node} />
  ))
}

export default TreeData
