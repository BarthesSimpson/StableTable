import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Table from '@table'
import data from '@examples/data/boring'
const { rowData, colDefs } = data

const testTable = () => <Table rowData={rowData} colDefs={colDefs} />
afterEach(cleanup)

describe('TitleRow tests', () => {
  it('Sorts ascending when user clicks column header', () => {
    const { getByText, container } = render(testTable())
    fireEvent.click(getByText('Name'))
    const rows = Array.from(container.querySelectorAll('tr'))
    const names = rows
      .map(row => row.querySelectorAll('td')[1])
      .filter(cell => !!cell)
      .map(cell => cell.innerHTML)
    expect(names).toEqual(['Gerald', 'Pigeon', 'Piggie'])
  })
  it('Sorts descending when user clicks column header a second time', () => {
    const { getByText, container } = render(testTable())
    fireEvent.click(getByText('Name'))
    fireEvent.click(getByText('Name'))
    const rows = Array.from(container.querySelectorAll('tr'))
    const names = rows
      .map(row => row.querySelectorAll('td')[1])
      .filter(cell => !!cell)
      .map(cell => cell.innerHTML)
    expect(names).toEqual(['Piggie', 'Pigeon', 'Gerald'])
  })
})
