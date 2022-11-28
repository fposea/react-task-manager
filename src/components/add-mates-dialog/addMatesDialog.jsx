import * as React from "react";
import PropTypes from "prop-types";
import Button from "../shared/button/Button";
import DialogTitle from "./DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "./DialogActions";
import IconButton from "./IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { AddMatesTabs } from "./AddMatesTabs";
import { BootstrapDialog } from "./addMatesDialog.styles";

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle {...other}>
      {children}
      {onClose ? (
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const AddMatesDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Add Mates Form
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add Team Mates to <br /> Workspace.
        </BootstrapDialogTitle>
        <DialogContent>
          <AddMatesTabs />
          <br />
          <br />
          <br />
          <Typography gutterBottom>
            Preview of Users to Add shows up here component.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Add Team
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
