import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";

const restaurant_list = Array.from(Array(10).keys());
const product_list = Array.from(Array(8).keys());

export function OneRestaurants() {
  return (
    <div className="single_restaurant">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar_big_box"}>
            <Box className={"top_text"}>
              <p>Hojibobo Restaurant</p>
              <Box className={"Single_search_big_box"}>
                <form className={"Single_search_form"} action={""} method={""}>
                  <input
                    type={"search"}
                    className={"Single_searchInput"}
                    name={"Single_resSearch"}
                    placeholder={"Qidruv"}
                  />

                  <Button
                    className={"Single_button_search"}
                    variant="contained"
                    endIcon={<SearchIcon />}
                  >
                    Izlash
                  </Button>
                </form>
              </Box>
            </Box>
          </Stack>

          <Stack
            style={{ width: "100%", display: "flex" }}
            flexDirection={"row"}
            sx={{ mt: "35px" }}
          >
            <Box className={"prev_btn restaurant-prev"}>
              <ArrowBackIosNewIcon
                sx={{ fontSize: 40 }}
                style={{ color: "white" }}
              />
            </Box>
            <Swiper
              className={"restaurant_avatars_wrapper"}
              slidesPerView={7}
              centeredSlides={false}
              spaceBetween={30}
              navigation={{
                nextEl: ".restaurant-next",
                prevEl: ".restaurant-prev",
              }}
            >
              {restaurant_list.map((ele, index) => {
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer" }}
                    key={index}
                    className={"restaurant_avatars"}
                  >
                    <img src={"/restaurant/burak-1.jpeg"} />
                    <span>Burak</span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Box
              className={"next_btn restaurant-next"}
              style={{ color: "white" }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
            </Box>
          </Stack>

          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            width={"90%"}
            sx={{ mt: "65px" }}
          >
            <Box className={"dishs_filter_box"}>
              <Button variant="contained" color="secondary">
                new
              </Button>
              <Button variant="contained" color="secondary">
                price
              </Button>
              <Button variant="contained" color="secondary">
                likes
              </Button>
              <Button variant="contained" color="secondary">
                views
              </Button>
            </Box>
          </Stack>

          <Stack
            style={{ width: "100%", display: "flex", minHeight: "600px" }}
            flexDirection={"row"}
          >
            <Stack className={"dish_category_box"}>
              <div className={"dish_category_main"}>
                <Button variant={"contained"} color="secondary">
                  Boshqa
                </Button>
                <Button variant={"contained"} color="secondary">
                  desert
                </Button>
                <Button variant={"contained"} color="secondary">
                  ichmliklar
                </Button>
                <Button variant={"contained"} color="secondary">
                  salad
                </Button>
                <Button variant={"contained"} color="secondary">
                  ovqatlar
                </Button>
              </div>
            </Stack>
            <Stack className={"dish_wrapper"}>
              {product_list.map((ele, index) => {
                const size_volume = "normal size";

                return (
                  <Box className={"dish_box"} key={`${index}`}>
                    <Box
                      className={"dish_img"}
                      sx={{
                        backgroundImage: `url("/others/qovurma.jpg")`,
                      }}
                    >
                      <div className={"dish_sale"}>{size_volume} </div>
                      <Button
                        className={"like_view_btn"}
                        style={{ left: "36px" }}
                      >
                        <Badge badgeContent={8} color="primary">
                          <Checkbox
                            icon={<FavoriteBorder style={{ color: "white" }} />}
                            id={`${index}`}
                            checkedIcon={<Favorite style={{ color: "red" }} />}
                            /**@ts-ignore */
                            checked={true}
                          />
                        </Badge>
                      </Button>
                      <Button className={"view_btn"}>
                        <img
                          src={"/icons/shopping_cart.svg"}
                          style={{ display: "flex" }}
                        />
                      </Button>
                      <Button
                        className={"like_view_btn"}
                        style={{ right: "36px" }}
                      >
                        <Badge badgeContent={1000} color="primary">
                          <Checkbox
                            icon={
                              <RemoveRedEyeIcon style={{ color: "white" }} />
                            }
                          />
                        </Badge>
                      </Button>
                    </Box>
                    <Box className={"dish_desc"}>
                      <span className={"dish_title_text"}>Shirin qovurma</span>
                      <div className={"dish_decs_text"}>
                        <MonetizationOnIcon style={{ color: "orange" }} /> 15
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <div className={"review_for_restaurant"}>
        <Container
          sx={{ mt: "100px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className={"category_title"}>Oshhona haqida fikirlar </Box>
          <Stack
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            {Array.from(Array(4).keys()).map((ele, index) => {
              return (
                <Box className={"review_box"} key={index}>
                  <Box display={"flex"} justifyContent={"center"}>
                    <img
                      src={"/community/cute_girl.jpeg"}
                      className={"review_img"}
                    />
                  </Box>
                  <span className={"review_name"}>Muslim qiz</span>
                  <span className={"review_prof"}>Foydalanuvchi</span>
                  <p className={"review_desc"}>
                    Menga bu oshhonani tami juda yoqdi . Hammaga taklif
                    etaman!!!
                  </p>
                  <div className={"review_stars"}>
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "whitesmoke" }} />
                    <StarIcon style={{ color: "whitesmoke" }} />
                  </div>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </div>

      <Container className={"member_reviews"}>
        <Box className={"category_title"}> Oshhona haqida</Box>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          width={"90%"}
          sx={{ mt: "70px" }}
        >
          <Box
            className={"about_left"}
            sx={{
              backgroundImage: `url(/restaurant/texasDeBrasil.jpeg)`,
            }}
          >
            <div className={"about_left_desc"}>
              <span>Burak</span>
              <p>Eng mazali oshhona</p>
            </div>
          </Box>
          <Box className={"about_right"}>
            {Array.from(Array(3).keys()).map((ele, index) => {
              return (
                <Box display={"flex"} flexDirection={"row"} key={index}>
                  <div className={"about_right_img"}></div>
                  <div className={"about_right_desc"}>
                    <span>Bizning mohir oshpazlarimz</span>
                    <p>Bizning oshpazlarimiz dunyoga tengi yoq oshpazlardir</p>
                  </div>
                </Box>
              );
            })}
          </Box>
        </Stack>

        <Stack
          sx={{ mt: "60px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className={"category_title"}>Oshhona manzili</Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12638.061009986559!2d127.0251761!3d37.6370888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbd211d16494f%3A0x2b2f9fdc60ff139!2sJS%20GLOBAL%20CORP!5e0!3m2!1sko!2skr!4v1677564055061!5m2!1sko!2skr"
            width="1320"
            height="500"
          ></iframe>
        </Stack>
      </Container>
    </div>
  );
}
