import React from "react";
import { Container } from "@mui/material";
import { AddMatesDialog } from "../components/add-mates-dialog/addMatesDialog";
import TabContent from "../components/tab-content/TabContent";
import BadgeAvatar from "../components/avatar/BadgeAvatar";

const AddMates = () => {
  return (
    <div>
      <Container>
        <br />
        <AddMatesDialog />
        <br />
        <br />
        <TabContent type={false} />
        <br />
        <br />
        <TabContent type={true} />
        <br />
        <br />
        <br />
        <BadgeAvatar src="/avatars/AE.png" size="s" />
        <br />
        <BadgeAvatar src="/avatars/camera.png" size="m" />
        <br />
        <BadgeAvatar src="/avatars/camera.png" size="l" variant="dot" />
        <br />
      </Container>
    </div>
  );
};

export default AddMates;
