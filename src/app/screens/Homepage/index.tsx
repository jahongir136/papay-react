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
import { createSelector } from "reselect";
import { setTopRestaurants } from "../../screens/Homepage/slice";
import { retrievetopRestaurants } from "../../screens/Homepage/selector";
import { Restaurant } from "../../../types/user";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
});

/** REDUX SELECTOR */
const topRestaurantRetriever = createSelector(
  retrievetopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
);

export function Homepage() {
  /** INITIALLIZATION */
  const { setTopRestaurants } = actionDispatch(useDispatch());
  const { topRestaurants } = useSelector(topRestaurantRetriever);

  console.log("topRestaurants::", topRestaurants);

  useEffect(() => {
    // backend data request => data
    const data: Restaurant[] = [
      {
        _id: "6409bc23911a2da370171245",
        mb_nick: "Nusret",
        mb_phone: "9988932892",
        mb_type: "RESTAURANT",
        mb_status: "ACTIVE",
        mb_image: "uploads/members/840bc2ac-f547-46fc-8e2d-9d172d98fbb1.jpeg",
        mb_point: 0,
        mb_top: "N",
        mb_views: 3,
        mb_likes: 0,
        mb_follow_cnt: 3,
        mb_subscriber_cnt: 2,
        me_liked: [
          {
            mb_id: "6412dc2c6602c025db8e1a2d",
            like_ref_id: "6409bc23911a2da370171245",
            my_favorite: true,
          },
        ],
      },
    ];
    setTopRestaurants([]);
    // slice: data => store
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
