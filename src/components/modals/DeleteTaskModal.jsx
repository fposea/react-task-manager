import Button from "../shared/button/Button";
import { BootstrapDialog } from "./Modal.styles";
import CustomDialogTitle from "./CustomDialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

const DeleteTaskModal = (props) => {
  const { handleClose, open, variant } = props;

  return (
    <div>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            height: "273px",
          },
        }}
      >
        <CustomDialogTitle onClose={handleClose}>Delete Task</CustomDialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you delete the task ‘Create a Design System for Enum’ ?
            This task is in-progress?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            autoFocus
            onClick={handleClose}
            sx={{ width: "120px" }}
          >
            No
          </Button>
          <Button variant="delete" onClick="#" sx={{ width: "120px" }}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteTaskModal;
