import { BrowserRouter, Route } from "react-router-dom";

import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tickets from "./pages/Tickets/Tickets";

// import { Container } from './styles';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard/" component={Dashboard} />
            <Route path="/tickets/" component={Tickets} />
        </BrowserRouter>
    );
};

export default Routes;
