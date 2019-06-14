import axios from 'axios'
import { environment } from '../../environments/environment'

const env = environment.api_uri

export function getTasksByMonthYear(month, year) {
  return axios.get(`${env}/task/getTasks`)
}