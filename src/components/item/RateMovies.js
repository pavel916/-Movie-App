import React from 'react'
import { Rate } from 'antd'
import PropTypes from 'prop-types'

const RateMovie = ({ id, onChangeRateMovie, guestMoviesRating }) => {
  const onChange = (value) => {
    onChangeRateMovie(id, value)
  }
  const currentRating = guestMoviesRating.find((el) => el.id === id)?.value

  return (
    <div className='card__rate'>
      <Rate count={10} value={currentRating} onChange={onChange} />
    </div>
  )
}

RateMovie.defaultProps = {
  onChangeRateMovie: () => {},
}

RateMovie.propTypes = {
  id: PropTypes.number.isRequired,
  onChangeRateMovie: PropTypes.func,
  guestMoviesRating: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default RateMovie
