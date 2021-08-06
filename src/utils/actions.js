import {
  START_LOADER,
  STOP_LOADER,
  SET_ACTIVE_SECTION,
  SET_ERROR_MESSAGE
} from './types'

import { downloadWindowsApp } from 'utils/domainHelper'

export const startLoader = (text) => {
  return {
    type: START_LOADER,
    payload: { text }
  }
}

export const stopLoader = () => {
  return {
    type: STOP_LOADER
  }
}

export const setActiveSection = (pageId) => {
  return {
    type: SET_ACTIVE_SECTION,
    payload: { pageId }
  }
}

export const setErrorMessage = (error) => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: { error }
  }
}

export function downloadWindowsAppFromWebSite () {
  return async (dispatch) => {
    dispatch(startLoader('Descargando'))
    try {
      await downloadWindowsApp()
      dispatch(stopLoader())
    } catch (error) {
      dispatch(setErrorMessage(error))
      dispatch(stopLoader())
      console.error('Ocurrió un error en la descarga, intente más tarde. Si el problema persiste contacte con soporte técnico.')
    }
  }
}
