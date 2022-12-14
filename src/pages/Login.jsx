import { Stack } from "@mui/system";
import { Media } from "../components/authentication/Media";
import { LoginForm } from "../components/authentication/LoginForm";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";

 const Login = () => {
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
        <LoginForm align="left" hasLogin={false} />
        <Media align="right" hasCreate={true} />
      </Stack>
    </Stack>
  );
};

export default Login