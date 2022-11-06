import axios from 'axios'

export const gitHubUsersApi = axios.create({
  baseURL: 'https://api.github.com/users/',
})