import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerRequest } from "../util/HttpRequests";
const RegisterModal = (props) => {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await registerRequest(formValues);
    setResponseData(response.data);
    if (responseData.response) {
      navigate("/photos");
    } else if (responseData.message) {
      setRegisterError(true);
    }
  };

  return (
    <>
      <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>Register</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Enter your email, name and password.
            </DialogContentText>
            <TextField
              autoFocus
              id="name-input"
              margin="dense"
              name="name"
              label="Name"
              value={formValues.name}
              onChange={handleInput}
              fullWidth
              variant="standard"
            />

            <TextField
              autoFocus
              id="username-input"
              margin="dense"
              name="username"
              label="Username"
              value={formValues.username}
              onChange={handleInput}
              fullWidth
              variant="standard"
            />

            <TextField
              autoFocus
              id="password-input"
              type="password"
              margin="dense"
              name="password"
              label="Password"
              value={formValues.password}
              onChange={handleInput}
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              type="submit"
              disabled={
                !formValues.name || !formValues.username || !formValues.password
              }
            >
              Register
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog
        open={registerError && props.open}
        onClose={() => setRegisterError(false)}
      >
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {responseData.message}, please choose another username
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegisterModal;
