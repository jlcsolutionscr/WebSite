import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import MobileAppCard from "./home/mobile-app-card";
import PlatformCard from "./home/platform-card";
import WindowsAppCard from "./home/windows-app-card";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    marginBottom: "7%",
    padding: "0 5%",
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px",
    },
  },
  subTitle: {
    marginTop: theme.spacing(2),
    fontSize: theme.typography.pxToRem(20),
    color: "inherit",
  },
  intro: {
    marginTop: theme.spacing(4),
    fontSize: theme.typography.pxToRem(18),
  },
  items: {
    marginTop: theme.spacing(2),
    marginLeft: "3%",
    fontSize: theme.typography.pxToRem(18),
  },
  special: {
    marginTop: theme.spacing(4),
    fontSize: theme.typography.pxToRem(16),
  },
  subItems: {
    marginTop: theme.spacing(3),
    marginLeft: "6%",
    fontSize: theme.typography.pxToRem(18),
  },
}));

function HomePage(props) {
  const classes = useStyles();
  window.scrollTo(0, 0);
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Nuestra plataforma de gestión y facturación
        </Typography>
        <Typography className={classes.intro}>
          Nuestra aplicación para móviles le permite de una forma rápida y desde
          cualquier lugar confeccionar su factura electrónica y gestionar las
          facturas ya emitidas.
        </Typography>
        <Typography className={classes.items}>
          Nuestra aplicación para Windows le permite gestionar todos los
          movimientos de su empresa mediante los siguientes módulos:
        </Typography>
        <Typography className={classes.subItems}>
          Catalogo de clientes, líneas, proveedores y productos
        </Typography>
        <Typography className={classes.subItems}>
          Facturación electrónica
        </Typography>
        <Typography className={classes.subItems}>
          Manejo de inventarios y detalle de movimientos (CARDEX)
        </Typography>
        <Typography className={classes.subItems}>
          Módulo para compras
        </Typography>
        <Typography className={classes.subItems}>
          Generación de proformas *
        </Typography>
        <Typography className={classes.subItems}>
          Ordenes de servicio para gestionar ordenes/guías de trabajo *
        </Typography>
        <Typography className={classes.subItems}>
          Reportes de movimientos entrantes y salientes
        </Typography>
        <Typography className={classes.subItems}>
          Reportes de anulación de transacciones
        </Typography>
        <Typography className={classes.subItems}>
          Reporte para declaración del IVA.
        </Typography>
        <Typography className={classes.special}>
          (*) Estos registros se convierten en factura con solo un click
        </Typography>
        <Typography className={classes.intro} style={{ marginBottom: "2%" }}>
          Conozca más de nuestros productos explorando las siguientes fichas
          técnicas
        </Typography>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center" spacing={8}>
          <Grid item xs={12} sm={8} md={6}>
            <MobileAppCard />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <WindowsAppCard />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <PlatformCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
