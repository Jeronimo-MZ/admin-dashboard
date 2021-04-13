import { createContext, useState } from "react";

export interface SidebarContextProps {
    isSidebarOpened: boolean;
    toggleSidebar: () => void;
}

const SidebarContext = createContext({} as SidebarContextProps);

export interface SidebarContextProviderProps {
    children: Object;
}

export const SidebarContextProvider: React.FC<SidebarContextProviderProps> = ({
    children,
}) => {
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpened(!isSidebarOpened);
    };
    return (
        <SidebarContext.Provider
            value={{
                isSidebarOpened,
                toggleSidebar,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarContext;
