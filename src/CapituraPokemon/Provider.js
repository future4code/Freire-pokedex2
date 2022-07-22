import AppContext from "./Context";


const AppProvider = ({ children }) => {


    return (
       
        <AppContext.Provider value={{user: ['teste1', 'teste2', 'teste5', 'teste6', 'teste 7']}}>
            {children}
        </AppContext.Provider>   
    )
}


export default AppProvider;