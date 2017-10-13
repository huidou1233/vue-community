const API_HOST = 'https://www.vue-js.com'

const API_PATH = {
  topics: '/api/v1/topics',
  topicById: '/api/v1/topic/',
  replyUp: '/api/v1/reply/',
  login: '/api/v1/accesstoken'
}

export const Topic = API_HOST.concat(API_PATH.topics)
export const TopicById = API_HOST.concat(API_PATH.topicById)
export const ReplyUp = API_HOST.concat(API_PATH.replyUp)
export const Login = API_HOST.concat(API_PATH.login)
