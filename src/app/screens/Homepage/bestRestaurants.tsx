import { Favorite, Visibility } from "@mui/icons-material";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
import { Box, Button, Container, Stack } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";

import React from "react";

export function BestRestaurants() {
  return (
    <div className="best_restaurant_frame">
      <img
        src={"icons/line_group.svg"}
        style={{ position: "absolute", left: "6%", transform: "rotate(90deg)" }}
      />
      <Container sx={{ paddingTop: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Zo'r Restaurantlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            <CssVarsProvider>
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"restaurant/burak-1.jpeg"} />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photograhpy"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0, 0, 0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "20px", mt: 2 }}>
                  Texas De Brazil
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent Yunus obod
                  </Link>
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 406 36 49
                  </Link>
                </Typography>
                <Typography
                  level="body3"
                  sx={{
                    fontWeight: "md",
                    color: "neutral.300",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                </Typography>
                <Box sx={{ width: 2, bgcolor: "divider" }} />
                <Typography
                  sx={{
                    fontWeight: "md",
                    color: "neutral.300",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div>50</div>
                  <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                </Typography>
              </Card>
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"restaurant/burak-1.jpeg"} />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photograhpy"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0, 0, 0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "20px", mt: 2 }}>
                  Texas De Brazil
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent Yunus obod
                  </Link>
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 406 36 49
                  </Link>
                </Typography>
                <Typography
                  level="body3"
                  sx={{
                    fontWeight: "md",
                    color: "neutral.300",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                </Typography>
                <Box sx={{ width: 2, bgcolor: "divider" }} />
                <Typography
                  sx={{
                    fontWeight: "md",
                    color: "neutral.300",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div>50</div>
                  <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                </Typography>
              </Card>
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"restaurant/burak-1.jpeg"} />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photograhpy"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0, 0, 0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "20px", mt: 2 }}>
                  Texas De Brazil
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent Yunus obod
                  </Link>
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 406 36 49
                  </Link>
                </Typography>
                <Typography
                  level="body3"
                  sx={{
                    fontWeight: "md",
                    color: "neutral.300",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                </Typography>
                <Box sx={{ width: 2, bgcolor: "divider" }} />
                <Typography
                  sx={{
                    fontWeight: "md",
                    color: "neutral.300",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div>50</div>
                  <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                </Typography>
              </Card>
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"restaurant/burak-1.jpeg"} />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photograhpy"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0, 0, 0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "20px", mt: 2 }}>
                  Texas De Brazil
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent Yunus obod
                  </Link>
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 406 36 49
                  </Link>
                </Typography>
                <Typography
                  level="body3"
                  sx={{
                    fontWeight: "md",
                    color: "neutral.300",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                </Typography>
                <Box sx={{ width: 2, bgcolor: "divider" }} />
                <Typography
                  sx={{
                    fontWeight: "md",
                    color: "neutral.300",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div>50</div>
                  <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                </Typography>
              </Card>
            </CssVarsProvider>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{ width: "100%", marginTop: "16px" }}
          >
            <Button style={{ background: "#1976d2", color: "white" }}>
              Barchasni ko'rish
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
