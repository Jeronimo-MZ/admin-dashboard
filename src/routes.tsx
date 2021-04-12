import { BrowserRouter, Route } from "react-router-dom";

import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";

// import { Container } from './styles';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard/" component={Dashboard} />
            <Route path="/tickets/" component={Dashboard} />
        </BrowserRouter>
    );
};

export default Routes;
