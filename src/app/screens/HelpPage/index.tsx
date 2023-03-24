import React, { useState, useEffect } from "react";
import { Container, Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "../../../css/help.css";

export function HelpPage() {
  /**INITIALIZATONS */
  const [value, setValue] = React.useState("1");
  const faq = [
    {
      question: "To'lov qanday amalga oshiriladi?",
      answer:
        "To'lovni Payme, click ilovalari orqali amalga oshirishingiz mumkin",
    },
    {
      question: "Buyurtmalar qancha vaqtda yetib keladi?",
      answer:
        "Buyurtmalar harid qilgan narsangizga qarab har xil vaqtda yetkazilishi mumkin. Maximum 1 soat ichida!",
    },
    {
      question:
        "Saytdan foydalansam ma'lumotlarim xavfsizligiga kafolat bormi?",
      answer:
        "albatta, bizning dasturchilamiz sizning ma'lumotlaringiz havfsizligiga kafolat berishadi",
    },
    {
      question: "saytda muammo yuzaga kelsa kimga murojaat qilaman?",
      answer:
        "Hurmatli mijoz, iltimos adminga xat yo'llash bo'limidan foydalaning",
    },
    {
      question:
        "Men foydalanuvchi emas biznesmen sifatida faoliyat yuritmoqchima. Nima qilishim kerak?",

      answer:
        "Hurmatli mijoz, saytda ko'rsatilgan telefon raqamlarga qo'ng'iroq qilishingizni so'rab qolamiz!",
    },
  ];
  const rules = [
    `Saytda to'laqonli yani buyurtmalar qilish , jonli muloqot qlish uchun ro'yhatdan o'tishingiz shart.`,
    `Buyurtmani tolovni amalga oshirgandan song bekor qlish imkoni yoq shuning uchun tolov qlishdan avval tekshrib oling`,
    `Jonli muloqot vaqtida behayo sozlardan foydalanish taqiqlanadi`,
    `Shaxsiy reklamalarni adminlar ruhsatisiz yozish va tarqatish mumkun emas`,
  ];

  /** HANDLERS */

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="help_page">
      <Container sx={{ mt: "50px", mb: "50px" }}>
        <TabContext value={value}>
          <Box className={"help_menu"}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <TabList
                value={value}
                onChange={handleChange}
                aria-label="lab API tbas example"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Tab label="Qoidalar" value={"1"} />
                <Tab label="FAQ" value={"2"} />
                <Tab label="Adminga hat" value={"3"} />
              </TabList>
            </Box>
          </Box>
          <Stack>
            <Stack className={"help_main_content"}>
              <TabPanel value={"1"}>
                <Stack className={"theRules_box"}>
                  <Box className={"theRulesFrame"}>
                    {rules.map((ele) => {
                      return <p>{ele}</p>;
                    })}
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel value="2">
                <Stack className={"accordian_menu"}>
                  {faq.map((ele) => {
                    return (
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panella-content"
                          id="panella-header"
                        >
                          <Typography>{ele.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{ele.answer}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Stack>
              </TabPanel>
              <TabPanel value={"3"}>
                <Stack className={"admin_letter_box"}>
                  <Stack className={"admin_letter_container"}>
                    <Box className={"admin_letter_frame"}>
                      <span>Adminga Xabar Qoldirish</span>
                      <p>
                        Assalomallekum adminga habar Qoldirish uchun forma
                        toldiring! {""}
                      </p>
                    </Box>
                    <form
                      action={"#"}
                      method={"POST"}
                      className={"admin_letter_frame"}
                    >
                      <div className={"admin_input_box"}>
                        <label>Ism</label>
                        <input
                          type={"text"}
                          name={"mb_nick"}
                          placeholder={"ism"}
                        />
                      </div>
                      <div className={"admin_input_box"}>
                        <label>elektiron manzil</label>
                        <input
                          type={"text"}
                          name={"mb_email"}
                          placeholder={"Elektiron manzil"}
                        />
                      </div>
                      <div className={"admin_input_box"}>
                        <label>Xabar</label>
                        <textarea
                          name={"mb_msg"}
                          placeholder={"Xabar"}
                        ></textarea>
                      </div>
                      <Box
                        display={"flex"}
                        justifyContent={"flex-end"}
                        sx={{ mt: "30px" }}
                      >
                        <Button type={"submit"} variant="contained">
                          Jo'natish
                        </Button>
                      </Box>
                    </form>
                  </Stack>
                </Stack>
              </TabPanel>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}
