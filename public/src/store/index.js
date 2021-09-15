const Context = createContext();

const store = useContext(Context);


function Provider() {
   return (
      <Context.Provider value={{
         count,
         setCount
      }}>

      </Context.Provider>
   )
}