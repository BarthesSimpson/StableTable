import React from 'react'

class DataStore extends React.Component {
  constructor(props) {
    super(props)
    this.state = { rows: props.rowData }
  }

  render() {
    return this.props.children(this.state.rows)
  }
}

export default DataStore
