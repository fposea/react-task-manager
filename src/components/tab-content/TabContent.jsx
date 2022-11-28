import React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";
import { AntTab } from "./AntTab.styles";
import { AntTabs } from "./AntTabs.styles";

const STATIC_TAB_LIST = [
  "Tab 1",
  "Tab 2",
  "Tab 3",
  "Tab 4",
  "Tab 5",
  "Tab 6",
  "Tab 7",
  "Tab 8",
];

const DINAMIC_TAB_LIST = [
  { id: "Tab 1", nr: 20, status: "All" },
  { id: "Tab 2", nr: 7, status: "ToDo" },
  { id: "Tab 3", nr: 3, status: "In Progress" },
  { id: "Tab 4", nr: 2, status: "Pending" },
  { id: "Tab 5", nr: 8, status: "Completed" },
];

export default function CustomTabs({ type }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return type ? (
    <Box>
      <AntTabs value={value} onChange={handleChange}>
        {DINAMIC_TAB_LIST.map((item) => {
          return (
            <AntTab
              key={item.id}
              label={item.id}
              icon={<Badge badgeContent={item.nr} color="primary" />}
              iconPosition="end"
            />
          );
        })}
      </AntTabs>
    </Box>
  ) : (
    <Box>
      <AntTabs variant="fullWidth" value={value} onChange={handleChange}>
        {STATIC_TAB_LIST.map((item) => {
          return <AntTab key={item} label={item} />;
        })}
      </AntTabs>
    </Box>
  );
}

CustomTabs.propTypes = {
  type: PropTypes.bool.isRequired,
};
