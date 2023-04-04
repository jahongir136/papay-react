import { createSelector } from "@reduxjs/toolkit";
import { create } from "domain";
import { AppRootState } from "../../../types/screen";

const selectRestaurantPage = (state: AppRootState) => state.restaurantPage;
export const retrieveTargetRestaurants = createSelector(
  selectRestaurantPage,
  (RestaurantPage) => RestaurantPage.targetRestaurants
);
export const retrieveRandomRestaurants = createSelector(
  selectRestaurantPage,
  (RestaurantPage) => RestaurantPage.randomRestaurants
);
export const retrieveChosenRestaurant = createSelector(
  selectRestaurantPage,
  (RestaurantPage) => RestaurantPage.chosenRestaurant
);
export const retrieveTrendProducts = createSelector(
  selectRestaurantPage,
  (RestaurantPage) => RestaurantPage.targetProducts
);
export const retrieveChosenProduct = createSelector(
  selectRestaurantPage,
  (RestaurantPage) => RestaurantPage.chosenProduct
);
