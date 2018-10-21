import React from 'react'
import styled from 'styled-components'

const SortedIcon = styled.span`
  font-size: 0.5em;
  line-height: 2em;
  padding-left: 1em;
  box-sizing: border-box;
`
SortedIcon.displayName = 'SortedIcon'

const TitleRow = ({ colDefs, sortByField }) => (
  <tr>
    {colDefs.map(({ field, header }, i) => {
      return (
        <HeaderCell
          key={i}
          header={header}
          sort={({ descending }) => sortByField({ field, descending })}
        />
      )
    })}
  </tr>
)

class HeaderCell extends React.Component {
  constructor(props) {
    super(props)
    this.state = { sorted: false }
    this.clickSort = this.clickSort.bind(this)
  }

  clickSort() {
    const { sort } = this.props
    const { sorted } = this.state
    if (sorted == 'ascending') {
      sort({ descending: true })
      this.setState({ sorted: 'descending' })
    } else {
      sort({ descending: false })
      this.setState({ sorted: 'ascending' })
    }
  }

  render() {
    const { header } = this.props
    const { sorted } = this.state
    return (
      <th onClick={this.clickSort}>
        {header}
        <SortedIcon>
          {sorted === 'ascending' ? '▲' : sorted === 'descending' ? '▼' : '   '}
        </SortedIcon>
      </th>
    )
  }
}

export default TitleRow
