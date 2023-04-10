import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectMeberPage = (state: AppRootState) => state.memberPage;
export const retriveChosenMember = createSelector(
  selectMeberPage,
  (MemberPage) => MemberPage.chosenMember
);
export const retriveChosenMemberBoArticles = createSelector(
  selectMeberPage,
  (MemberPage) => MemberPage.chosenMemberBoArticles
);
export const retriveChosenSingleBoArticle = createSelector(
  selectMeberPage,
  (MemberPage) => MemberPage.chosenSingleBoArticle
);
export const retriveMemberFollowers = createSelector(
  selectMeberPage,
  (MemberPage) => MemberPage.memberFollowers
);
export const retriveMemberFollowings = createSelector(
  selectMeberPage,
  (MemberPage) => MemberPage.memberFollowings
);
