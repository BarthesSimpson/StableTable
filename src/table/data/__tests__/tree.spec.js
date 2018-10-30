import { applyFiltersToTreeNode, buildRowTree, flattenRows } from '@data/tree'
import { filterRowsOnField } from '@data/filtering'
import data from '@examples/data/treeData'

const {
  rowData,
  tableOptions: { groupBy }
} = data

const rowTree = buildRowTree({ rows: rowData, groupBy })
const filters = {
  name: rows => filterRowsOnField({ rows, field: 'name', value: 'Pi' })
}

describe('Filtering tests', () => {
  it('Filters text rows in tree data', () => {
    const filteredTree = applyFiltersToTreeNode({ node: rowTree, filters })
    const flattened = flattenRows({
      rowTree: filteredTree
    })
    expect(flattened.map(({ name }) => name)).toEqual([
      'Mo Willems Characters',
      'Mammalian',
      'Piggie',
      'Avian',
      'Pigeon'
    ])
  })
})
