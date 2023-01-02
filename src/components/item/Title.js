import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'
import { format } from 'date-fns'

import Rating from './Rating'

const { Text } = Typography

const Title = ({ voteAverage, title, release_date }) => {
  const date = release_date
    ? format(new Date(release_date), 'MMMM d, yyyy')
    : null

  return (
    <div className="card__title">
      <div className="title">
        <h2 className="title__name">{title}</h2>
        <Rating voteAverage={voteAverage} />
      </div>
      <Text strong>{date}</Text>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
}

export default Title