import { createSelector } from "reselect";
import { CommunityPage } from ".";
import { AppRootState } from "../../../types/screen";

const selectCommunityPage = (state: AppRootState) => state.communityPage;
export const retriveTargetBoArticles = createSelector(
  selectCommunityPage,
  (CommunityPage) => CommunityPage.targetBoArticles
);
