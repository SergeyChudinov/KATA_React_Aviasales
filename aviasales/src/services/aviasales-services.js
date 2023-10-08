export default class AviasalesService {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }

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
    const res2 = await this.getResource(`${this.url}/tickets?searchId=${res.searchId}&limit=10`)
    // console.log(res2.slice(0, 50))
    console.log(res2)
    return res2.tickets
  }
}
