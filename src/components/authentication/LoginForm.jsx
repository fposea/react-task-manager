import { Stack, Typography, TextField, Link } from "@mui/material";
import PropTypes from "prop-types";
import { HalfPage } from "../shared/layout/HalfPage";
import Button from "../shared/button/Button";
import PersonalInput from "../shared/text-input/PersonalInput";
import CheckBox from "@mui/material/Checkbox";
import { useState } from "react";

export const LoginForm = (props) => {
  const { align, hasLogin } = props;
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <HalfPage sx={{ backgroundColor: "#fff", justifyContent: "flex-start" }}>
      <Stack
        direction="row"
        justifyContent="end"
        visibility={hasLogin ? "visible" : "hidden"}
      >
        <Button variant="login">Log In</Button>
      </Stack>

      <Stack sx={{ width: "384px", paddingTop: "140px" }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontStyle: "normal",
            fontSize: "32px",
            lineHeight: "38px",
            letterSpacing: "-0.02em",
            textAlign: align,
          }}
        >
          Welcome Back.
        </Typography>

        <TextField
          sx={{ paddingTop: "24px" }}
          placeholder="Email Address"
          helperText="Example: mano@gmail.com"
        />
        <TextField
          sx={{ paddingTop: "24px" }}
          placeholder="Enter A Password"
          type="password"
          helperText="Up to 8 characters with an Uppercase, symbol and number"
        />

        <Stack
          direction="row"
          spacing={1.2}
          sx={{ paddingTop: "25px", alignItems: "center" }}
        >
          <CheckBox
            checked={checked}
            onChange={handleChange}
            color="primary"
            size="medium"
            disableRipple
          ></CheckBox>
          <Typography
            sx={{
              fontWeight: "600",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "-0.02em",
            }}
          >
            Keep me Signed in
          </Typography>
        </Stack>

        <Button variant="contained" sx={{ width: "204px" }}>
          Log In
        </Button>

        <Stack>
          <Link
            href="#"
            underline="none"
            sx={{
              fontWeight: "600",
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "22px",
              letterSpacing: "-0.02em",
              paddingTop: "52px",
              textAlign: align,
            }}
          >
            Forgot Password?
          </Link>
        </Stack>
      </Stack>
    </HalfPage>
  );
};

LoginForm.propTypes = {
  align: PropTypes.oneOf(["left", "right"]).isRequired,
  hasLogin: PropTypes.bool.isRequired,
};
