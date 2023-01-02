import React from 'react'
import { Pagination } from 'antd'
import PropTypes from 'prop-types'

const MoviesPagination = ({ total, onPaginationChange, currentPage }) => (

  <Pagination
    showQuickJumper
    current={currentPage}
    onChange={onPaginationChange}
    total={total}
    hideOnSinglePage
    pageSize={20}
    style={{ margin: '15px 0 10px 0' }}
  />
)

MoviesPagination.defaultProps = {
  onPaginationChange: () => {
  },
}

MoviesPagination.propTypes = {
  total: PropTypes.number.isRequired,
  onPaginationChange: PropTypes.func,
  currentPage: PropTypes.number.isRequired,
}

export default MoviesPagination