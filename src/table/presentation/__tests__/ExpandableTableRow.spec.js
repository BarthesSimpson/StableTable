import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Table from '@table'
import data from '@examples/data/treeData'

const testTable = () => <Table {...data} />
afterEach(cleanup)

describe('TreeData tests', () => {
  it('Expands a collapsed row when the user clicks the expand icon', () => {
    const { container, getByText } = render(testTable())
    const expandableCell = getByText('Mo Willems Characters')
    expect(container).not.toHaveTextContent('Avian')
    const icon = expandableCell.querySelector('i')
    fireEvent.click(icon)
    expect(container).toHaveTextContent('Avian')
  })

  it('Collapses an expanded row when the user clicks the collapse icon', () => {
    const { container, getByText } = render(testTable())
    const expandableCell = getByText('Mo Willems Characters')
    const icon = expandableCell.querySelector('i')
    fireEvent.click(icon)
    expect(container).toHaveTextContent('Avian')
    fireEvent.click(icon)
    expect(container).not.toHaveTextContent('Avian')
  })

  it("Doesn't expand a collapsed row when user clicks away from the expand icon", () => {
    const { container, getByText } = render(testTable())
    const expandableCell = getByText('Mo Willems Characters')
    expect(container).not.toHaveTextContent('Avian')
    fireEvent.click(expandableCell)
    expect(container).not.toHaveTextContent('Avian')
  })

  it("Doesn't collapse an expanded row when user clicks away from the collapse icon", () => {
    const { container, getByText } = render(testTable())
    const expandableCell = getByText('Mo Willems Characters')
    const icon = expandableCell.querySelector('i')
    fireEvent.click(icon)
    expect(container).toHaveTextContent('Avian')
    fireEvent.click(expandableCell)
    expect(container).toHaveTextContent('Avian')
  })
})
