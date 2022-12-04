import React from "react";
import { Container, Badge } from "@mui/material";
import { AddMatesDialog } from "../components/add-mates-dialog/addMatesDialog";
import TabContent from "../components/tab-content/TabContent";
import BadgeAvatar from "../components/avatar/BadgeAvatar";
import { StyledBadge } from "../components/shared/badge/Badge";

const AddMates = () => {
  return (
    <div>
      <Container>
        <br />
        <AddMatesDialog />
        <br />
        <TabContent type={false} />
        <br />
        <TabContent type={true} />
        <br />
        <BadgeAvatar src="/avatars/AE.png" size="s" />
        <br />
        <BadgeAvatar src="/avatars/camera.png" size="m" />
        <br />
        <BadgeAvatar src="/avatars/camera.png" size="l" variant="dot" />
        <hr />
        <div>
          <Badge variant="standard" badgeContent={3} color="primary" />
          <br />
          <Badge
            variant="status"
            badgeContent={"In Progress"}
            color="inProgress"
          />
          <br />
          <Badge variant="status" badgeContent={"In Review"} color="inReview" />
          <br />
          <Badge variant="status" badgeContent={"Pending"} color="pending" />
          <br />
          <Badge
            variant="status"
            badgeContent={"Completed"}
            color="completed"
          />
        </div>
        <div>
          <Badge variant="standard" badgeContent={3} color="primary" />
          <br />
          <Badge variant="standard" badgeContent={5} color="primary" />
        </div>

        <div>
          <StyledBadge
            variant="standard"
            badgeContent={"Pending"}
            className="status-pending"
          />
        </div>
      </Container>
    </div>
  );
};

export default AddMates;
