import * as React from "react";
import Banner from "@/components/Banner";
import { Box, Typography } from "@mui/material";
import AnimatedPointSphere from "@/components/DotSpere3D";
import CookieConsent from "@/components/CookieConsent";
import { cookies } from "next/headers";
import TextFade from "@/components/TextFade";
import { e_skills, t_skills, s_skills } from "@/data/Skill";

export default function Home() {
  const cookieStore = cookies();
  const consent = cookieStore.get("consent");
  const hasConsent = !!consent;

  return (
    <>
      <Banner />

      {/*Three Columnns of Skills */}
      <Box
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
      {/*Text Area Dark Background */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={{ xs: 5, md: 10 }}
        sx={{ background: "#040A2E" }}
      >
        <Box id="text_area" width={{ xs: "100%", md: "50%" }}>
          <Typography className="tiny_heading_dark" textAlign="center">
            ENTRUSTED TO SAVE YOUR COST FROM DESIGN
          </Typography>
          <Typography className="body_heading_dark" textAlign="center">
            Hardware-based Countermeasures Against Side-Channel Attacks
          </Typography>
          <Typography className="body_p_dark">
            Enhance your security with hardware-based countermeasures designed
            to protect against side-channel attacks. These solutions safeguard
            sensitive data by incorporating physical security features, such as
            secure enclaves, noise generation, and power analysis resistance.
            Implementing hardware-based defenses ensures robust protection
            against leakage of cryptographic keys and other critical
            information, fortifying your systems against advanced cyber threats.
          </Typography>
        </Box>
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
        >
          <AnimatedPointSphere width={400} height={300} />
        </Box>
        {/*Text Area on the right */}
        <Box
          flex="1 1 50%"
          flexDirection="column"
          p={{ xs: 5, md: 10 }}
          alignItems="flex-start"
        >
          <Typography className="tiny_heading">COMPLIANCE</Typography>
          <Typography className="body_heading">
            Quantum-Safe NIST Compliant Standards
          </Typography>
          <Typography className="body_p">
            Our cutting-edge cryptographic solutions meet NIST&apos;s
            Post-Quantum Cryptography (PQC) standards, ensuring robust security
            against future quantum threats. By integrating NIST-compliant PQC
            algorithms, our products offer unmatched protection for your
            sensitive data, guaranteeing compliance with federal and industry
            regulations. Trust in our advanced, quantum-resistant technology to
            secure your digital information today and in the quantum-powered
            future.
          </Typography>
        </Box>
        {/*<CookieConsent hasConsent={hasConsent} />*/}
      </Box>
    </>
  );
}
