import {
  SET_ACTIVE_SECTION,
  SET_INVOICE_SESSION,
  SET_CANTON_LIST,
  SET_DISTRITO_LIST,
  SET_BARRIO_LIST,
  SET_BRANCH_LIST,
  SET_COMPANY,
  SET_COMPANY_ATTRIBUTE,
  SET_REPORT_RESULTS
} from './types'

import { startLoader, stopLoader, setErrorMessage } from 'store/ui/actions'

import {
  getCompanyEntity,
  getCantonList,
  getDistritoList,
  getBarrioList,
  saveCompanyEntity,
  saveCompanyCertificate,
  saveCompanyLogo,
  getBranchList,
  getReportData
} from 'utils/billingHelper'

import { ExportDataToXls } from 'utils/utilities'

export const setActiveSection = (pageId) => {
  return {
    type: SET_ACTIVE_SECTION,
    payload: { pageId }
  }
}

export const setInvoiceSession = (companyId, companyIdentifier, companyName) => {
  return {
    type: SET_INVOICE_SESSION,
    payload: { companyId, companyIdentifier, companyName }
  }
}

export const setCantonList = (list) => {
  return {
    type: SET_CANTON_LIST,
    payload: { list }
  }
}

export const setDistritoList = (list) => {
  return {
    type: SET_DISTRITO_LIST,
    payload: { list }
  }
}

export const setBarrioList = (list) => {
  return {
    type: SET_BARRIO_LIST,
    payload: { list }
  }
}

export const setBranchList = (list) => {
  return {
    type: SET_BRANCH_LIST,
    payload: { list }
  }
}

export const setCompany = (company) => {
  return {
    type: SET_COMPANY,
    payload: { company }
  }
}

export const setCompanyAttribute = (attribute, value) => {
  return {
    type: SET_COMPANY_ATTRIBUTE,
    payload: { attribute, value }
  }
}

export const setReportResults = (list, summary) => {
  return {
    type: SET_REPORT_RESULTS,
    payload: { list, summary }
  }
}

export function getCompany () {
  return async (dispatch, getState) => {
    const { token } = getState().session
    const { companyId } = getState().invoice
    dispatch(startLoader())
    dispatch(setErrorMessage(''))
    try {
      dispatch(setActiveSection(1))
      const company = await getCompanyEntity(companyId, token)
      dispatch(setCompany(company))
      const cantonList = await getCantonList(company.IdProvincia, token)
      dispatch(setCantonList(cantonList))
      const distritoList = await getDistritoList(company.IdProvincia, company.IdCanton, token)
      dispatch(setDistritoList(distritoList))
      const barrioList = await getBarrioList(company.IdProvincia, company.IdCanton, company.IdDistrito, token)
      dispatch(setBarrioList(barrioList))
      dispatch(stopLoader())
    } catch (error) {
      dispatch(setErrorMessage(error.message))
      dispatch(stopLoader())
    }
  }
}

export function setReportsParameters () {
  return async (dispatch, getState) => {
    const { token } = getState().session
    const { companyId } = getState().invoice
    dispatch(startLoader())
    dispatch(setErrorMessage(''))
    try {
      const list = await getBranchList(companyId, token)
      dispatch(setActiveSection(20))
      dispatch(setBranchList(list))
      dispatch(stopLoader())
    } catch (error) {
      dispatch(setErrorMessage(error.message))
      dispatch(stopLoader())
    }
  }
}

export function updateCantonList (idProvincia) {
  return async (dispatch, getState) => {
    const { token } = getState().session
    const { company } = getState().invoice
    if (company.IdProvincia !== idProvincia) {
      dispatch(startLoader())
      dispatch(setErrorMessage(''))
      try {
        const newCompany = { ...company, IdProvincia: idProvincia, IdCanton: 1, IdDistrito: 1, IdBarrio: 1 }
        dispatch(setCompany(newCompany))
        const cantonList = await getCantonList(idProvincia, token)
        dispatch(setCantonList(cantonList))
        const distritoList = await getDistritoList(idProvincia, 1, token)
        dispatch(setDistritoList(distritoList))
        const barrioList = await getBarrioList(idProvincia, 1, 1, token)
        dispatch(setBarrioList(barrioList))
        dispatch(stopLoader())
      } catch (error) {
        dispatch(setErrorMessage(error.message))
        dispatch(stopLoader())
      }
    }
  }
}

