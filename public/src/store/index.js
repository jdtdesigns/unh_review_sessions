import { createContext, useContext, useState } from "react";

const Store = createContext();

function Provider(props) {
   const [count, setCount] = useState(0);

   const data = {
      count,
      setCount
   };

   const mutations = {
      changeSomething() {

      }
   }

   return (
      <Store.Provider value={{ ...data, ...mutations }}>
         {props.children}
      </Store.Provider>
   )
}

export const useStore = () => {
   return useContext(Store);
}

export default Provider;