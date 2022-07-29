import { createContext, useState } from 'react';

export const AdminContext = createContext({
    showSideBar: false,
    setShowSideBar: () => {}
});


const AdminContextContainer = ({ children }) => {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <AdminContext.Provider value={{
            showSideBar,
            setShowSideBar,
        }}>
            { children }
        </AdminContext.Provider>
    );
};

export default AdminContextContainer;