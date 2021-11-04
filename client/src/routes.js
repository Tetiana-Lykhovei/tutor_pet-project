import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AboutUsPage } from "./pages/AboutUsPage";
import { CabinetPage } from "./pages/CabinetPage";
import { ContactsPage } from "./pages/ContactsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProgramsPage } from "./pages/ProgramsPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <AboutUsPage />
        </Route>

        <Route path="/cabinet" exact>
          <CabinetPage />
        </Route>

        <Route path="/contacts" exact>
          <ContactsPage />
        </Route>

        <Route path="/services" exact>
          <ServicesPage />
        </Route>

        <Route path="/programs" exact>
          <ProgramsPage />
        </Route>
        <Redirect to="/cabinet" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AboutUsPage />
      </Route>

      <Route path="/contacts" exact>
        <ContactsPage />
      </Route>

      <Route path="/services" exact>
        <ServicesPage />
      </Route>

      <Route path="/study" exact>
        <ProgramsPage />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};
