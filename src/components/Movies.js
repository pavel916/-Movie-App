import React from 'react'
import { Col, Row } from 'antd'
import PropTypes from 'prop-types'

import Error from './Error'
import Loader from './Loader'
import NotFound from './NotFound'
import SearchMovie from './SearchMovie'
import MovieItem from './item/MovieItem'
import MoviesPagination from './Pagination'

const Movies = ({
  isLoad, movies, isError, currentPage,
  totalMovies, onPaginationChange,
  onChangeInput, onChangeRateMovie,
  guestMoviesRating,
}) => {
  const hasData = !movies.length && !isLoad && !isError

  const errorMessage = isError && !movies.length ? <Error /> : null
  const loader = isLoad ? <Loader /> : null
  const notFound = hasData ? <NotFound /> : null

  return (
    <div className="movie-container">
      <Row justify="center">
        <Col xl={20} sm={20} xs={23}>
          <SearchMovie onChangeInput={onChangeInput} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={2}>{loader}</Col>
      </Row>
      <Row justify="center">
        <Col span={18}>{notFound}</Col>
      </Row>
      <Row justify="center">
        <Col span={10}>{errorMessage}</Col>
      </Row>
      <Row justify="center">
        {movies.map((i) => (
          <Col xl={10} sm={20} xs={23} key={i.id}>
            <MovieItem
              {...i}
              guestMoviesRating={guestMoviesRating}
              onChangeRateMovie={onChangeRateMovie}
            />
          </Col>
        ))}
      </Row>
      <Row justify="center">
        <MoviesPagination
          onPaginationChange={onPaginationChange}
          currentPage={currentPage}
          total={totalMovies}
        />
      </Row>
    </div>
  )
}

Movies.defaulProps = {
  onPaginationChange: () => {
  },
  onChangeInput: () => {
  },
  onChangeRateMovie: () => {
  },
}
Movies.propTypes = {
  isLoad: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isError: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalMovies: PropTypes.number.isRequired,
  onPaginationChange: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onChangeRateMovie: PropTypes.func.isRequired,
  guestMoviesRating: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Movies