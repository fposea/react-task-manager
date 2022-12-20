import { useState } from "react";
import Button from "../shared/button/Button";
import CustomDialogTitle from "./CustomDialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import {
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Stack,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const CreateTaskModal = (props) => {
  const { handleClose, open, variant } = props;
  const [date, setDate] = useState();

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <CustomDialogTitle onClose={handleClose}>Create Task</CustomDialogTitle>
        <DialogContent>
          <InputLabel htmlFor="taskName">Task Name</InputLabel>
          <OutlinedInput
            autoComplete="off"
            fullWidth
            id="taskName"
            name="taskName"
            type="text"
            // {...formik.getFieldProps("taskName")}
          />
          {/* <FormHelperText>
        {formik.touched.taskName && formik.errors.taskName ? (
          <div>This field is {formik.errors.taskName.toLocaleLowerCase()}</div>
        ) : (
          "Please enter a Task Name!"
        )}
      </FormHelperText> */}
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <Stack sx={{ width: "50%" }}>
              <InputLabel htmlFor="taskPriority">Task Priority</InputLabel>
              <Select
                defaultValue={10}
                id="taskPriority"
                name="taskPriority"
                type="text"
                // {...formik.getFieldProps("taskPriority")}
              >
                <MenuItem value={10}>Less Important</MenuItem>
                <MenuItem value={20}>Normal</MenuItem>
                <MenuItem value={30}>High</MenuItem>
              </Select>
            </Stack>
            <Stack>
              <InputLabel htmlFor="dueDate">Due Date</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disablePast
                  inputFormat="MM/DD/YYYY"
                  openTo="day"
                  views={["month", "day"]}
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => {
                    return (
                      <TextField
                        {...params}
                        id="dueDate"
                        name="dueDate"
                        // type="text"
                        // {...formik.getFieldProps("dueDate")}
                      />
                    );
                  }}
                  components={{
                    OpenPickerIcon: CalendarMonthOutlinedIcon,
                  }}
                />
              </LocalizationProvider>
            </Stack>
          </Stack>

          <InputLabel htmlFor="taskDescription">Task Description</InputLabel>
          <OutlinedInput
            fullWidth
            multiline
            rows={4}
            id="taskDescription"
            name="taskDescription"
            placeholder="Type your content here...."
            type="text"
            // {...formik.getFieldProps("taskDescription")}
          />
          {/* <FormHelperText>
        {formik.touched.taskDescription && formik.errors.taskDescription ? (
          <div>This field is {formik.errors.taskDescription.toLocaleLowerCase()}</div>
        ) : (
          "Please enter your task description!"
        )}
      </FormHelperText> */}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            autoFocus
            onClick={handleClose}
            sx={{ width: "50%" }}
          >
            {variant}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateTaskModal;
