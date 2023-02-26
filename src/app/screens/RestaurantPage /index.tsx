import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ChosenDish } from "./chosenDish";
import { OneRestaurants } from "./oneRestaurants";
import { AllRestaurants } from "./allRestaurants";

export function RestaurantPage() {
  let restaurant = useRouteMatch();
  console.log(restaurant);
  return (
    <div className="restaurant_page">
      <Switch>
        <Route path={`${restaurant.path}/dish/:dish_id`}>
          <ChosenDish />
        </Route>
        <Route path={`${restaurant.path}/:restaurant_id`}>
          <OneRestaurants />
        </Route>
        <Route path={`${restaurant.path}`}>
          <AllRestaurants />
        </Route>
      </Switch>
    </div>
  );
}
