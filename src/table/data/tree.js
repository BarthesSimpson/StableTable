import clone from 'clone'

class TreeNode {
  constructor(row) {
    this.children = []
    this.row = row
  }
}

export const buildRowTree = ({ rows, groupBy }) => {
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

export const applyFiltersToTreeNode = ({ node, filters }) => {
  /**
   * For each node, if any of its children pass the filters,
   * the node stays; otherwise, it stays or goes based on
   * whether it, itself, passes the filters.
   */
  const { row, children } = node
  // base case -> no children. Just test the row
  if (!children.length) {
    return applyFiltersToRow({ row, filters }) ? node : false
  } else {
    // recursive case -> children. If any child passes, then the parent passes
    // if not, test the filters on the parent directly
    const filteredChildren = children
      .map(child => applyFiltersToTreeNode({ node: child, filters }))
      .filter(child => !!child)
    if (filteredChildren.length) {
      return { ...node, children: filteredChildren }
    } else {
      return applyFiltersToRow({ row, filters })
        ? { ...node, children: [] }
        : false
    }
  }
}

const applyFiltersToRow = ({ row, filters }) => {
  for (let filter in filters) {
    if (!filters[filter]([row]).length) return false
  }

  return true
}

export const flattenRows = ({ rowTree }) => {
  /**
   * Flatten the tree back into an array of rows
   * Mostly just useful for testing.
   */
  const rows = []
  // make a copy to avoid mutating the tree
  const stack = [clone(rowTree)]
  let currNode
  while (stack.length) {
    currNode = stack.pop()
    if (currNode) {
      rows.push(currNode.row)
      currNode.visited = true
      currNode.children.forEach(child => {
        if (!child.visited) {
          stack.push({ ...child })
        }
      })
    }
  }
  return rows.filter(r => !!r)
}
