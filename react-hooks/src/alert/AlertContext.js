import React, { useContext, useState } from "react";

const AlertContext = React.createContext();
export const useAlert = () => {
  return useContext(AlertContext);
};

// const AlertToggleContext = React.createContext();
// export const useAlertToggle = () => {
//   return useContext(AlertToggleContext);
// };

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const toggleAlert = () => setAlert((prev) => !prev);

  return (
    // <AlertContext.Provider value={alert}>
    <AlertContext.Provider
      value={{
        visible: alert,
        toggle: toggleAlert,
      }}
    >
      {/* <AlertToggleContext.Provider value={toggleAlert}> */}
      {children}
      {/* </AlertToggleContext.Provider> */}
    </AlertContext.Provider>
  );
};
