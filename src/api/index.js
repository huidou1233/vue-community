import axios from 'axios'
import {
  Topic,
  TopicById,
  ReplyUp,
  Login
} from './resource'

export function fetchTopicsItems (tabName, page) {
  return axios.get(Topic, {
    params: {
      'tab': tabName,
      'page': page || 1
    }
  })
}

export function fetchTopicsById (id) {
  return axios.get(TopicById + id)
}

export function fetchReplyUps (id, accesstoken) {
  return axios.post(ReplyUp + id + '/ups', {
    accesstoken: accesstoken
  })
}

export function fetchLogin (accesstoken) {
  return axios.post(Login, {
    accesstoken: accesstoken
  })
}
