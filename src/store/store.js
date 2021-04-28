import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' // 리덕스 개발자 도구

export default createStore((state, action) => {
  if (state === undefined) {
    return {
      list: [],
    }
  }

  if (action.type === 'SET') {
    return {
      ...state,
      list: action.list,
    }
  }

  return state
}, composeWithDevTools())
