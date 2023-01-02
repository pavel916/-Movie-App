import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'antd'

const Avatar = ({ poster_path }) => {
  const src = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : <Alert />
  return (
    <div className="card__avatar">
      <img src={src} alt="" className="movie-img" />
    </div>
  )
}

Avatar.propTypes = {
  poster_path: PropTypes.string.isRequired,
}

export default Avatar