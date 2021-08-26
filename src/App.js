import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfiles } from "./API";
import Master from "./components/Master";
import FullProfile from "./components/FullProfile";

import MoonLoader from "react-spinners/MoonLoader";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProfiles = async () => {
    try {
      const data = await getProfiles();
      setProfiles(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <Router>
      <main className="container">
        <Switch>
          <Route exact path="/">
            {isLoading ? (
              <MoonLoader
                color={"#36D7B7"}
                loading={isLoading}
                css={"display:flex; margin-top: calc(50vh - 70px); "}
                size={70}
              />
            ) : (
              <Master profiles={profiles} />
            )}
          </Route>
          <Route
            path="/FullProfile"
            component={(props) => <FullProfile {...props} />}
          ></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
