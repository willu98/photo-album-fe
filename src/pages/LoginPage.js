import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import RegisterModal from "../components/RegisterModal";
import { loginRequest } from "../util/HttpRequests";

const LoginPage = () => {
  const navigate = useNavigate();
  const [openRegsister, setOpenRegister] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const responseData = await loginRequest(loginData);
    if (responseData.data.response) {
      localStorage.setItem("user", responseData.data.response.name);
      localStorage.setItem("token", responseData.data.response.token);
      localStorage.setItem("expiry", responseData.data.response.expiry);

      navigate("/photos");
    } else if (responseData.data.message) {
      setLoginError(true);
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        minHeight="100vh"
        sx={{
          alignSelf: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CameraAltIcon sx={{ alignSelf: "center", mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              alignSelf: "center",
              fontFamily: "monospace",
              fontWeight: 600,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Album
          </Typography>
        </Box>
        <Card sx={{ maxWidth: 300 }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TextField
                  name="username"
                  margin="dense"
                  label="Username"
                  variant="standard"
                  onChange={handleInput}
                />
                <TextField
                  name="password"
                  margin="dense"
                  type="password"
                  label="Password"
                  variant="standard"
                  onChange={handleInput}
                />
              </Box>
              <Box
                sx={{
                  paddingTop: "20px",
                  display: "flex",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => setOpenRegister(true)}
                >
                  Register
                </Button>
                <Button
                  sx={{ marginLeft: "5%" }}
                  variant="contained"
                  type="submit"
                  disabled={!loginData.username || !loginData.password}
                >
                  Login
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>

      <RegisterModal
        open={openRegsister}
        onClose={() => setOpenRegister(false)}
      />

      <Dialog open={loginError} onClose={() => setLoginError(false)}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>Wrong username or password</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default LoginPage;
