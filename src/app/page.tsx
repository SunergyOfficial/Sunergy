import * as React from "react";
import Banner from "@/components/Banner";
import { Box, List, ListItem, Typography } from "@mui/material";
import AnimatedPointSphere from "@/components/DotSpere3D";
import CookieConsent from "@/components/CookieConsent";
import Image from "next/image";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import TextFade from "@/components/TextFade";
import { e_skills, t_skills, s_skills } from "@/data/Skill";
import ContactForm from "@/components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const cookieStore = cookies();
  const consent = cookieStore.get("consent");
  const hasConsent = !!consent;

  const procedure = [
    "待解的程式挑戰",
    "教授程式相關英文片語及單字",
    "講解程式邏輯和用法",
    "學生試解程式挑戰題",
    "提供英語片語和單字，讓學生構思如何用英語表達自己的解題過程",
    "個別發表與小組討論",
    "總結與說明",
  ];

  return (
    <>
      <Banner />

      {/*Three Columnns of Skills */}
      <Box
        id="skill"
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <TextFade
          DOM_array={["#e_skill_1", "#e_skill_2"]}
          Icon_path="/pink_triangle.png"
          title="英語力"
          content={e_skills}
        />
        <TextFade
          DOM_array={["#t_skill_1", "#t_skill_2"]}
          Icon_path="/blue_triangle.png"
          title="科技力"
          content={t_skills}
        />
        <TextFade
          DOM_array={["#e_skill_1", "#e_skill_2"]}
          Icon_path="/logo.png"
          title="薩格茲力"
          content={s_skills}
        />
      </Box>
      {/*Text and 3D Object Area */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/*3D Area on the left (only desktop) */}
        <Box
          flex="1 1 50%"
          justifyContent="center"
          display={{ xs: "none", md: "flex" }}
        >
          <AnimatedPointSphere width={600} height={450} />
        </Box>
        {/*3D Area at the top (only middle-size device) */}
        <Box
          flex="1 1 50%"
          justifyContent="center"
          display={{ xs: "flex", md: "none" }}
          sx={{ mb: 5 }}
        >
          <AnimatedPointSphere width={400} height={300} />
        </Box>
        {/*Text Area on the right */}
        <Box
          flex="1 1 50%"
          flexDirection="column"
          alignItems="flex-start"
          px={{ xs: 5, md: 15 }}
        >
          <Typography
            sx={{
              color: "#3FBBF7",
              fontWeight: "600",
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "24px", md: "32px" },
              textAlign: "left",
              mb: 2,
            }}
          >
            雙效學習 事半功倍
          </Typography>
          <Typography lineHeight={2} mb={2}>
            一般語言教學系統將語言和科技素養分開教授，然而人腦運作的方式是聯想法，能輕易地將同個時空環境的事物在腦中串連起來。因此，若在學習科技（例程式語言）和英文時，無任何時空或環境背景的重疊，很容易在專攻其中一項時，荒廢了另外一項，這造成許多人說「人生中英文巔峰的時候是高中」。其實，在學習英文的過程若能結合自己的專項，即便時間久了，也能輕易的聯想到相關的英文用法。
          </Typography>
          <Typography lineHeight={2} mb={2}>
            本教學系統從語言認知和情緒增強著手，透過使用程式語言解決問題得到的正向情緒反饋，穿插英語為主要溝通工具，強化語言習得的效率。
          </Typography>
        </Box>
        {/*<CookieConsent hasConsent={hasConsent} />*/}
      </Box>
      {/*Text Area with Background */}
      <Box
        id="mode"
        display="flex"
        justifyContent="center"
        p={{ xs: 5, md: 10 }}
        sx={{ background: "#fff" }}
      >
        <Box
          id="text_area"
          width={{
            xs: "100%",
            md: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            textAlign="center"
            color="#EB577B"
            fontWeight="600"
            fontFamily={inter.style.fontFamily}
            fontSize={{ xs: "24px", md: "32px" }}
            mb={2}
          >
            授課模式
          </Typography>
          <Typography lineHeight={2}>
            本課程 70% 以上以英文授課和討論，學生需具備 A2 (CEFR)
            英語能力，會有較好的學習效果，為維持教學及討論ˊ品質，每個班級不超過六人，全程遠端上課。每堂課程的流程如下：
          </Typography>
          <List>
            {procedure.map((d, i) => (
              <ListItem key={d}>
                {i + 1}. {d}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      {/*Text area with backgrounds ends*/}
      {/*Text and photo Area */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/*Photo on the left (only desktop) */}
        <Box
          flex="1 1 50%"
          justifyContent="center"
          display={{ xs: "none", md: "flex" }}
        >
          <Image
            src="/lecturer_photo.png"
            alt="lecturer photo"
            width={200}
            height={200}
            style={{ width: "500px", height: "500px", objectFit: "contain" }}
          />
        </Box>
        {/*Photo at the top (only middle-size device) */}
        <Box
          flex="1 1 50%"
          justifyContent="center"
          display={{ xs: "flex", md: "none" }}
        >
          <Image
            src="/lecturer_photo.png"
            alt="lecturer photo"
            width={200}
            height={200}
            style={{ width: "400px", height: "400px", objectFit: "cover" }}
          />
        </Box>
        {/*Text Area on the right */}
        <Box
          id="lecturer"
          flex="1 1 50%"
          flexDirection="column"
          alignItems="flex-start"
          px={{ xs: 5, md: 15 }}
        >
          <Typography
            sx={{
              color: "#3FBBF7",
              fontWeight: "600",
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "24px", md: "32px" },
              textAlign: "left",
              mb: 2,
            }}
          >
            講師
          </Typography>
          <Typography lineHeight={2} mb={2}>
            授課講師畢業於台灣大學外語系，臺灣師範大學英語教學所。現於英國倫敦資工學院進修碩士，有十年以上的英語教學經驗，以及四年以上的程式語言教學經驗，並有約七年的資訊安全產業經歷，希望能透過跨域結合的方式，希望能帶給學生不一樣的學習體驗，在快速變動的世界，同時具備語言和科技的思維及能力。
          </Typography>
        </Box>
        {/*<CookieConsent hasConsent={hasConsent} />*/}
      </Box>
      {/*Text and photo Area ends*/}
      {/*Text Area with Background */}
      <Box
        id="class"
        display="flex"
        justifyContent="center"
        p={{ xs: 5, md: 10 }}
        sx={{ background: "#fff" }}
      >
        <Box
          id="text_area"
          width={{
            xs: "100%",
            md: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            textAlign="center"
            color="#EB577B"
            fontWeight="600"
            fontFamily={inter.style.fontFamily}
            fontSize={{ xs: "24px", md: "32px" }}
            mb={2}
          >
            開班時間
          </Typography>
          <Typography lineHeight={2} mb={2}>
            本課程目前為試營運階段，共十堂課，每堂兩小時，每周一堂，共有週六早
            8:00 - 10:00 以及10 : 10 - 12:10
            兩個時段可供選擇，開班日期依招生狀況決定。
          </Typography>
          <Typography lineHeight={2} mb={2}>
            試營運期間，十堂課僅需新台幣一萬元，試營運階段結束後，將有更多進階課程，學生可依照試營運階段的學習體驗，決定是否繼續進階課程。
          </Typography>
        </Box>
      </Box>
      {/*Text area with backgrounds ends*/}
      {/*Text Area with Background */}
      <Box
        id="contact"
        display="flex"
        justifyContent="center"
        p={{ xs: 5, md: 10 }}
        sx={{ background: "#fff" }}
      >
        <Box
          id="text_area"
          width={{
            xs: "100%",
            md: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            textAlign="center"
            color="#EB577B"
            fontWeight="600"
            fontFamily={inter.style.fontFamily}
            fontSize={{ xs: "24px", md: "32px" }}
            mb={2}
          >
            報名方式
          </Typography>
          <Typography lineHeight={2} mb={2}>
            可填寫以下表單，會有專人與您聯繫，安排線上諮詢與上課時間。
          </Typography>
        </Box>
      </Box>
      {/*Text area with backgrounds ends*/}
      <ContactForm />
    </>
  );
}
