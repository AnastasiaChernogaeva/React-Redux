import React from "react";
import Main from "./Main";
import Alert from "./alert/Alert";
import { AlertProvider } from "./alert/AlertContext";

// export const AlertContext = React.createContext()




function App() {
  // const [alert, setAlert]=useState(false)
  // const toggleAlert = () => setAlert(prev=>!prev)
  return (
    // <AlertContext.Provider value={alert}>
    <AlertProvider>
    <div className={'container pt-3'}>
      <Alert/>
      {/* <Main toggle={toggleAlert}/>
       */}
      <Main/>

    </div>
    </AlertProvider>
    // </AlertContext.Provider>
  );
}

export default App;
