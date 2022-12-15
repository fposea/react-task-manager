import { Stack } from "@mui/material";
import RecoverPasswordWrapper from "../components/shared/recover-password-wrapper/RecoverPasswordWrapper";
import ForgotPassword from "../components/shared/forgot-password/ForgotPassword";

export const ForgotPasswordPage = () => {
  return (
    <Stack spacing={3} padding="30px">
      <Stack
        sx={{
          border: "1px solid",
        }}
      >
        <RecoverPasswordWrapper>
          <ForgotPassword />
        </RecoverPasswordWrapper>
      </Stack>
    </Stack>
  );
};
