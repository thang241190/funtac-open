import React from 'react'
import { connect } from 'react-redux'
import { filterBlogs } from '../reducers/filterReducer'

function Filter(props) {
  const handleFilter = (e) => {
    props.filterBlogs(e.target.value)
  }
  return (
    <p>
      filter shown with <input type='text' onChange={handleFilter} />
    </p>
  )
}
const mapDispatchToProps = {
  filterBlogs,
}
export default connect(null, mapDispatchToProps)(Filter)
