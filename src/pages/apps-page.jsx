import React from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { createStyle } from "./styles";

function AppsPage() {
  const classes = createStyle();
  window.scrollTo(0, 0);

  return (
    <div id="id_download_page" className={classes.container}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Productos disponibles
      </Typography>
      <div style={{ textAlign: "center", width: "100%" }}>
        <Typography className={classes.subTitle} paragraph>
          Nuestro sitio web le permite gestionar su facturación desde su
          computador así como desde su dispositivo móvil, sea tablet o teléfono
        </Typography>
        <Link
          className={classes.appsLink}
          href="https://facturacion.jlcsolutionscr.com"
          target="_blank"
          rel="noreferrer"
        >
          https://facturacion.jlcsolutionscr.com
        </Link>
      </div>
    </div>
  );
}

export default AppsPage;
