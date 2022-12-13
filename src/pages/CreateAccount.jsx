import { Stack } from "@mui/material";
import { Media } from "../components/authentication/Media";
import { AuthForm } from "../components/authentication/AuthForm";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";

export const CreateAccount = () => {
  return (
    <Stack spacing={3} padding="30px">
      <PoseaTasksList />
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
    </Stack>
  );
};
