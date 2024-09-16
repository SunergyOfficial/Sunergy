"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface TextFadeProps {
  DOM_array: string[];
  Icon_path: string | "";
  title: string;
  content: string[][];
}

export default function TextFade({
  DOM_array,
  Icon_path,
  title,
  content,
}: TextFadeProps) {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    DOM_array.map((d) => {
      tl.to(`${d} > *`, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      });
      tl.to(`${d} > *`, {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 4,
      });
    });
  }, []);

  return (
    <>
      {/* The Column of Skills */}
      <Box
        flex="1 1 300px"
        flexDirection="column"
        justifyContent="center"
        p={{ xs: 5, md: 10 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={Icon_path}
            alt={Icon_path}
            width={0}
            height={0}
            style={{ width: "20px", height: "20px", objectFit: "contain" }}
          />
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif", // Ensure font family is referenced correctly
              fontWeight: 600,
              fontSize: "18px",
              px: 1,
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "300px",
            marginTop: 5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {DOM_array.map((d, i) => (
            <Box
              key={i} // Use a unique key for each mapped component
              id={d.slice(1)} // Removing the '#' or similar character
              sx={{
                position: "absolute",
                top: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {content[i].map((c, index) => (
                <Typography
                  key={index} // Ensure each Typography has a unique key
                  sx={{
                    opacity: 0,
                    fontSize: "16px",
                    fontFamily: "Inter, sans-serif", // Fix font family reference here too
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  {c}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
