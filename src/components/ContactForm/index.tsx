"use client";

import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    line: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState({
    name: "",
    line: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {
      name: "",
      line: "",
      email: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("/api/contact", formData);
        console.log("Form data submitted:", response.data);
        setSubmitted(true);
      } catch (error) {
        console.error("There was an error submitting the form:", error);
      }
      setSubmitted(true);
      // Add your form submission logic here (e.g., sending data to an API)
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          p: 4,
          borderRadius: "8px",
        }}
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
          聯絡我們
        </Typography>
        <Typography className="body_text">
          留下資訊，我們會盡快與您聯繫
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ width: "100%" }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                margin="normal"
                label="姓名"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                variant="standard"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Line 帳號 (選填)"
                name="line"
                value={formData.line}
                onChange={handleChange}
                error={!!errors.line}
                helperText={errors.line}
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="normal"
                label="電子信箱"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="normal"
                label="訊息或疑問"
                name="message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                variant="standard"
              />
            </Grid>
          </Grid>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "30%",
                my: 3,
                color: "black",
                display: "block",
                textTransform: "none",
                fontFamily: inter.style.fontFamily,
                fontWeight: 500,
                fontSize: "16px",
              }}
              className="gradient-border-submit"
            >
              送出
            </Button>
            {submitted && (
              <Typography
                className="body_text"
                color="success.main"
                sx={{ mt: 2 }}
                textAlign="center"
              >
                謝謝您的訊息！
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
