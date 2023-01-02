import React from 'react'
import PropTypes from 'prop-types'

const Description = ({ overview }) => (
  <div className='card__description'>
    <div>{overview.split(' ').slice(0, 30).join(' ')}...</div>
  </div>
)

Description.propTypes = {
  overview: PropTypes.string.isRequired,
}

export default Description
