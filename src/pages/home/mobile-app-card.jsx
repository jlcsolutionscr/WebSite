import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

import appImage from "assets/img/mobile-app.jpeg";
import { createStyle } from "../styles";

export default function MobileAppCard(props) {
  const classes = createStyle();
  const history = useHistory();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={appImage} />
      <CardContent>
        <Typography
          className={classes.subTitle}
          style={{ fontWeight: "700" }}
          color="textSecondary"
          component="p"
        >
          Sitio Web de facturación
        </Typography>
        <Typography className={classes.paragraph} paragraph>
          Facture desde cualquier dispositivo o computador de escritorio o
          portatil.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          classes={{ root: classes.button }}
          onClick={() => history.push("mobile")}
        >
          CONOZCA MAS
        </Button>
      </CardActions>
    </Card>
  );
}
