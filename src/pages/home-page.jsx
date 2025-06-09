import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "components/header";
import Footer from "components/footer";
import InfoPage from "./info-page";
import MobileAppPage from "./mobile-app-page";
import WindowsAppPage from "./windows-app-page";
import PlatformPage from "./platform-page";
import PricingPage from "./pricing-page";
import AppsPage from "./apps-page";
import PrivacyPolicyPage from "./privacy-policy-page";

function HomePage() {
  window.scrollTo(0, 0);
  return (
    <div id="id_app_content">
      <Router>
        <Header />
        <div style={{ marginTop: "262px", minWidth: "370px" }}>
          <Switch>
            <Route exact path="/home" component={InfoPage} />
            <Route exact path="/prices" component={PricingPage} />
            <Route exact path="/mobile" component={MobileAppPage} />
            <Route exact path="/windows" component={WindowsAppPage} />
            <Route exact path="/platform" component={PlatformPage} />
            <Route exact path="/apps" component={AppsPage} />
            <Route exact path="/privacypolicy" component={PrivacyPolicyPage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default HomePage;
