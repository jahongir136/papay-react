import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

const finishedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function FinishedOrders(props: any) {
  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = "/others/qovurma.jpg";
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImage"} />
                      <p className={"titleDish"}>Qovurma</p>
                      <Box className={"priceBox"}>
                        <p>$12</p>
                        <img src={"/icons/Close.svg"} />
                        <p>2</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>$22</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className={"total_price_box red_solid"}>
                <Box className={"boxTotal"}>
                  <p>maxsulot narxi</p>
                  <p>$22</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>Yetkazish xizmati</p>
                  <p>$2</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Jami narxi</p>
                  <p>$24</p>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
