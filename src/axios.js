import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.intern.d-tt.nl/api/',
  headers: { 'X-Api-Key': 'OdvG-5X_rTP7AtqLlUgxmWnkbHB62p0i' }
})
