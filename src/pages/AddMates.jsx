import { Stack } from "@mui/material";
import { AddMatesDialog } from "../components/add-mates-dialog/addMatesDialog";
import TabContent from "../components/tab-content/TabContent";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";

const AddMates = () => {
  return (
    <Stack spacing={3} padding="30px">
      <PoseaTasksList />
      <AddMatesDialog />
      <TabContent type={false} />
      <TabContent type={true} />
    </Stack>
  );
};

export default AddMates;
