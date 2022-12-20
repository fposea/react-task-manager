import Button from "../shared/button/Button";
import { BootstrapDialog } from "./Modal.styles";
import CustomDialogTitle from "./CustomDialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

const LogOutModal = (props) => {
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
        <CustomDialogTitle onClose={handleClose}>
          You are about to LogOut
        </CustomDialogTitle>
        <DialogContent>
          <DialogContentText>
            You can always log on to your task manager and continue from where
            you left off..
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            autoFocus
            onClick={handleClose}
            sx={{ width: "208px" }}
          >
            No, This was a Mistake
          </Button>
          <Button variant="logout" onClick="#">
            Yes, Log Me Out
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogOutModal;
