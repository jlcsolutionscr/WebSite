import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { createStyle } from './styles'

function Copyright() {
  return (
    <Typography variant='body2' color='inherit' align='center'>
      {'Copyright ©JLC Solutions CR ' + new Date().getFullYear() + '.'}
    </Typography>
  )
}

const footers = [
  {
    title: 'Aplicaciones disponibles',
    description: ['Aplicación de escritorio Windows', 'Aplicación para dispositivos mobiles Android', 'Disponibles en nuestra sección de DESCARGAS']
  },
  {
    title: 'Nuestros servicios',
    description: ['Facturación electrónica', 'Registro de visitas de clientes', 'Buzón de recepción de gastos']
  }
]

function Footer(props) {
  const classes = createStyle()

  return (
    <div id='id_footer'>
      <div className={classes.footer}>
        <Container style={{color: 'inherit'}}>
          <Grid container spacing={8} justifyContent='space-between' xs={12}>
            {footers.map(footer => (
              <Grid item key={footer.title}>
                <Typography variant='h6' color='inherit' gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map(item => (
                    <li key={item}>
                      <Typography variant='subtitle1' color='inherit'>
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
            <Grid item sm={12} key='Contactenos'>
              <Typography variant='h6' color='inherit' gutterBottom>
                Contactenos
              </Typography>
              <ul>
                <li key='1'>
                  <Link href='' onClick={() => props.history.push('/privacypolicy')} variant='subtitle1' color='inherit'>
                    Policitas de Privacidad
                  </Link>
                </li>
                <li key='2'>
                  <Typography variant='subtitle1' color='inherit'>
                    ventas@jlcsolutionscr.com
                  </Typography>
                </li>
                <li key='3'>
                  <Typography variant='subtitle1' color='inherit'>  
                    whatsapp: (506) 8334-8641
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Box mt={1}>
            <Copyright />
          </Box>
        </Container>
      </div>
      <div className={classes.mobileFooter}>
        <Grid container spacing={2} justifyContent='space-between' xs={12}>
          <Grid item xs={12}>
            <Typography variant='h6' color='inherit'>
              Contacto: ventas@jlcsolutionscr.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' color='inherit'>
              Whatsapp: (506) 8334-8641
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' color='inherit'>
              <Copyright />
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
