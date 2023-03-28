import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import { Recommendations } from "./recommendations";
import "../../../css/home.css";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setTopRestaurants,
  setBestRestaurants,
} from "../../screens/Homepage/slice";
import { retrievetopRestaurants } from "../../screens/Homepage/selector";
import { Restaurant } from "../../../types/user";
import RestaurantApiServices from "../../apiServices/restaurantApiServices";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
  setBestRestaurants: (data: Restaurant[]) => dispach(setBestRestaurants(data)),
});

export function Homepage() {
  /** INITIALLIZATION */
  const { setTopRestaurants, setBestRestaurants } = actionDispatch(
    useDispatch()
  );

  useEffect(() => {
    // backend data request => data
    const restaurantServices = new RestaurantApiServices();
    restaurantServices
      .getTopRestaurants()
      .then((data) => {
        setTopRestaurants(data);
      })
      .catch((err) => console.log(err));

    restaurantServices
      .getRestaurants({ page: 1, limit: 4, order: "mb_point" })

      .then((data) => {
        setBestRestaurants(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommendations />
    </div>
  );
}
