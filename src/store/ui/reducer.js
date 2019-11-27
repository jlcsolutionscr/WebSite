import {
  START_LOADER,
  STOP_LOADER,
  SET_ACTIVE_INFO_SECTION,
  SET_ACTIVE_HOME_SECTION,
  SET_DOWNLOAD_ERROR
} from './types'

const uiReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case START_LOADER:
      return { ...state, isLoaderActive: true, loaderText: payload.text !== undefined ? payload.text : 'Procesando' }
    case STOP_LOADER:
      return { ...state, isLoaderActive: false, loaderText: '' }
    case SET_ACTIVE_INFO_SECTION:
      return { ...state, activeInfoSection: payload.pageId }
    case SET_ACTIVE_HOME_SECTION:
      return { ...state, activeHomeSection: payload.pageId }
    case SET_DOWNLOAD_ERROR:
      return { ...state, downloadError: payload.error }
    default:
      return state
  }
}

export default uiReducer
