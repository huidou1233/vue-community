import axios from 'axios'
import {
  Topic,
  TopicById,
  ReplyUp
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

export function fetchReplyUps (id) {
  return axios.get(ReplyUp + id + '/ups')
}
