import React from "react";
import Categories from "./components/Categories";
import EditCategory from "./components/EditCategory";
import CategoryState from "./context/CategoryState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// todo: 1.moreEfficient Update of category with index, 2.propTypes

const App = () => {
  return (
    <CategoryState>
        <Router>
          <Switch>
            <Route exact path="/" component={Categories} />
            <Route path="/edit/:id" component={EditCategory} />
          </Switch>
        </Router>
    </CategoryState>
  );
};

export default App;
