export function tab (tab, top, good) {
  if (top) {
    return '置顶'
  }
  if (good) {
    return '精华'
  }
  if (tab === 'job') {
    return '招聘'
  } else if (tab === 'ask') {
    return '问答'
  } else if (tab === 'weex') {
    return 'weex'
  } else if (tab === 'share') {
    return '分享'
  }
}

export function getAccesstoken () {
  let accesstoken = window.localStorage.getItem('accesstoken')
  return accesstoken
}
