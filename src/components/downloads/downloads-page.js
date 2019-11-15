import React from 'react'
import { connect } from 'react-redux'

import { downloadWindowsAppFromWebSite } from '../../store/ui/actions'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { CloudDownloadIcon } from '../../utils/iconHelper'
import MobileAppQRCodeImage from '../../assets/img/mobile-app-QR-code.png'
import { createStyle } from '../styles'

const style = {
  columns: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#E2EBF1',
    height: '40px'
  }
}

function DownloadsPage(props) {
  const classes = createStyle()

  const downloadFile = () => {
    props.downloadWindowsAppFromWebSite()
  }
  return (
    <div id='id_download_page' style={{height: window.innerHeight - 318}}>
      <Container className={[classes.container, classes.margin5]}>
        {props.downloadError != '' &&
          <Typography style={{textAlign: 'center', margin: '2%'}} className={classes.paragraphError} component='p'>
            props.downloadError
          </Typography>
        }
        <Typography style={{textAlign: 'center', marginBottom: '2%'}} className={classes.title} color='textSecondary' component='p'>
          Productos disponibles
        </Typography>
        <div style={{textAlign: 'center', width: '100%'}}>
          <Typography className={classes.subTitle} paragraph>
            La aplicación para sistemas Windows le permite gestionar sus operaciones mediante una aplicación ágil, segura y eficiente
          </Typography>
          <Button variant='contained' style={style.button} startIcon={<CloudDownloadIcon />} onClick={() => downloadFile()}>
            Descargar
          </Button>
          <Typography className={classes.subTitle} paragraph>
            Instale nuestra aplicación para dispositivos Android disponible en la Google App Store mediante el siguiente enlace
          </Typography>
          <img src={MobileAppQRCodeImage} style={{width: '15%'}} />
        </div>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    downloadError: state.ui.downloadError
  }
}

const mapDispatchToProps = { downloadWindowsAppFromWebSite }

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsPage)