import { Stack } from "@mui/system";
import { Media } from "../components/authentication/Media";
import { AuthForm } from "../components/authentication/AuthForm";

export const CreateAccount = () => {
  return (
    <Stack
      spacing={3}
      direction="row"
      sx={{
        width: "1440px",
        height: "1024px",
        padding: "20px",
        border: "1px solid",
      }}
    >
      <Media align="left" hasCreate={false} />
      <AuthForm align="left" hasLogin={true} />
    </Stack>
  );
};
