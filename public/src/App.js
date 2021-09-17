import { useState, useContext, createContext } from 'react';
import Header from './components/Header';
import JobsList from './components/JobsList';
import FormContainer from './components/FormContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Store = createContext();

function App() {
  const [count, setCount] = useState(0);
  // useState gives you 2 things - val, function to update that value

  // using BrowserRouter outside of App component
  // Switch
  // exact
  return (
    <Store.Provider value={{
      count: count,
      setCount
    }}>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/">
            <JobsList />
          </Route>

          <Route path="/form">
            <FormContainer />
          </Route>

          <Route path="*">
            <h1>Page Not Found</h1>
          </Route>
        </Switch>

      </BrowserRouter>
    </Store.Provider>
  );
}

export const useStore = () => {
  return useContext(Store);
}


export default App;


  // Grab the value of the input element.addEventListener('onchange' (event) => grab the button and set textContent to the event.value)
  // Select the textContent and set to the value
  // myTestValue = 'something else now';
  // myEl.addEventListener('click', () => {
  //   // wait for this code to run only when the myEl is clicked
  // });

  // When input changes, call a callback function and setMyTestValue to the input's value