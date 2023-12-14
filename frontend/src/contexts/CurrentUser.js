import { createContext, useState } from 'react';

// Create a context for managing the current user
export const CurrentUser = createContext();

// Context provider component
const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    );
};
export default CurrentUserProvider