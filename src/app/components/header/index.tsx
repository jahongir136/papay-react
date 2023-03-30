import {
  Badge,
  Button,
  ButtonBase,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export function NavbarHome(props: any) {
  //* INITIALIZATIONS **/
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(true);

  useEffect(() => {
    setCount(count + 1);
  }, [value]);

  return (
    <div className="format home_navbar">
      <Container>
        <Stack
          flexDirection={"row"}
          className="navbar_config"
          justifyContent={"space-between"}
        >
          <Box>
            <img src="/icons/papay.svg" />
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent="space-evenly"
            alignItems={"center"}
            className="navbar_links"
          >
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/" activeClassName="underline">
                Bosh sahifa
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/restaurant" activeClassName="underline">
                Oshxona
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/orders" activeClassName="underline">
                Buyurtma
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/community" activeClassName="under-line">
                Jamiyat
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/help" activeClassName="underline">
                Yordam
              </NavLink>
            </Box>

            <Box className="hover-line">
              <IconButton
                aria-label="cart"
                id="basic-button"
                aria-controls={undefined}
                aria-hospopup="true"
                aria-expanded={undefined}
                // onClick={handleClick}
              >
                <Badge badgeContent={3} color="secondary">
                  <img src={"/icons/shopping_cart.svg"} />
                </Badge>
              </IconButton>
            </Box>
            <Box>
              <Button
                variant="contained"
                style={{ color: " #ffffff", background: "#1976d2" }}
                onClick={props.handleLoginOpen}
              >
                KIRISH
              </Button>
            </Box>
          </Stack>
        </Stack>

        <Stack className="head_information" justifyContent={"row"}>
          <Stack
            justifyContent={"column"}
            style={{ marginTop: "86px", marginLeft: "24px" }}
          >
            <Box>
              {" "}
              <img src="/icons/wellcome.svg" />
            </Box>
            <Box className="define_restaurant">
              The Authentic Restaurant & Cafe
            </Box>
            <Box className="timeline_service">{count} soat xizmatdamiz.</Box>
            <Box sx={{ mt: "90px" }}>
              <Button
                variant="contained"
                style={{
                  width: "210px",
                  height: "60px",
                  background: "#1976d2",
                  color: "#ffffff",
                }}
                onClick={props.handleSignUpOpen}
              >
                RO'YHATDAN O'TISH
              </Button>
            </Box>
          </Stack>
          <Stack flexDirection={"column"}>
            <Box className="big_img"></Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
