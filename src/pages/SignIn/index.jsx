import {
  Box,
  Button,
  Divider,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import PasswordInput from "../../components/PasswordInput";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../hooks/useAuth";
import { signIn } from "../../services/users";

const styles = {
  container: {
    marginTop: "180px",
    width: "460px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  title: { marginBottom: "30px" },
  dividerContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "16px",
    marginBottom: "26px",
  },
  input: { marginBottom: "16px" },
  actionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "100px",
    borderRadius: "5px",
    color: "#121212",
    backgroundColor: "#ffffff",
    borderColor: "Helvetica",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#9e9e9e",
      color: "#121212",
    },
  },
};

function SignIn() {
  const { auth, login } = useAuth();
  const { setMessage } = useAlert();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: ""
  });

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    if (!formData?.email || !formData?.password || !formData ?.username) {
      setMessage({ type: "error", text: "All fields are required!" });
      return;
    }

    const { email, password, username } = formData;

    try {
      const {data: { token }}  = await signIn({ email, password, username });
      login(token);

      navigate("/home");
    } catch (error) {
      if (error.response) {
        setMessage({
          type: "error",
          text: error.response.data,
        });
        return;
      }

      setMessage({
        type: "error",
        text: "Error, try again in a few seconds!",
      });
    }
  }

  useEffect(() => {
    if (auth) navigate("/home");
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      2SHARE
      <Box sx={styles.container}>
        <Typography sx={styles.title} variant="h4" component="h1">
          Login
        </Typography>
        <Button variant="contained" sx={{
          color: "#121212",backgroundColor: "#ffffff",
          borderColor: "Helvetica",
          "&:hover": {
            backgroundColor: "#9e9e9e",
            color: "#121212",
          },}}>
          Sing in with Spotify
        </Button>
        <Box sx={styles.dividerContainer}>
          <Divider sx={{ flex: "1" }} />
          <Typography variant="caption" component="span">
            ou
          </Typography>
          <Divider sx={{ flex: "1" }} />
        </Box>
        <TextField
          name="email"
          sx={styles.input}
          label="Email"
          type="email"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.email}
        />
        <TextField
          name="username"
          sx={styles.input}
          label="Username"
          type="username"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.username}
        />
        <PasswordInput
          name="password"
          sx={styles.input}
          label="Password"
          onChange={handleInputChange}
          value={formData.password}
        />
        <Box sx={styles.actionsContainer}>
          <Link component={RouterLink} to="/">
            <Typography>New here?</Typography>
          </Link>
          <Button variant="contained" type="submit" sx={styles.button}>
            Sign in
          </Button>
        </Box>
      </Box>
    </Form>
  );
}

export default SignIn;