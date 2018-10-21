import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Table from '@table'
import data from '@examples/data/boring'
const { rowData, colDefs } = data

const testTable = () => <Table rowData={rowData} colDefs={colDefs} />
afterEach(cleanup)

describe('FilterBar tests', () => {
  it('Filters rows when user enters filter text', () => {
    const { container } = render(testTable())
    const nameFilter = container
      .querySelectorAll('tr')[1]
      .querySelectorAll('th')[1]
      .querySelector('input')
    fireEvent.change(nameFilter, { target: { value: 'pi' } })
    const rows = Array.from(container.querySelectorAll('tr'))
    const names = rows
      .map(row => row.querySelectorAll('td')[1])
      .filter(cell => !!cell)
      .map(cell => cell.innerHTML)
    expect(names).toEqual(['Pigeon', 'Piggie'])
  })
  it('Removes filter when user clears input', () => {
    const { container } = render(testTable())
    const nameFilter = container
      .querySelectorAll('tr')[1]
      .querySelectorAll('th')[1]
      .querySelector('input')
    fireEvent.change(nameFilter, { target: { value: 'pi' } })
    fireEvent.change(nameFilter, { target: { value: '' } })
    const rows = Array.from(container.querySelectorAll('tr'))
    const names = rows
      .map(row => row.querySelectorAll('td')[1])
      .filter(cell => !!cell)
      .map(cell => cell.innerHTML)
    expect(names).toEqual(['Pigeon', 'Gerald', 'Piggie'])
  })
})
