import PropTypes from "prop-types";
import Button from "../shared/button/Button";
import CreateTaskModal from "./CreateTaskModal";
import EditTaskModal from "./EditTaskModal";
import DeleteTaskModal from "./DeleteTaskModal";
import LogOutModal from "./LogOutModal";
import AddMatesModal from "./AddMatesModal";
import EditProfileModal from "./EditProfileModal";
import UploadProfilePictureModal from "./UploadProfilePictureModal";
import { modalTypes, modalTypesArr } from "../../store/app/constants";
import { openModal, closeModal } from "../../store/app/app.slice";
import { useDispatch, useSelector } from "react-redux";

const VarModal = (props) => {
  const { variant } = props;
  const dispatch = useDispatch();
  const open = useSelector((state) => state.app.modal.isOpen);
  const modalType = useSelector((state) => state.app.modal.modalType);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const getModalContent = () => {
    switch (modalType) {
      case modalTypes.createTask:
        return (
          <CreateTaskModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
          />
        );
      case modalTypes.editTask:
        return (
          <EditTaskModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
          />
        );
      case modalTypes.deleteTask:
        return (
          <DeleteTaskModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
          />
        );
      case modalTypes.logOut:
        return (
          <LogOutModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
          />
        );
      case modalTypes.editProfile:
        return (
          <EditProfileModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
          />
        );
      case modalTypes.addTeam:
        return (
          <AddMatesModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
          />
        );
      case modalTypes.uploadPicture:
        return (
          <UploadProfilePictureModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => dispatch(openModal(modalTypes[variant]))}
      >
        {modalTypes[variant]}
      </Button>

      {getModalContent()}
    </div>
  );
};

export default VarModal;

VarModal.propTypes = {
  variant: PropTypes.oneOf(modalTypesArr).isRequired,
};
