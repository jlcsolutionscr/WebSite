import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Loader from 'components/loader'
import Header from 'components/header'
import Footer from 'components/footer'
import InfoPage from './info-page'
import MobileAppPage from './mobile-app-page'
import WindowsAppPage from './windows-app-page.js'
import PlatformPage from './platform-page'
import PricingPage from './pricing-page'
import DownloadsPage from './downloads-page'
import PrivacyPolicyPage from './privacy-policy-page'

function HomePage() {
  const [isLoaderOpen, setLoaderOpen] = React.useState(false)
  window.scrollTo(0, 0)
  return (
    <div id='id_app_content'>
      <Router>
        <Loader isLoaderOpen={isLoaderOpen} loaderText="Descargando" />
        <Header />
        <div style={{marginTop: '262px', minWidth: '370px'}}>
          <Switch>
            <Route exact path="/home" component={InfoPage} />
            <Route exact path="/prices" component={PricingPage} />
            <Route exact path="/mobile" component={MobileAppPage} />
            <Route exact path="/windows" component={WindowsAppPage} />
            <Route exact path="/platform" component={PlatformPage} />
            <Route exact path="/downloads">
              <DownloadsPage setLoaderOpen={setLoaderOpen} />
            </Route>
            <Route exact path='/privacypolicy' component={PrivacyPolicyPage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default HomePage
