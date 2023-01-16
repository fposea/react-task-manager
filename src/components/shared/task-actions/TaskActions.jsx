import React from "react";
import { IconButton } from "@mui/material";
import TrashBin from "../../../assets/icons/TrashBin";
import EditPen from "../../../assets/icons/EditPen";
import MessageBox from "../../../assets/icons/MessegeBox";
import VarModal from "../../modals/VarModal";

const renderTrashIcon = (icon) => {
  if (icon) {
    return <VarModal variant="deleteTask" />;
  }
};

const renderEditIcon = (icon) => {
  if (icon) {
    return <VarModal variant="editTask" />;
  }
};

const renderMessageIcon = (icon) => {
  if (icon) {
    return (
      <IconButton>
        <MessageBox />
      </IconButton>
    );
  }
};

const TaskActions = ({ trash, edit, message }) => {
  return (
    <>
      {renderTrashIcon(trash)}
      {renderEditIcon(edit)}
      {renderMessageIcon(message)}
    </>
  );
};

export default TaskActions;
