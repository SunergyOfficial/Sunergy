import { Box, Typography } from "@mui/material";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Banner() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
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
          src="/Backdrop.jpg"
          alt="post-quantum IC design"
          width={1200}
          height={800}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box className="gradient_mask" />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2, // Ensures text is above the image
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "700",
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "30px", md: "40px" },
              textAlign: "center",
              mb: 2,
              px: 2,
            }}
          >
            Future-Proof PQC Crypto Solutions
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "400",
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "20px", md: "24px" },
              textAlign: "center",
              px: 2,
            }}
          >
            Pioneering Post-Quantum Cryptography IP for a Secure Future
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
