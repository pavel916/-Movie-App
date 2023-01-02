import React from 'react'
import { Progress } from 'antd'
import PropTypes from 'prop-types'

const Rating = ({ voteAverage }) => {
  let color = '#E90000'

  if (voteAverage >= 3 && voteAverage < 5) color = '#E97E00'
  if (voteAverage >= 5 && voteAverage < 7) color = '#E9D100'
  if (voteAverage >= 7) color = '#66E900'

  const percent = (100 * voteAverage) / 10

  return (
    <Progress
      type="circle" percent={percent}
      strokeColor={color}
      format={() => Math.round(voteAverage)}
      width={40}
    />
  )
}

Rating.propTypes = {
  voteAverage: PropTypes.number.isRequired,
}

export default Rating