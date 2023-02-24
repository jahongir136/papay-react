import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export function Footer() {
  return (
    <div className="footer_config">
      <Container>
        <Stack className="main_footer_container">
          <Stack flexDirection={"row"} style={{ height: "242px" }}>
            <Stack className="info" flexDirection={"column"}>
              <Box>
                <img src={"/papay_footer.svg"} />
              </Box>
              <Box className="main_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias voluptatibus, quod, rerum dolores quam adipisci vero
              </Box>
              <Stack className="contact_links">
                <Box>
                  <img src="/icons/facebook.svg" alt="facebook" />
                </Box>
                <Box>
                  <img src="/icons/twitter.svg" alt="facebook" />
                </Box>
                <Box>
                  <img src="/icons/instagram.svg" alt="facebook" />
                </Box>
                <Box>
                  <img src="/icons/youtube.svg" alt="facebook" />
                </Box>
              </Stack>
            </Stack>
            <Stack className="parts">
              <Box className="part_subject">Bo'limlar</Box>
              <Box className="divider"></Box>
              <Box className="targets">
                Bosh Sahifa Oshxonalar Jamiyat Yordam
              </Box>
            </Stack>
            <Stack className="find_us">
              <Box className="find">Bizni top</Box>
              <Box className="divider"></Box>
              <Stack className="details" sx={{ mt: "19px" }}>
                <Box className="detail_first">L.</Box>
                <Box className="detail_second">Uzbekistan</Box>
              </Stack>
              <Stack className="details" sx={{ mt: "42px" }}>
                <Box className="detail_first">P.</Box>
                <Box className="detail_second">+998 - 99 266 25 62</Box>
              </Stack>
              <Stack className="details" sx={{ mt: "9px" }}>
                <Box className="detail_first">E.</Box>
                <Box className="detail_second">Papays@restaurant.com</Box>
              </Stack>
            </Stack>
          </Stack>
          <Box className="liner"></Box>
          <Box className="copyrights">
            Copyright Papays 2022, All right reserved.
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
