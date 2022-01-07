import { Switch, Route } from "react-router";
import SignIn from "../pages/SignIn";
import RecipesList from "../pages/RecipesList";
import Recipe from "../pages/Recipe";

export default function Routes(){
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/recipes" component={RecipesList} />
        <Route exact path="/recipe/:id" component={Recipe} />
      </Switch>
    </>
  );
};
