import React, { useContext, useEffect, useState } from "react";
import { Container, Avatar, Box, Stack, Button } from "@mui/material";
import "../../../css/community.css";
import SendIcon from "@mui/icons-material/Send";
import { SocketContext } from "../../context/socket";

export function CommunityChats() {
  /**INITIALIZATIONS */
  const [messagesList, setMessageList] = useState([]);
  const socket = useContext(SocketContext);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);

  useEffect(() => {
    socket.connect();
    console.log("PRINTED");

    socket?.on("connect", function () {
      console.log("CLIENT: connected");
    });

    socket?.on("newMsg", (new_message: any) => {
      console.log("CLIENT: new message");
    });

    socket?.on("greetMsg", (new_message: any) => {
      console.log("CLIENT: greet message");
    });

    socket?.on("infoMsg", (msg: any) => {
      console.log("CLIENT: info message");
      setOnlineUsers(msg.total);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <Stack className={"chat_frame"}>
      <Box className={"chat_top"}>Jonli Muloqot {onlineUsers} </Box>
      <Box className={"chat_content"}>
        <Stack className={"chat_main"}>
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <div className={"msg_left"}>buyerda Jonli muloqot </div>
          </Box>
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            alignItems={"flex-end"}
            sx={{ m: "10px 0px " }}
          >
            <div className={"msg_right"}>Assalomalekum yaxshimsz</div>
          </Box>
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt={"martin"} src={"/community/cute_girl.jpeg"} />
            <div className={"msg_left"}>Volekum assalom raxmat </div>
          </Box>
        </Stack>
      </Box>
      <Box className={"chat_bott"}>
        <input
          type={"text"}
          name={"message"}
          className={"msg_input"}
          placeholder={"xabar jo'natish"}
        />
        <button className={"send_msg_btn"}>
          <SendIcon style={{ color: "#fff" }} />
        </button>
      </Box>
    </Stack>
  );
}
