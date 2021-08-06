import React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


import { CloudDownloadIcon } from 'utils/iconsHelper'
import { downloadWindowsApp } from 'utils/helpers'
import MobileAppQRCodeImage from 'assets/img/mobile-app-QR-code.png'
import { createStyle } from './styles'

const styles = {
  columns: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#E2EBF1',
    height: '40px',
    boxShadow: '6px 6px 10px #888888'
  },
  image: {
    width: '15%',
    boxShadow: '6px 6px 10px #888888'
  }
}

function DownloadsPage({ setLoaderOpen }) {
  const classes = createStyle()
  const [errorMessage, setErrorMessage] = React.useState('')
  window.scrollTo(0, 0)

  const downloadFile = async () => {
    setLoaderOpen(true)
    setErrorMessage('')
    try {
      await downloadWindowsApp()
      setLoaderOpen(false)
    } catch (error) {
      setErrorMessage(error)
      setLoaderOpen(false)
    }
  }

  return (
    <div id='id_download_page' className={classes.container}>
      <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
        Productos disponibles
      </Typography>
      <div style={{textAlign: 'center', width: '100%'}}>
        {errorMessage !== '' && <Typography className={classes.errorLabel} style={{fontWeight: '700'}} color='textSecondary' component='p'>
          {errorMessage}
        </Typography>}
        <Typography className={classes.subTitle} paragraph>
          La aplicación para sistemas Windows le permite gestionar sus operaciones mediante una aplicación ágil, segura y eficiente
        </Typography>
        <Button variant='contained' style={styles.button} startIcon={<CloudDownloadIcon />} onClick={() => downloadFile()}>
          Descargar
        </Button>
        <Typography className={classes.subTitle} paragraph>
          Instale nuestra aplicación para dispositivos Android disponible en la Google App Store mediante el siguiente enlace
        </Typography>
        <img src={MobileAppQRCodeImage} style={styles.image} alt='not available' />
      </div>
    </div>
  )
}

export default DownloadsPage
