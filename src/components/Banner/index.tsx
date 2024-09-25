"use client";
import { Box, Button, Link, Typography } from "@mui/material";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const inter = Inter({ subsets: ["latin"] });

export default function Banner() {
  const objectRef_1 = useRef(null);
  const objectRef_2 = useRef(null);

  useEffect(() => {
    gsap.to(objectRef_1.current, {
      x: -200,
      y: 300,
      borderRadius: "100%",
      duration: 2,
      backgroundColor: "#EB577B",
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(objectRef_2.current, {
      x: 200,
      y: 300,
      borderRadius: "100%",
      duration: 2,
      backgroundColor: "#3FBBF7",
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1,
    });
  }, []);

  return (
    <>
      {/*Whole banner division*/}
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/*Placing image and texts */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Image
            src="/home_banner.png"
            alt="gradient_backdrop"
            width={1200}
            height={800}
            style={{ width: "100%", height: "800px", objectFit: "cover" }}
          />
          {/*Framing the text division */}
          <Box
            sx={{
              position: "absolute",
              top: 300,
              left: { xs: 10, md: 50 },
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              zIndex: 2,
            }}
          >
            {/*Framing the headings horizontally*/}
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Typography
                sx={{
                  color: "#3FBBF7",
                  fontWeight: "700",
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "30px", md: "40px" },
                  textAlign: "center",
                  mb: 2,
                  px: 2,
                }}
              >
                科技
              </Typography>
              <Typography
                sx={{
                  color: "#EB577B",
                  fontWeight: "700",
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "30px", md: "40px" },
                  textAlign: "center",
                  mb: 2,
                  px: 2,
                }}
              >
                英語
              </Typography>
              <Typography
                sx={{
                  color: "#636363 ",
                  fontWeight: "700",
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "30px", md: "40px" },
                  textAlign: "center",
                  mb: 2,
                  px: 2,
                }}
              >
                創新整合教學系統
              </Typography>
            </Box>
            {/*Headings end*/}
            <Typography
              sx={{
                width: { xs: "100%", md: "40%" },
                color: "#000000",
                fontWeight: 500,
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "20px", md: "24px" },
                textAlign: "left",
                px: 2,
              }}
            >
              沉浸式的英語溝通環境，學習使用程式語言與 AI
              解決問題，同時活用英文單字及片語，打造英語科技腦。
            </Typography>
            <Button
              href="#mode"
              sx={{
                my: 2,
                color: "black",
                display: "block",
                backgroundColor: "white",
                fontFamily: inter.style.fontFamily,
                fontWeight: 600,
                fontSize: "18px",
                borderRadius: "30px",
                marginY: 5,
                paddingX: 5,
                paddingY: 1,
                border: "1px solid #C6C6C6",
                boxShadow: "0px 4px 10px #C6C6C6",
              }}
            >
              授課模式
            </Button>
          </Box>
          {/*Text division ends*/}
          {/*Animated objects division*/}
          <Box
            ref={objectRef_1}
            sx={{
              width: "100px",
              height: "100px",
              display: { xs: "none" },
              backgroundColor: "#3FBBF7",
              position: "absolute",
              top: 200,
              right: 200,
            }}
          ></Box>
          <Box
            ref={objectRef_2}
            sx={{
              width: "100px",
              height: "100px",
              display: { xs: "none" },
              backgroundColor: "#EB577B",
              position: "absolute",
              top: 200,
              right: 400,
            }}
          ></Box>
          {/*Animated objects division ends*/}
        </Box>
        {/*Image and text division ends*/}
      </Box>
    </>
  );
}
