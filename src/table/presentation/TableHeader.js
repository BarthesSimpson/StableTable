import React from 'react'

const TableHeader = ({ colDefs, sortByField }) => (
  <thead>
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
  </thead>
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
    return <th onClick={this.clickSort}>{header}</th>
  }
}

export default TableHeader
