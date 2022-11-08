import axios from 'axios'

export const gitHubIssuesApi = axios.create({
  baseURL: 'https://api.github.com/repos/nadsoncs/gitHubBlog/issues/',
})