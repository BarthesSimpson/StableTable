import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Table from '@table'

import examplesData from '@examples/data'

const Examples = () => (
  <BrowserRouter>
    <Fragment>
      {/* home */}
      <Route
        exact
        path="/"
        component={() => <Table {...examplesData.boring} />}
      />
      {/* a route for each example */}
      {Object.keys(examplesData).map(example => (
        <Example key={example} example={example} />
      ))}
    </Fragment>
  </BrowserRouter>
)

const Example = ({ example, i }) => (
  <Route
    path={`/${example}`}
    component={() => <Table {...examplesData[example]} />}
  />
)

export default Examples
