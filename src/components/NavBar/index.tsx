"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const pages = [
  { name: "首頁", href: "/" },
  { name: "課程特色", href: "/Course" },
  { name: "授課模式", href: "/Teaching" },
  { name: "講師", href: "/Lecturer" },
  { name: "開班資訊", href: "/Class" },
];
const pages_m = [...pages, { name: "聯絡我們", href: "/Contact" }];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [loaded, setLoaded] = React.useState(false);
  const pathName = usePathname();
  React.useEffect(() => {
    setLoaded(true);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getLinkProps = (href: string) => ({
    component: Link,
    href,
    sx: {
      my: 2,
      color: pathName === href ? "black" : "#AAA",
      display: "block",
      textTransform: "none",
      fontFamily: inter.style.fontFamily,
      fontWeight: 600,
      fontSize: "18px",
    },
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1035,
        backgroundColor: "#ffffff",
        boxShadow: "1px solid #CCCCCC",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Md-size view */}
          <Box
            sx={{
              flex: "0 1 25%",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              mr: 1,
            }}
          >
            <Image
              src="/Logo_H_DB.png"
              alt="Logo"
              width={150}
              height={50}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                height: "auto",
                width: "170px",
              }}
            />
          </Box>
          {/* For Menu Md-size view */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                {...getLinkProps(page.href)}
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {/* Contact Button Md-size view */}
          <Box
            sx={{
              flex: "0 1 25%",
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {loaded && (
              <Button
                component={Link}
                href="/Contact"
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "none",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "18px",
                }}
                className="gradient-border"
              >
                聯絡我們
              </Button>
            )}
          </Box>
          {/* Mobile-size view */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages_m.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component={Link}
                    href={page.href}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Mobile-size Logo */}
          <Box
            sx={{
              flex: "0 1 25%",
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "end",
              mr: 1,
            }}
          >
            <Image
              src="/Logo_H_DB.png"
              alt="Logo"
              width={150}
              height={50}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                height: "auto",
                width: "170px",
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
