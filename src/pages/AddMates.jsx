import React from "react";
import { Container } from "@mui/material";
import { AddMatesDialog } from "../components/add-mates-dialog/addMatesDialog";
import TabContent from "../components/tab-content/TabContent";

const AddMates = () => {
  return (
    <div>
      <Container>
        <br />
        <AddMatesDialog />
        <br />
        <br />
        <br />
        <br />
        <TabContent type={false} />
        <br />
        <br />
        <TabContent type={true} />
      </Container>
    </div>
  );
};

export default AddMates;
