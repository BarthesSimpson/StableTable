import React from 'react'
import { render } from 'react-testing-library'
import Table from '@table'

describe('Smoke test', () => {
  it('works', () => {
    render(<Table />)
  })
})
