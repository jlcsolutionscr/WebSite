import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { StarIcon } from "utils/iconsHelper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 10%",
    backgroundColor: "white",
    marginBottom: "7%",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(2, 0, 6),
  },
  card: {
    boxShadow: "5px 5px 5px #888888",
    maxWidth: "420px",
    margin: "auto",
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  priceLabel: {
    fontSize: "2.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  restLabel: {
    fontSize: "1.6rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));

const tiers = [
  {
    title: "24 documentos * (Pago único ANUAL)",
    price: "14,500.00",
    description: [
      "1 usuario",
      "24 documentos electrónicos",
      "Windows, MAC, Android o IPhone",
      "Sitio web de facturación",
      "Soporte técnico",
      "Recepción de gastos límitados",
    ],
  },
  {
    title: "60 documentos * (Pago único ANUAL)",
    price: "21,500.00",
    description: [
      "1 usuario",
      "60 documentos electrónicos",
      "Windows, MAC, Android o IPhone",
      "Sitio web de facturación",
      "Clientes, productos, facturación y proformas",
      "Soporte técnico",
      "Recepción de gastos límitados",
    ],
  },
  {
    title: "150 documentos * (Pago único ANUAL)",
    price: "30,000.00",
    description: [
      "1 usuario",
      "150 documentos electrónicos",
      "Windows, MAC, Android o IPhone",
      "Sitio web de facturación",
      "Clientes, productos, facturación y proformas",
      "Soporte técnico",
      "Recepción de gastos límitados",
    ],
  },
  {
    title: "PYMES 1 ** (Pago MENSUAL)",
    subheader: "Most popular",
    price: "8,500.00",
    description: [
      "Usuarios ilimitados",
      "300 documentos electrónicos por mes",
      "Windows, MAC, Android o IPhone",
      "Sitio web de facturación",
      "Clientes, productos, facturación y proformas",
      "Recepción de gastos ilimitados",
      "Soporte técnico",
    ],
  },
  {
    title: "EMPRESARIAL 1 ** (Pago MENSUAL)",
    price: "14,000.00",
    description: [
      "Usuarios ilimitados",
      "1,000 documentos electrónicos por mes",
      "Windows, MAC, Android o IPhone",
      "Sitio web y aplicación de escritorio (Windows)",
      "Clientes, productos, facturación y proformas",
      "Soporte técnico",
    ],
  },
  {
    title: "EMPRESARIAL 2 ** (Pago MENSUAL)",
    price: "21,000.00",
    description: [
      "Usuarios ilimitados",
      "1,750 documentos electrónicos por mes",
      "Windows, MAC, Android o IPhone",
      "Sitio web y aplicación de escritorio (Windows)",
      "Recepción de gastos ilimitados",
      "ERP Completo (Cierre, CxC, CxP, Orden de servicio",
      "Soporte técnico",
    ],
  },
  {
    title: "EMPRESARIAL 3 ** (Pago MENSUAL)",
    price: "28,250.00",
    description: [
      "Usuarios ilimitados",
      "2,500 documentos electrónicos por mes",
      "Windows, MAC, Android o IPhone",
      "Sitio web y aplicación de escritorio (Windows)",
      "Recepción de gastos ilimitados",
      "ERP Completo (Cierre, CxC, CxP, Orden de servicio",
      "Soporte técnico",
    ],
  },
  {
    title: "EMPRESARIAL 4 ** (Pago MENSUAL)",
    price: "70,500.00",
    description: [
      "Usuarios ilimitados",
      "10,000 facturas por mes",
      "Windows, MAC, Android o IPhone",
      "Sitio web y aplicación de escritorio (Windows)",
      "ERP Completo (Cierre, CxC, CxP, Orden de servicio",
      "Soporte técnico",
    ],
  },
  {
    title: "EMPRESARIAL PRO ** (Pago MENSUAL)",
    price: "140,500.00",
    description: [
      "Usuarios ilimitados",
      "Facturas ilimitadas",
      "Windows, MAC, Android o IPhone",
      "Sitio web y aplicación de escritorio (Windows)",
      "Recepción de gastos ilimitados",
      "ERP Completo (Cierre, CxC, CxP, Orden de servicio",
      "Soporte técnico",
    ],
  },
];

function PricingPage() {
  const classes = useStyles();
  window.scrollTo(0, 0);
  return (
    <div className={classes.container}>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Nuestros planes (Pago Mensual)
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} justifyContent="center">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={10} md={6}>
              <Card className={classes.card}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.subheader ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography
                      className={classes.priceLabel}
                      color="textPrimary"
                    >
                      {tier.price}
                    </Typography>
                    <Typography
                      className={classes.restLabel}
                      color="textPrimary"
                    >
                      {"(I.V.A.I.)"}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="left"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography
          style={{ marginTop: "50px" }}
          component="h1"
          variant="h6"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          * Todos los planes prepago tienen vigencia de 1 año a partir de la
          activación de la cuenta, pasado este tiempo, los documentos sin uso
          expiran.
        </Typography>
        <Typography
          style={{ marginTop: "50px" }}
          component="h1"
          variant="h6"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          ** Al adquirir un plan anual recibirá un descuento equivalente a dos
          mensualidades. Planes tienen vigencia de 1 mes a partir de la
          activación de la cuenta, los documentos no son acumulativos.
        </Typography>
      </Container>
    </div>
  );
}

export default PricingPage;
