import React from 'react'

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
    const sortClass =
      sorted === 'ascending'
        ? 'sorting_asc'
        : sorted === 'descending'
          ? 'sorting_desc'
          : 'sorting'
    return (
      <th className={sortClass} onClick={this.clickSort}>
        {header}
      </th>
    )
  }
}

export default TitleRow
