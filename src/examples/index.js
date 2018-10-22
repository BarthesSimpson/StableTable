import React, { Fragment } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Table from '@table'

const PageHeader = styled.h3`
  margin-left: ${({ inset }) => (inset ? '50px' : '1.5em')};
  display: inline;
`

import examplesData from '@examples/data'

const Examples = () => (
  <BrowserRouter>
    <Fragment>
      {/* navbar */}
      <div>
        {Object.keys(examplesData).map((example, i) => (
          <PageHeader inset={!i}>
            <Link to={example}>{`${example} Example`}</Link>
          </PageHeader>
        ))}
      </div>
      {/* home */}
      <Route
        exact
        path="/"
        component={() => <Table {...examplesData.basic} />}
      />
      {/* a route for each example */}
      {Object.keys(examplesData).map(example => (
        <Example key={example} example={example} />
      ))}
    </Fragment>
  </BrowserRouter>
)

const Example = ({ example }) => (
  <Route
    path={`/${example}`}
    component={() => (
      <Fragment>
        <Table {...examplesData[example]} />
      </Fragment>
    )}
  />
)

export default Examples
