import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'

import Description from './Description'
import Title from './Title'
import RateMovie from './RateMovies'
import Avatar from './Avatar'

const MovieItem = ({
  id, poster_path, title, release_date, overview, vote_average, onChangeRateMovie,
  guestMoviesRating,
}) => (
  <Card>
    <div className="card">
      <Avatar poster_path={poster_path} />
      <Title release_date={release_date} title={title} voteAverage={vote_average} />
      <Description overview={overview} />
      <RateMovie
        onChangeRateMovie={onChangeRateMovie}
        id={id}
        guestMoviesRating={guestMoviesRating}
      />
    </div>
  </Card>
)

MovieItem.defaultProps = {
  poster_path: '',
  onChangeRateMovie: () => {
  },
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
  onChangeRateMovie: PropTypes.func,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  guestMoviesRating: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MovieItem