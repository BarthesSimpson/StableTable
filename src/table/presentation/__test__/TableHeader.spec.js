import React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library'
import 'jest-dom/extend-expect'

import Table from '@table'
import { rowData, colDefs } from '@examples/boringExample'

const testTable = () => <Table rowData={rowData} colDefs={colDefs} />
afterEach(cleanup)

describe('TableHeader tests', () => {
  it('Sorts ascending when user clicks column header', () => {
    const { getByText, getByTestId, container, debug, asFragment } = render(
      testTable()
    )
    fireEvent.click(getByText('Name'))
    const rows = Array.from(container.querySelectorAll('tr'))
    const names = rows
      .map(row => row.querySelectorAll('td')[1])
      .filter(cell => !!cell)
      .map(cell => cell.innerHTML)
    expect(names).toEqual(['Gerald', 'Pigeon', 'Piggie'])
  })
  it('Sorts descending when user clicks column header a second time', () => {
    const { getByText, getByTestId, container, debug, asFragment } = render(
      testTable()
    )
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
