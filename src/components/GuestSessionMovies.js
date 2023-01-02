import React from 'react'
import { Col, Row } from 'antd'
import PropTypes from 'prop-types'

import Error from './Error'
import Loader from './Loader'
import NotFound from './NotFound'
import MovieItem from './item/MovieItem'
import MoviesPagination from './Pagination'

const GuestSessionMovies = ({
  isLoad, guestMovies, isError, currentGuestMoviesPage,
  totalGuestSessionMovies, onPaginationGuestMoviesChange,
  guestMoviesRating,
}) => {
  const hasData = !guestMovies.length && !isLoad && !isError

  const errorMessage = isError && !guestMovies.length ? <Error /> : null
  const loader = isLoad ? <Loader /> : null
  const notFound = hasData ? <NotFound /> : null

  return (
    <div className="movie-container">
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
        {guestMovies.map((i) => (
          <Col xl={10} sm={20} xs={23} key={i.id}>
            <MovieItem {...i} guestMoviesRating={guestMoviesRating} />
          </Col>
        ))}
      </Row>
      <Row justify="center">
        <MoviesPagination
          onPaginationChange={onPaginationGuestMoviesChange}
          currentPage={currentGuestMoviesPage}
          total={totalGuestSessionMovies}
        />
      </Row>
    </div>
  )
}

GuestSessionMovies.defaulProps = {
  onPaginationGuestMoviesChange: () => {
  },
}
GuestSessionMovies.propTypes = {
  isLoad: PropTypes.bool.isRequired,
  guestMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isError: PropTypes.bool.isRequired,
  currentGuestMoviesPage: PropTypes.number.isRequired,
  totalGuestSessionMovies: PropTypes.number.isRequired,
  onPaginationGuestMoviesChange: PropTypes.func.isRequired,
  guestMoviesRating: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default GuestSessionMovies