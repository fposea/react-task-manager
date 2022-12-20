import { Stack } from "@mui/material";
import VarModal from "../components/modals/VarModal";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";

export const Modals = () => {
  return (
    <Stack spacing={2} padding="30px">
      <PoseaTasksList />
      <Stack direction="row" spacing={2} sx={{ margin: 5 }}>
        <VarModal variant="createTask" />
        <VarModal variant="editTask" />
        <VarModal variant="deleteTask" />
        <VarModal variant="logOut" />
        <VarModal variant="editProfile" />
        <VarModal variant="uploadPicture" />
        <VarModal variant="addTeam" />
      </Stack>
    </Stack>
  );
};
