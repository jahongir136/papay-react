import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Marginer from "../../components/marginer";

export function Statistics() {
  return (
    <div className="static_frame">
      <Container>
        <Stack
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          style={{ height: "236" }}
        >
          <div className="personage_img left"></div>
          <Stack className="static_box">
            <Box className="static_num">12</Box>
            <Box className="static_text">Restaurants</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#E3C08D" />
          <Stack className="static_box">
            <Box className="static_num">8</Box>
            <Box className="static_text">Years Experience</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#E3C08D" />

          <Stack className="static_box">
            <Box className="static_num">50+</Box>
            <Box className="static_text">Menu Ovqatllar</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#E3C08D" />

          <Stack className="static_box">
            <Box className="static_num">200+</Box>
            <Box className="static_text">Foydalanuvchilar</Box>
          </Stack>

          <div className="personage_img right"></div>
        </Stack>
      </Container>
    </div>
  );
}
