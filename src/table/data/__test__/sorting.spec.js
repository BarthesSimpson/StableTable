import { sortRowsByField } from '@data/sorting'

import { rowData } from '@examples/boringExample'

describe('Sorting tests', () => {
  it('Sorts numbers in ascending order', () => {
    expect(
      sortRowsByField({ rows: [...rowData], field: 'friends' }).map(
        ({ name }) => name
      )
    ).toEqual(['Pigeon', 'Piggie', 'Gerald'])
  })
  it('Sorts numbers in descending order', () => {
    expect(
      sortRowsByField({
        rows: [...rowData],
        field: 'friends',
        descending: true
      }).map(({ name }) => name)
    ).toEqual(['Gerald', 'Piggie', 'Pigeon'])
  })
  it('Sorts strings in ascending order', () => {
    expect(
      sortRowsByField({ rows: [...rowData], field: 'name' }).map(
        ({ name }) => name
      )
    ).toEqual(['Gerald', 'Pigeon', 'Piggie'])
  })
  it('Sorts strings in descending order', () => {
    expect(
      sortRowsByField({
        rows: [...rowData],
        field: 'name',
        descending: true
      }).map(({ name }) => name)
    ).toEqual(['Piggie', 'Pigeon', 'Gerald'])
  })
  it('Sorts booleans in ascending order', () => {
    expect(
      sortRowsByField({ rows: [...rowData], field: 'introverted' }).map(
        ({ name }) => name
      )
    ).toEqual(['Pigeon', 'Piggie', 'Gerald'])
  })
  it('Sorts strings in descending order', () => {
    expect(
      sortRowsByField({
        rows: [...rowData],
        field: 'introverted',
        descending: true
      }).map(({ name }) => name)
    ).toEqual([ 'Gerald', 'Pigeon', 'Piggie',])
  })
})
