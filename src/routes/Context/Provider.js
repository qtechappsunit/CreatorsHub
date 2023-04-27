import React, { createContext, useState } from 'react';


export const OptionContext = createContext();

const Provider = ({ children }) => {
    const [navBar, setNavBar] = useState(false)

    return (
        <OptionContext.Provider
            value={{
                navBar,
                setNavBar,
            }}
        >
            {children}
        </OptionContext.Provider>
    )
}

export default Provider;
