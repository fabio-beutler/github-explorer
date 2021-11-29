import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/users',
  headers: {
    Authorization: 'token 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'
  }
})
