import { LOADING_APP, 
         SPEAKERS_APP,
         SPONSOR_APP } from './action'

const initialState = {
  appLoading: false,
  speakers: [],
  sponsors: []
}

export default (state = initialState || {}, action = {}) => {
  switch (action.type) {
    case LOADING_APP:
      return Object.assign({}, state, { appLoading: action.value })
    case  SPEAKERS_APP:
      return Object.assign({}, state, { speakers: action.value })
    case  SPONSOR_APP:
      return Object.assign({}, state, { sponsors: action.value })
    default:
      return state
  }
}
