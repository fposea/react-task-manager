import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";

export const StyledBadge = styled(Badge)(({ theme }) => ({
  borderRadius: 12,
  ".MuiBadge-standard": {
    padding: "5px 12px",
    whiteSpace: "nowrap",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "14px",
    height: "23px",
  },
  "&.status-pending > span": {
    color: "#DF9A00",
    background: "#FFFDF5",
  },
  "&.status-inProgress > span": {
    color: "#3754DB",
    background: "#F2F4FD",
  },
  "&.status-inReview > span": {
    color: "#8937DB",
    background: "#F7F2FD",
  },
  "&.status-completed > span": {
    color: "#00C271",
    background: "#F0FFF9",
  },
  "&.status-unassigned > span": {
    color: "#B80020",
    background: "#FFF0F0",
  },

  "&.status-unassigned2 > span": {
    color: "#808080",
    background: "#F2F2F2",
  },
}));
