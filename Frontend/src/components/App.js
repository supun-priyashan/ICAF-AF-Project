import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import CardPaymentPage from "./views/PaymentPage/CardPaymentPage";
import MobilePaymentPage from "./views/PaymentPage/MobilePaymentPage";

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/cardPayment" component={CardPaymentPage} />
          <Route exact path="/mobilePayment" component={MobilePaymentPage} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
