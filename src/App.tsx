import React from "react";
import { SidebarContextProvider } from "./contexts/SidebarContext";
import Routes from "./routes";
import "./styles/globals.css";

function App() {
    return (
        <SidebarContextProvider>
            <Routes />
        </SidebarContextProvider>
    );
}

export default App;
