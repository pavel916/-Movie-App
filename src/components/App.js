import React, { Component } from 'react'
import { Layout, Tabs } from 'antd'

import moviesAPI from './api'
import GuestSessionMovies from './GuestSessionMovies'
import Movies from './Movies'
import '../index.css'

const { TabPane } = Tabs
const { Content } = Layout

export default class App extends Component {
  moviesAPI = new moviesAPI()

  state = {
    movies: [],
    guestMovies: [],
    guestMoviesRating: [],
    isLoad: true,
    isError: false,
    totalMovies: 0,
    totalGuestSessionMovies: 0,
    currentPage: 1,
    currentGuestMoviesPage: 1,
    labelSearch: 'a',
  }

  componentDidMount() {
    this.getMovies(this.state.currentPage, this.state.labelSearch)
    this.moviesAPI.getToken()
      .then((i) => i.guest_session_id)
      .then((i) => {
        sessionStorage.setItem('guest_session_id', i)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.labelSearch !== this.state.labelSearch) {
      this.getMovies(this.state.currentPage, this.state.labelSearch)
      this.setState({
        movies: [],
        isLoad: true,
      })
    }
    if (prevState.currentPage !== this.state.currentPage) {
      this.getMovies(this.state.currentPage, this.state.labelSearch)
      this.setState({
        movies: [],
        isLoad: true,
      })
    }
    if (prevState.currentGuestMoviesPage !== this.state.currentGuestMoviesPage) {
      this.getGuestSessionMovies(this.state.currentGuestMoviesPage)
      this.setState({
        guestMovies: [],
        isLoad: true,
      })
    }
  }

  onError = () => {
    this.setState({
      isError: true,
      isLoad: false,
    })
  }

  getMovies(page, value) {
    this.moviesAPI.getAllMovies(page, value)
      .then((res) => {
        this.setState({
          movies: res.results,
          isLoad: false,
          totalMovies: res.total_results,
        })
      }).catch(this.onError)
  }

  getGuestSessionMovies(page) {
    this.moviesAPI.getGuestSessionMovies(page)
      .then((res) => {
        this.setState({
          guestMovies: res.results,
          isLoad: false,
          totalGuestSessionMovies: res.total_results,
        })
      })
      .catch(this.onError)
  }

  onChangeInput = (e) => {
    if (e.target.value) {
      this.setState({ labelSearch: e.target.value })
    }
  }

  onPaginationChange = (page) => {
    this.setState({
      currentPage: page,
    })
  }

  onPaginationGuestMoviesChange = (page) => {
    this.setState({
      currentGuestMoviesPage: page,
    })
  }

  onChangeRateMovie = (id, value) => {
    this.moviesAPI.setRateMovie(id, value).then((res) => {
      if (res.status === 201) {
        const currentMovie = this.state.movies.find((el) => el.id === id)
        this.setState(({ guestMovies, guestMoviesRating }) => ({
          guestMovies: [...guestMovies, currentMovie],
          guestMoviesRating: [...guestMoviesRating, { id, value }],
        }
        ))
        this.setState({
          guestMoviesRating: []
        })
      }
    })
  }

  render() {
    return (
      <Layout>
        <Content>
          <Tabs
            defaultActiveKey="1" centered onChange={(key) => {
              if (key === '2') this.getGuestSessionMovies(this.state.currentGuestMoviesPage)
            }}
          >
            <TabPane tab="Search" key="1">
              <Movies
                {...this.state}
                onChangeRateMovie={this.onChangeRateMovie}
                onPaginationChange={this.onPaginationChange}
                onChangeInput={this.onChangeInput}
                getMovies={this.getMovies}
              />
            </TabPane>
            <TabPane tab="Rated" key="2">
              <GuestSessionMovies
                {...this.state}
                onPaginationGuestMoviesChange={this.onPaginationGuestMoviesChange}
                getGuestSessionMovies={this.getGuestSessionMovies}
              />
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    )
  }
}