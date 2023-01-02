export default class moviesAPI {
  
  _apiBase = 'https://api.themoviedb.org/3/'

  _apiKey = 'api_key=294b36624122d7f912fed3b062c08b28'


  
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
  }

  async getAllMovies(page, query) {
    const res = await this.getResource(`search/movie?page=${page}&query=${query}&${this._apiKey}`)
    return res
  }

  async getToken() {
    return await this.getResource(`/authentication/guest_session/new?${this._apiKey}`)
  }

  async getGuestSessionMovies(page) {
    const sessionId = sessionStorage.getItem('guest_session_id')
    return await this.getResource(
      `/guest_session/${sessionId}/rated/movies?${this._apiKey}&page=${page}`,
    )
  }

  async setRateMovie(id, value) {
    const sessionId = sessionStorage.getItem('guest_session_id')

    const res = fetch(
      `${this._apiBase}movie/${id}/rating?${this._apiKey}&guest_session_id=${sessionId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ value }),
      },
    )
    return await res
  }
}
