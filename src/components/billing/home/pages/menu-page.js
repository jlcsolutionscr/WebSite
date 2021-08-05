import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { makeStyles } from '@material-ui/core/styles'

import {
  setActiveSection,
  getCompany,
  setReportsParameters
} from 'store/billing/actions'

import { logOut } from 'store/session/actions'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    width: '360px',
    padding: '15px 20px',
    backgroundColor: 'rgba(0,0,0,0.65)',
    color: 'white',
    borderColor: 'white',
    border: '0.6px solid',
    boxShadow: '6px 6px 6px rgba(0,0,0,0.55)',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.45)',
      boxShadow: '3px 3px 6px rgba(0,0,0,0.55)'
    },
    '@media (max-width:414px)': {
      width: '100%',
      maxWidth: '360px'
    }
  },
}))

function MenuPage({rolesPerUser, getCompany, setActiveSection, setReportsParameters, logOut}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const updateCompanyInfo = rolesPerUser.filter(role => [1, 61].includes(role.IdRole)).length > 0
  const manageCustomers = rolesPerUser.filter(role => role.IdRole === 100).length > 0
  const manageProducts = rolesPerUser.filter(role => role.IdRole === 103).length > 0
  const generateInvoice = rolesPerUser.filter(role => role.IdRole === 203).length > 0
  const manageDocuments = rolesPerUser.filter(role => role.IdRole === 402).length > 0
  const reportingMenu = rolesPerUser.filter(role => [1, 2, 57].includes(role.IdRole)).length > 0
  const classes = useStyles()
  return (
    <Grid container align='center' spacing={3} >
      {updateCompanyInfo && <Grid item xs={12}>
        <Button classes={{root: classes.button}} onClick={() => getCompany()}>Actualizar empresa</Button>
      </Grid>}
      {updateCompanyInfo && <Grid item xs={12}>
        <Button classes={{root: classes.button}} onClick={() => setActiveSection(2)}>Agregar logotipo</Button>
      </Grid>}
      {manageCustomers && <Grid item xs={12}>
        <Button classes={{root: classes.button}} onClick={() => setActiveSection(3)}>Catálogo de clientes</Button>
      </Grid>}
      {manageProducts && <Grid item xs={12}>
        <Button classes={{root: classes.button}} onClick={() => setActiveSection(4)}>Catálogo de productos</Button>
      </Grid>}
      {generateInvoice && <Grid item xs={12}>
        <Button classes={{root: classes.button}} onClick={() => setActiveSection(5)}>Facturar</Button>
      </Grid>}
      {generateInvoice && <Grid item xs={12}>
        <Button classes={{root: classes.button}} onClick={() => setActiveSection(6)}>Facturas electrónicas</Button>
      </Grid>}
      {manageDocuments && <Grid item xs={12}>
        <Button classes={{root: classes.button}} onClick={() => setActiveSection(7)}>Documentos electrónicos</Button>
      </Grid>}
      {reportingMenu && <Grid item xs={12}>
        <Button classes={{root: classes.button}} onClick={() => setReportsParameters()}>Menu de reportes</Button>
      </Grid>}
      <Grid item xs={12}>
        <Button classes={{root: classes.button}} onClick={() => logOut()}>Cerrar sesión</Button>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return { rolesPerUser: state.session.rolesPerUser }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logOut,
    setActiveSection,
    getCompany,
    setReportsParameters,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage)
