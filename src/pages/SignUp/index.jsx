import { Box, Button, Divider, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink,useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import PasswordInput from "../../components/PasswordInput";
import { signUp } from "../../services/users";
import { ThreeDots } from "react-loader-spinner";
import useAlert from "../../hooks/useAlert";

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
};

function SignUp(){
  const { setMessage } = useAlert();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: ""
  })

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true);

    Object.keys(formData).forEach((item) => {
      if (!formData[item]) {
        setMessage({ type: "error", text: "All fields are required!" });
        return
      }
    })
    
    const {email, username, password, passwordConfirmation} = formData;
    
    if (password !== passwordConfirmation){
      setMessage({type: "error", text: "Passwords must match! Refresh and try again"});
      return 
    }
   
    try {
      await signUp({ email, username, password });
      setMessage({ type: "success", text: "You're signed up!" });
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMessage({
          type: "error",
          text: error.response.data,
        });
        setIsLoading(false);
        return;
      }
      setMessage({
        type: "error",
        text: "Error, try again in a few seconds!",
      });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      Logo
      <Box sx={styles.container}>
        <Typography sx={styles.title} variant="h4" component="h1">
          Sign up
        </Typography>
        <Button variant="contained" >
          Entrar com Spotify
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
        <PasswordInput
          name="passwordConfirmation"
          sx={styles.input}
          label="Confirm your password"
          onChange={handleInputChange}
          value={formData.passwordConfirmation}
        />
        <Box sx={styles.actionsContainer}>
          <Link component={RouterLink} to="/login">
            <Typography>Alreary have an account</Typography>
          </Link>
          <Button variant="contained" type="submit" disabled={isLoading}>
            {isLoading ? (<ThreeDots type="ThreeDots"
              color="#FFFFFF"
              height={50}
              width={50}/>):
            "Sign Up"}
          </Button>
        </Box>
      </Box>
    </Form>
  )
}

export default SignUp