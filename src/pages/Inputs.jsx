import { Stack, Typography } from "@mui/material";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";
import { CustomInput } from "../components/shared/inputs/CustomInput";
import SignupForm from "../components/authentication/SignupForm";
import SigninForm from "../components/authentication/SigninForm";
import ForgotPasswordForm from "../components/authentication/ForgotPasswordForm";
import RecoverPasswordForm from "../components/authentication/RecoverPasswordForm";
export const Inputs = () => {
  return (
    <Stack spacing={3} padding="30px">
      <PoseaTasksList />
      <Stack direction="row" spacing={5}>
        <Stack sx={{ width: "384px" }}>
          <Typography>
            <h2>SignUp Form</h2>
          </Typography>
          <SignupForm />
        </Stack>
        <Stack sx={{ width: "384px" }}>
          <Typography>
            <h2>SignIn Form</h2>
          </Typography>
          <SigninForm />
        </Stack>
        <Stack sx={{ width: "384px" }}>
          <Typography>
            <h2>RecoverPassword Form</h2>
          </Typography>
          <RecoverPasswordForm />
        </Stack>
        <Stack sx={{ width: "384px" }}>
          <Typography>
            <h2>ForgotPassword Form</h2>
          </Typography>
          <ForgotPasswordForm />
        </Stack>
      </Stack>
    </Stack>
  );
};