export function updateDistritoList (idProvincia, idCanton) {
  return async (dispatch, getState) => {
    const { token } = getState().session
    const { company } = getState().invoice
    if (company.IdCanton !== idCanton) {
      dispatch(startLoader())
      dispatch(setErrorMessage(''))
      try {
        const newCompany = { ...company, IdCanton: idCanton, IdDistrito: 1, IdBarrio: 1 }
        dispatch(setCompany(newCompany))
        const distritoList = await getDistritoList(idProvincia, idCanton, token)
        dispatch(setDistritoList(distritoList))
        const barrioList = await getBarrioList(idProvincia, idCanton, 1, token)
        dispatch(setBarrioList(barrioList))
        dispatch(stopLoader())
      } catch (error) {
        dispatch(setErrorMessage(error.message))
        dispatch(stopLoader())
      }
    }
  }
}

export function updateBarrioList (idProvincia, idCanton, idDistrito) {
  return async (dispatch, getState) => {
    const { token } = getState().session
    const { company } = getState().invoice
    if (company.IdDistrito !== idDistrito) {
      dispatch(startLoader())
      dispatch(setErrorMessage(''))
      try {
        const newCompany = { ...company, IdDistrito: idDistrito, IdBarrio: 1 }
        dispatch(setCompany(newCompany))
        const barrioList = await getBarrioList(idProvincia, idCanton, idDistrito, token)
        dispatch(setBarrioList(barrioList))
        dispatch(stopLoader())
      } catch (error) {
        dispatch(setErrorMessage(error.message))
        dispatch(stopLoader())
      }
    }
  }
}

export function saveCompany (certificate) {
  return async (dispatch, getState) => {
    const { token } = getState().session
    const { companyId, company } = getState().invoice
    dispatch(startLoader())
    dispatch(setErrorMessage(''))
    try {
      await saveCompanyEntity(company, token)
      if (certificate !== '') {
        await saveCompanyCertificate(companyId, certificate, token)
      }
      dispatch(setActiveSection(0))
      dispatch(stopLoader())
    } catch (error) {
      dispatch(setErrorMessage(error.message))
      dispatch(stopLoader())
    }
  }
}

export function saveLogo (logo) {
  return async (dispatch, getState) => {
    const { token } = getState().session
    const { companyId } = getState().invoice
    dispatch(startLoader())
    dispatch(setErrorMessage(''))
    try {
      if (logo !== '') {
        await saveCompanyLogo(companyId, logo, token)
      }
      dispatch(setActiveSection(0))
      dispatch(stopLoader())
    } catch (error) {
      dispatch(setErrorMessage(error.message))
      dispatch(stopLoader())
    }
  }
}

export function generateReport (idBranch, reportType, startDate, endDate) {
  return async (dispatch, getState) => {
    const { token } = getState().session
    const { companyId } = getState().invoice
    dispatch(startLoader())
    dispatch(setErrorMessage(''))
    dispatch(setReportResults([], null))
    try {
      const list = await getReportData(reportType, companyId, idBranch, startDate, endDate, token)
      let taxes = 0
      let total = 0
      if (reportType !== 5) {
        list.forEach(item => {
          taxes += item.Impuesto
          total += item.Total
        })
      }
      const summary = {
        startDate,
        endDate,
        taxes,
        total
      }
      dispatch(setReportResults(list, summary))
      dispatch(stopLoader())
    } catch (error) {
      dispatch(setErrorMessage(error.message))
      dispatch(stopLoader())
    }
  }
}

export function exportReport (idBranch, reportType, startDate, endDate) {
  return async (dispatch, getState) => {
    const { token } = getState().session
    const { companyId } = getState().invoice
    dispatch(startLoader())
    dispatch(setErrorMessage(''))
    try {
      const list = await getReportData(reportType, companyId, idBranch, startDate, endDate, token)
      const fileName = reportType === 1
        ? 'documentos_electronicos_generados'
        : 'documentos_electronicos_recibidos'
      const reportName = reportType === 1
        ? 'Documentos electrónicos generados'
        : 'Documentos electrónicos recibidos'
      ExportDataToXls(fileName, reportName, list)
      dispatch(stopLoader())
    } catch (error) {
      dispatch(setErrorMessage(error.message))
      dispatch(stopLoader())
    }
  }
}
