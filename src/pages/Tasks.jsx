import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";
import { MuresanTasksList } from "../components/tasks-list/MuresanTasksList";

function Tasks() {
  return (
    <Stack>
      <Stack spacing={2} padding="30px">
        <Typography variant="h2" color="primary">
          Tasks
        </Typography>
        <Stack spacing={1} paddingTop="16px">
          <Typography variant="h6">Student: Florin Posea</Typography>
          <PoseaTasksList />
        </Stack>
        <Stack spacing={1} paddingTop="16px">
          <Typography variant="h6">Student: Alexandra Muresan</Typography>
          <MuresanTasksList />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Tasks;
