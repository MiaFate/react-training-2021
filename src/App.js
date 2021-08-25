import "./App.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfiles } from "./API";
import Master from "./components/Master";
import FullProfile from "./components/FullProfile";

function App() {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    try {
      const data = await getProfiles();
      console.log(data);
      setProfiles(data);
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
        <header>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </header>

        <Switch>
          <Route exact path="/">
            <Master profiles={profiles} />
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
