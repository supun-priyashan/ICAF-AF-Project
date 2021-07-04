import React, {Suspense} from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import PaymentPage from "./views/PaymentPage/PaymentPage";
import UploadWorkshopPage from "./views/AddWorkshopPage/UploadWorkshopPage";
import UploadResearchPage from "./views/AddResearchPaperPage/UploadPaperPage";
import PapersPage from "./views/PapersPage/PapersPage";
import ViewWorkshopPage from "./views/ViewWorkshopPage/ViewWorkshopPage";
import ConferenceEditPage from "./views/ConferenceEditPage/ConferenceEditPage";
import ApproveWorkshop from "./views/ApproveWorkshops/ApproveWorkshops";
import ApproveResearch from "./views/ApproveResearches/ApproveResearches";
import DownloadPage from "./views/DownloadablePage/DownloadablePage";
import ConferenceReviewPage from "./views/ConferenceReviewPage/ConferenceReviewPage";

function App() {

    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            <BrowserRouter>
                <NavBar />
                {/*<section>*/}
                <div style={{ paddingTop: '100px', minHeight: 'calc(100vh - 60px)' }}>
                    <Switch >
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/uploadWorkshop" component={UploadWorkshopPage} />
                        <Route path="/papers" component={PapersPage} />
                        <Route path="/workshops" component={ViewWorkshopPage} />
                        <Route path="/uploadPaper" component={UploadResearchPage} />
                        <Route path="/conferenceEdit" component={ConferenceEditPage} />
                        <Route path="/conferenceReview" component={ConferenceReviewPage} />
                        <Route path="/reviewResearches" component={ApproveResearch} />
                        <Route path="/reviewWorkshops" component={ApproveWorkshop} />
                        <Route path="/downloads" component={DownloadPage} />
                        <Route path="/payment" component={PaymentPage} />
                    </Switch>
                    </div>
                {/*</section>*/}
            </BrowserRouter>
          <Footer />
        </Suspense>
      );
}

export default App;
