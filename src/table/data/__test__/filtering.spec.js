import { filterRowsOnField } from '@data/filtering'

import { rowData } from '@examples/boringExample'

describe('Filtering tests', () => {
  it('Filters text rows', () => {
    expect(
      filterRowsOnField({ rows: [...rowData], field: 'name', value: 'Pi' }).map(
        ({ name }) => name
      )
    ).toEqual(['Pigeon', 'Piggie'])
  })
  it('Filters text rows case insensitively', () => {
    expect(
      filterRowsOnField({ rows: [...rowData], field: 'name', value: 'pi' }).map(
        ({ name }) => name
      )
    ).toEqual(['Pigeon', 'Piggie'])
  })
  it('Filters numerical rows', () => {
    expect(
      filterRowsOnField({
        rows: [...rowData],
        field: 'friends',
        value: 1
      }).map(({ name }) => name)
    ).toEqual(['Pigeon'])
  })
  it('Filters boolean rows', () => {
    expect(
        filterRowsOnField({
        rows: [...rowData],
        field: 'introverted',
        value: true
      }).map(({ name }) => name)
    ).toEqual(['Gerald'])
  })
})
