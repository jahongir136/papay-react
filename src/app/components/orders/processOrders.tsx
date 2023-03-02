import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import moment from "moment";

const processOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function ProcessOrders(props: any) {
  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order) => {
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
                        <p>$11</p>
                        <img src={"/icons/Close.svg"} />
                        <p>10</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>$110</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className={"total_price_box blue_solid"}>
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
