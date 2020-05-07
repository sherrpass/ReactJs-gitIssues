import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import SearchBar from "./Search/SearchBar";
import SearchPage from "./Search/SearchPage";
import ResultPage from "./Result/ResultPage";

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={SearchBar} />
                        <Route
                            path="/search/:query/:page"
                            exact
                            component={SearchPage}
                        />
                        <Route path="/result" exact component={ResultPage} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
