import React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import { formatCurrency } from 'utils/utilities' 

const useStyles = makeStyles(theme => ({
    container: {
      width: '100%',
      overflowX: 'auto'
    },
    title: {
      color: 'black',
      marginTop: '40px',
      textAlign: 'center',
      fontSize: theme.typography.pxToRem(20),
      marginBottom: '20px'
    },
    subTitle: {
      color: 'black',
      textAlign: 'center',
      fontSize: theme.typography.pxToRem(15),
      marginBottom: '20px'
    },
    headerRange: {
      display: 'flex',
      flexDirection: 'row'
    },
    table: {
      minWidth: 650
    },
    button: {
      padding: '5px 15px',
      backgroundColor: '#239BB5',
      color: 'white',
      boxShadow: '6px 6px 6px rgba(0,0,0,0.55)',
      '&:hover': {
        backgroundColor: '#29A4B4',
        boxShadow: '3px 3px 6px rgba(0,0,0,0.55)'
      }
    }
  }))

  function DetailLayout(props) {
    const classes = useStyles()
    return (<Paper className={classes.container}>
      <Typography className={classes.title} color='textSecondary' component='p'>
        {props.reportName}
      </Typography>
      <div className={classes.headerRange}>
      <div style={{width: '60%'}}>
          {props.summary && <Typography className={classes.subTitle} style={{textAlign: 'end', marginRight: '10%'}} color='textSecondary' component='p'>
            Fecha inicial: {props.summary.startDate}
          </Typography>}
        </div>
        <div style={{width: '60%'}}>
          {props.summary && <Typography className={classes.subTitle} style={{textAlign: 'start', marginLeft: '10%'}}color='textSecondary' component='p'>
            Fecha final: {props.summary.endDate}
          </Typography>}
        </div>
      </div>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Emisor/Receptor</TableCell>
            <TableCell align='center'>Fecha</TableCell>
            <TableCell align='center'>Consecutivo</TableCell>
            <TableCell align='right'>Impuesto</TableCell>
            <TableCell align='right'>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>{row.Nombre}</TableCell>
              <TableCell align='center'>{row.Fecha}</TableCell>
              <TableCell align='center'>{row.Consecutivo}</TableCell>
              <TableCell align='right'>{formatCurrency(row.Impuesto)}</TableCell>
              <TableCell align='right'>{formatCurrency(row.Total)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.headerRange} style={{marginTop: '30px', marginBottom: '40px', marginRight: '5%'}}>
        <div style={{width: '75%', marginRight: '10%'}}>
          {props.summary && <Typography className={classes.subTitle} style={{textAlign: 'end'}}color='textSecondary' component='p'>
            Total impuesto: {formatCurrency(props.summary.taxes)}
          </Typography>}
        </div>
        <div style={{width: '25%'}}>
          {props.summary && <Typography className={classes.subTitle} style={{textAlign: 'end'}} color='textSecondary' component='p'>
            Total general: {formatCurrency(props.summary.total)}
          </Typography>}
        </div>
      </div>
      <div style={{margin: '20px'}}>
        <Button variant='contained' className={classes.button} onClick={() => props.returnOnClick()}>
          Regresar
        </Button>
      </div>
    </Paper>)
  }

  export default DetailLayout