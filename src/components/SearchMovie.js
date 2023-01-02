import React from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

const SearchMovie = ({ onChangeInput }) => (
  <Input
    placeholder="input search text"
    allowClear
    onChange={debounce(onChangeInput, 500)}
  />
)

SearchMovie.defaultProps = {
  onChangeInput: () => {
  },
}

SearchMovie.propTypes = {
  onChangeInput: PropTypes.func,
}

export default SearchMovie