import { Box, Container } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function Events() {
  const events_list = [
    {
      title: "Bo'yin foodga marhamat",
      desc: "☘️ Yangicha uslub Yangicha Tam va yangicha his",
      date: "2023/02/01",
      author: "Kentucky House",
      location: "Toshkent shaxar nurafshon ko'cha ",
      img: "/restaurant/img-1.jpeg",
    },

    {
      title: "Bo'yin foodga marhamat",
      desc: "☘️ Yangicha uslub Yangicha Tam va yangicha his",
      date: "2023/02/01",
      author: "Kentucky House",
      location: "Toshkent shaxar nurafshon ko'cha ",
      img: "/restaurant/img-1.jpeg",
    },
    {
      title: "Bo'yin foodga marhamat",
      desc: "☘️ Yangicha uslub Yangicha Tam va yangicha his",
      date: "2023/02/01",
      author: "Kentucky House",
      location: "Toshkent shaxar nurafshon ko'cha ",
      img: "/restaurant/img-1.jpeg",
    },
    {
      title: "Bo'yin foodga marhamat",
      desc: "☘️ Yangicha uslub Yangicha Tam va yangicha his",
      date: "2023/02/01",
      author: "Kentucky House",
      location: "Toshkent shaxar nurafshon ko'cha ",
      img: "/restaurant/img-1.jpeg",
    },
  ];

  return (
    <div className={"events_frame"}>
      <Container sx={{ overflow: "hidden" }}>
        <Stack className={"events_main"}>
          <Box className={"events_text"}>
            <span className="category_title">Hodisalar</span>
          </Box>
          <Box className={"prev_next_frame"}>
            <img
              src={"/icons/arrow_right.svg"}
              className={"swiper-button-prev"}
            />

            <img src={"/icons/nuqta.svg"} className={"swiper-button-prev"} />
            <img src={"/icons/nuqta.svg"} className={"swiper-button-prev"} />
            <img src={"/icons/nuqta-1.svg"} className={"swiper-button-prev"} />
            <img src={"/icons/nuqta.svg"} className={"swiper-button-prev"} />

            {/* <div className={"dot_frame_pagination swiper-pagination"}> </div> */}
            <img
              src={"/icons/arrow_right.svg"}
              className={"swiper-button-next"}
              style={{ transform: "rotate(-180deg)" }}
            />
          </Box>
          <Swiper
            className={"events_info swiper-wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {events_list.map((value, number) => {
              return (
                <SwiperSlide className={"events_info_frame"}>
                  <div className={"events_img"}>
                    <img src={value.img} className={"events_img"} />
                  </div>
                  <Box className={"events_desc"}>
                    <Box className={"events_bott"}>
                      <Box className={"bott_left"}>
                        <div className={"event_title_speaker"}>
                          <strong>{value.title}</strong>
                          <div className={"event_organizator"}>
                            <img
                              src={"/icons/speaker.svg"}
                              style={{ width: "20px", marginRight: "10px" }}
                            />
                            <p className={"spec_text_author"}>{value.author}</p>
                          </div>
                        </div>
                        <p
                          className={"text_desc"}
                          style={{ marginTop: "10px" }}
                        >
                          {" "}
                          {value.desc}{" "}
                        </p>

                        <div
                          className={"bott_info"}
                          style={{ marginTop: "10px" }}
                        >
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/calendar.svg"}
                              style={{ marginRight: "10px" }}
                            />
                            {value.date}
                          </div>
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/location.svg"}
                              style={{ marginRight: "10px" }}
                            />
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
