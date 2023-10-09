export default class AviasalesService {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }

  id = null
  url = 'https://aviasales-test-api.kata.academy'

  async getResource(url) {
    const res = await fetch(url, this.options)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , status: ${res.status}`)
    }
    return await res.json()
  }

  async getSearchId() {
    const res = await this.getResource(`${this.url}/search`)
    console.log(res.searchId)
    return res.searchId
  }

  async getTickets(searchId) {
    const res = await this.getResource(`${this.url}/tickets?searchId=${searchId}`)
    // console.log(res2.slice(0, 50))
    // console.log(res.tickets)
    return res
  }
}
