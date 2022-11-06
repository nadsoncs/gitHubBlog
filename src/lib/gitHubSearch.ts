import axios from 'axios'

export const gitHubSearchApi = axios.create({
  baseURL: 'https://api.github.com/search/',
})