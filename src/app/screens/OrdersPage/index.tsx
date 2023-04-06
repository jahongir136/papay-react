import React, { useEffect, useState } from "react";
import { Container, Stack, Box } from "@mui/material";
import "../../../css/order.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "../../components/orders/pausedOrders";
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";
import { Order } from "../../../types/order";
//REDUX
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  setFinishedOrders,
  setPausedOrders,
  setProcessOrders,
} from "../../screens/OrdersPage/slice";
import OrderApiService from "../../apiServices/orderApiService";
import { Member } from "../../../types/user";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispach(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispach(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispach(setFinishedOrders(data)),
});

export function OrdersPage(props: any) {
  /** INITIALIZATIONS **/
  const [value, setValue] = useState("1");
  const { setFinishedOrders, setPausedOrders, setProcessOrders } =
    actionDispatch(useDispatch());

  const verifiedMemberData: Member | null = props.verifiedMemberData;

  useEffect(() => {
    const orderService = new OrderApiService();
    orderService
      .getMyOrders("paused")
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));
    // paused ordes
    // process ordes
    orderService
      .getMyOrders("process")
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));
    // finished ordes
    orderService
      .getMyOrders("finished")
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [props.setOrderRebuild]);

  /** HANDLERS **/

  const handleChange = (event: any, newValue: string) => {
    console.log("newValue", newValue);

    setValue(newValue);
  };

  return (
    <div className={"order_page"}>
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "50px", mb: "50px" }}
      >
        <Stack className={"order_left"}>
          <TabContext value={value}>
            <Box className={"order_nav_frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  value={value}
                  aria-label="basic tabs example"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Tab label="Buyurtmalarim" value={"1"} />

                  <Tab label="Jarayon" value={"2"} />

                  <Tab label="Yakunlangan" value={"3"} />
                </TabList>
              </Box>
            </Box>

            <Stack className={"order_main_content"}>
              <ProcessOrders setOrderRebuild={props.setOrderRebuild} />

              <FinishedOrders setOrderRebuild={props.setOrderRebuild} />
              <PausedOrders setOrderRebuild={props.setOrderRebuild} />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order_right"}>
          <Box className={"order_info_box"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <div className={"order_user_img"}>
                <img
                  src={verifiedMemberData?.mb_image}
                  className={"order_user_avatar"}
                />

                <div className={"order_user_icon_box"}>
                  <img
                    src={"/auth/default_user.svg"}
                    className={"order_user_prof_img"}
                  />
                </div>
              </div>

              <span className={"order_user_name"}>
                {verifiedMemberData?.mb_nick}
              </span>

              <span className={"order_user_prof"}>
                {verifiedMemberData?.mb_type ?? "Foydalanuvchi"}
                Foydalanuvchi
              </span>
            </Box>

            <Box
              style={{ border: "1px solid #A1A1A1" }}
              width={"100%"}
              sx={{ mt: "40px", mb: "8px" }}
            ></Box>

            <Box
              className={
                verifiedMemberData?.mb_address ?? "Manzil kiritilmagan"
              }
            >
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
              </div>

              <div className={"spec_address_txt"}>Tashkent Yunus Abad 4</div>
            </Box>
          </Box>

          <Box className={"order_info_box"} sx={{ mt: "15px" }}>
            <input
              type={"text"}
              name={"card_number"}
              placeholder={"Card number : 5243 4090 2002 7495"}
              className={"card_input"}
            />

            <div className="paypal_data">
              <input
                type={"text"}
                name={"card_paypal"}
                placeholder={"07 / 24"}
                className={"card_half_input"}
              />

              <input
                type={"text"}
                name={"card_cvv"}
                placeholder={"CVV : 010"}
                className={"card_half_input"}
              />
            </div>

            <input
              type={"text"}
              name={"card_name"}
              placeholder={"rasuljonov jahongir"}
              className={"card_input"}
            />

            <div className={"paypal_card"}>
              <img src={"/icons/westUnion_card.svg"} />
              <img src={"/icons/masterCard.svg"} />
              <img src={"/icons/paypalCard.svg"} />
              <img src={"/icons/visaCard.svg"} />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
