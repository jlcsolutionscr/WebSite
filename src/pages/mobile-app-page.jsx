import React from "react";

import Grid from "@material-ui/core/Grid";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { ExpandMoreIcon } from "utils/iconsHelper";
import LoginImage from "assets/img/login.png";
import MenuImage from "assets/img/menu.png";
import FirstSignInStepImage from "assets/img/signin-paso-1.png";
import SecondSignInStepImage from "assets/img/signin-paso-2.png";
import FirstInvoiceStepImage from "assets/img/factura-paso-1.png";
import SecondInvoiceStepImage from "assets/img/factura-paso-2.png";
import ThirdInvoiceStepImage from "assets/img/factura-paso-3.png";
import InvoiceListImage from "assets/img/listado-facturas.png";
import FirstDocumentStepImage from "assets/img/listado-documentos.png";
import SecondDocumentStepImage from "assets/img/reenvio-notificacion.png";
import ThirdDocumentStepImage from "assets/img/detalles-documento.png";
import ReportGenerationImage from "assets/img/reportes.png";
import { createStyle } from "./styles";

function MobileAppPage() {
  const classes = createStyle();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  window.scrollTo(0, 0);
  return (
    <div id="id_mobile_app_page" className={classes.container}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Sitio Web de facturación para móbiles Android
      </Typography>
      <Typography className={classes.subTitle} paragraph>
        Con nuestro sitio web para facturación electrónica usted podrá gestionar
        su facturación desde cualquier sitio donde se encuentre. Esta aplicación
        le permite actualizar su portafolio de clientes y productos totalmente
        en tiempo real, revisar sus facturas y documentos electrónicos emitidos
        y la generación de reportes con solo unos clicks usted podrá mantener
        actualizada su empresa y generar sus facturas en el momento en que
        materializa su transacción con su cliente.
      </Typography>
      <Accordion
        classes={{ root: classes.expantionPanel }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          classes={{ expandIcon: classes.expantionIcon }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.expantionTitle}>
            Registre su dispositivo
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block" }}>
          <Typography className={classes.paragraph}>
            Registrando su dispositivo móbil le garantiza que sus documentos son
            generados donde y cuando usted lo desea, el registro se realiza una
            única vez al inicio de la instalación de la aplicación. En caso de
            ser requerido se puede registrar un dispositivo nuevo mediante la
            pantalla de registro.
          </Typography>
          <Typography className={classes.paragraph}>
            Para registrar su dispositivo realice los siguientes pasos:
          </Typography>
          <Typography className={classes.paragraphList}>
            Paso 1: Ingrese el usuario y contraseña brindados por su proveedor
            del servicio en conjunto con el número de identificación registrado
            en el Ministerio de Hacienda y de click en el botón 'OBTENER
            TERMINALES DISPONIBLES'.
          </Typography>
          <Typography className={classes.paragraphList}>
            Paso 2: Seleccione la terminal de la lista y de click en el botón
            'REGISTRAR TERMINAL'.
          </Typography>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={12} md={6}>
              <img
                src={FirstSignInStepImage}
                className={classes.twoImages}
                alt="not available"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={SecondSignInStepImage}
                className={classes.twoImages}
                alt="not available"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        classes={{ root: classes.expantionPanel }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          classes={{ expandIcon: classes.expantionIcon }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.expantionTitle}>
            Ingrese a la aplicación
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block" }}>
          <Typography className={classes.paragraph}>
            Nuestra plataforma cuenta con las mas actuales medidas de seguridad
            al incluir comunicación segura mediante protocolo HTTPS asi como
            certificado de confianza. Adicionalmente cuenta con un sistema de
            sesión mediante usuario y contraseña con expiración para garantizar
            que usted es quien ingresa a nuestro sistema. Una vez que
            proporciona los credenciales válidos podrá tener acceso al menu
            principal.
          </Typography>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={12} md={6}>
              <img
                src={LoginImage}
                className={classes.twoImages}
                alt="not available"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={MenuImage}
                className={classes.twoImages}
                alt="not available"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        classes={{ root: classes.expantionPanel }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          classes={{ expandIcon: classes.expantionIcon }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.expantionTitle}>
            Genere su factura
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block" }}>
          <Typography className={classes.paragraph}>
            Con tres sencillos pasos puede generar su factura electrónica:
          </Typography>
          <Typography className={classes.paragraphList}>
            Paso 1: Selección del cliente receptor dando click en el campo
            'Seleccione un cliente'.
          </Typography>
          <Typography className={classes.paragraphList}>
            Paso 2: Agregue las líneas de factura dando click en el campo
            'Seleccione un producto', ajuste la cantidad, precio y descripción
            (si es requerido) y de click en el icono celeste a la par del precio
            que posee un signo de '+'.
          </Typography>
          <Typography className={classes.paragraphList}>
            Paso 3: Verifique el resumen y genere su factura mediante un click
            en el botón con etiqueta 'GENERAR'.
          </Typography>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={12} md={4}>
              <img
                src={FirstInvoiceStepImage}
                className={classes.threeImages}
                alt="not available"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src={SecondInvoiceStepImage}
                className={classes.threeImages}
                alt="not available"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src={ThirdInvoiceStepImage}
                className={classes.threeImages}
                alt="not available"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        classes={{ root: classes.expantionPanel }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          classes={{ expandIcon: classes.expantionIcon }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.expantionTitle}>
            Administre sus facturas
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block" }}>
          <Typography>
            Mediante el botón 'FACTURAS EMITIDAS' usted podrá visualizar todas
            sus facturas y realizar anulaciones mediante un click en el icono de
            anular, las cuales generar automáticamente las respectivas notas de
            crédito para el Ministerio de Hacienda.
          </Typography>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={12} md={12}>
              <img
                src={InvoiceListImage}
                className={classes.oneImage}
                alt="not available"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        classes={{ root: classes.expantionPanel }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          classes={{ expandIcon: classes.expantionIcon }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.expantionTitle}>
            Gestione sus documentos electrónicos
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block" }}>
          <Typography>
            Mediante el botón 'DOCUMENTOS ELECTRONICOS EMITIDOS' usted tedrá
            acceso al listado de sus documentos electrónicos emitidos, como
            facturas electrónicas, tiquetes electrónicos, notas de crédito
            electrónicas y mensajes de recepción de facturas. Podrá visualizar
            la respuesta del Misiterio de Hacienda y realizar el reenvío del
            comprobante electrónico al correo de sus clientes con un solo click.
          </Typography>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={12} md={4}>
              <img
                src={FirstDocumentStepImage}
                className={classes.threeImages}
                alt="not available"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src={SecondDocumentStepImage}
                className={classes.threeImages}
                alt="not available"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src={ThirdDocumentStepImage}
                className={classes.threeImages}
                alt="not available"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        classes={{ root: classes.expantionPanel }}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          classes={{ expandIcon: classes.expantionIcon }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.expantionTitle}>
            Envíe sus reportes a su correo
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block" }}>
          <Typography>
            Mediante el botón 'GENERAR REPORTES' usted podrá gestionar la
            generación de los reportes deseados los cuales le serán enviados a
            el correo electrónico registrado en su empresa en formato PDF.
          </Typography>
          <Typography className={classes.paragraph}>
            Para solicitar un reporte siga los siguientes pasos:
          </Typography>
          <Typography className={classes.paragraphList}>
            Paso 1: Seleccione un reporte de la lista disponible.
          </Typography>
          <Typography className={classes.paragraphList}>
            Paso 2: Seleccione el rango de fechas deseado.
          </Typography>
          <Typography className={classes.paragraphList}>
            Paso 3: Solicite la generación de su reporte con un click en el
            botón con etiqueta 'ENVIAR REPORTE'.
          </Typography>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={12} md={12}>
              <img
                src={ReportGenerationImage}
                className={classes.oneImage}
                alt="not available"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MobileAppPage;
