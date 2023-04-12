import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
//REDUX
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setMemberFollowers } from "./slice";
import { retriveMemberFollowers } from "./selector";
import { Follower } from "../../../types/follow";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setMemberFollowers: (data: Follower[]) => dispach(setMemberFollowers(data)),
});
// REDUX SELECTOR
const memberFollowersRetriever = createSelector(
  retriveMemberFollowers,
  (memberFollowers) => ({
    memberFollowers,
  })
);

const followers = [
  { mb_nick: "ozod", following: true },
  { mb_nick: "umid", following: false },
  { mb_nick: "Ron", following: true },
];

export function MemberFollowers(props: any) {
  /**INITIALIZATIONS */
  const { setMemberFollowers } = actionDispatch(useDispatch());
  const { memberFollowers } = useSelector(memberFollowersRetriever);
  //setMemberFollowers

  /** HANDLERS */
  //subscribeHandler

  return (
    <Stack>
      {followers.map((follower) => {
        const image_url = "/auth/default_user.svg";
        return (
          <Box className={"follow_box"}>
            <Avatar alt={""} src={image_url} sx={{ width: 89, height: 89 }} />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
              }}
            >
              <span className={"username_text"}>USER</span>
              <span className={"name_text"}>{follower.mb_nick}</span>
            </div>
            {props.actions_enabled &&
              (follower.following ? (
                <Button
                  variant={"contained"}
                  className={"following_already"}
                  disabled
                >
                  FOLLOWING
                </Button>
              ) : (
                <Button
                  variant={"contained"}
                  startIcon={
                    <img
                      src={"/icons/follow_icon.svg"}
                      style={{ width: "40px" }}
                    />
                  }
                  className={"follow_btn"}
                >
                  Follow Back
                </Button>
              ))}
          </Box>
        );
      })}
    </Stack>
  );
}
