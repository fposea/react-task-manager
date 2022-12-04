// import React from "react";
// import { styled, Theme, CSSObject } from "@mui/material/styles";
// import MuiDrawer from "@mui/material/Drawer";
// import {
//   Typography,
//   Box,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import avatarPlaceholder from "./images/avatar.png";
// import addAvatar from "./images/add-avatar.png";
// import overviewIconPlaceholder from "./images/overview-icon-placeholder.png";
// import tasksIconPlaceholder from "./images/tasks-icon-placeholder.png";
// import settingsIconPlaceholder from "./images/settings-icon-placeholder.png";
// import activeBackground from "./images/selected-list-item.png";

// const drawerWidth = 280;

// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: 500,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `80px`,
// });

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
//   "& .sidebar-list-item": {
//     width: "100%",
//     padding: "10px 20px",
//     display: "flex",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     gap: "10px",
//   },
//   "& .sidebar-list-item.active": {
//     background: `#fff url(${activeBackground}) no-repeat center left`,
//   },
//   "& .sidebar-list-item-icon": {
//     minWidth: "24px",
//   },
//   "& .sidebar-list-item-text": {
//     color: "#666666",
//     cursor: "pointer",
//   },
//   "& .active .sidebar-list-item-text": {
//     fontWeight: 700,
//     color: "#3754db",
//   },
//   "& .sidebar-project-avatar": {
//     margin: "0px 0px 15px 0px",
//     cursor: "pointer",
//   },
//   "& .sidebar-selected-project-avatar": {
//     border: "1px solid #fbbe37",
//     borderRadius: "10px",
//     padding: "6px 6px 0px 6px",
//   },
//   "& .sidebar-add-project": {
//     width: "36px",
//     height: "36px",
//     cursor: "pointer",
//   },
// }));

// const SideBar = () => {
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setOpen((open) => !open);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <Drawer
//         variant="permanent"
//         open={open}
//         PaperProps={{ style: { border: "none" } }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "flex-start",
//             alignItems: "flex-start",
//             height: "100vh",
//             flexWrap: "wrap",
//             overflow: "hidden",
//           }}
//         >
//           <Box
//             sx={{
//               minHeight: "100vh",
//               backgroundColor: "#3754db",
//               width: "79px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "flex-start",
//               alignItems: "center",
//               padding: "15px 0 0 0",
//             }}
//           >
//             <IconButton
//               onClick={handleDrawerToggle}
//               sx={{
//                 marginRight: 0,
//                 color: "#ffffff",
//                 backgroundColor: "#3754db",
//                 marginBottom: "40px",
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Box className="sidebar-project-avatar sidebar-selected-project-avatar">
//               <img
//                 src={avatarPlaceholder}
//                 alt="avatarPlaceholder"
//                 sx={{
//                   width: "38px",
//                   height: "38px,",
//                 }}
//               />
//             </Box>
//             <Box className="sidebar-project-avatar">
//               <img
//                 src={avatarPlaceholder}
//                 alt="avatarPlaceholder"
//                 sx={{
//                   width: "36px",
//                   height: "36px",
//                 }}
//               />
//             </Box>
//             <Box className="sidebar-project-avatar">
//               <img
//                 src={avatarPlaceholder}
//                 alt="avatarPlaceholder"
//                 sx={{
//                   width: "36px",
//                   height: "36px",
//                 }}
//               />
//             </Box>
//             <Box>
//               <img
//                 src={addAvatar}
//                 alt="add more"
//                 className="sidebar-add-project"
//               />
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               height: "100%",
//               backgroundColor: "#fff",
//               width: "2px",
//               paddingTop: "90px",
//             }}
//           >
//             <Box
//               sx={{
//                 padding: "0px 0px 35px 20px",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontWeight: 700,
//                   color: "#101c56",
//                 }}
//               >
//                 My Space
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: "#666666",
//                 }}
//               >
//                 Workplace Title
//               </Typography>
//             </Box>
//             <List
//               sx={{
//                 listStyleType: "none",
//                 margin: 0,
//                 padding: 0,
//               }}
//             >
//               <ListItem className="sidebar-list-item">
//                 <ListItemIcon className="sidebar-list-item-icon">
//                   <img
//                     src={overviewIconPlaceholder}
//                     alt="overview icon placeholder"
//                   />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Overview"
//                   className="sidebar-list-item-text"
//                 />
//               </ListItem>
//               <ListItem className="sidebar-list-item active">
//                 <ListItemIcon className="sidebar-list-item-icon">
//                   <img
//                     src={tasksIconPlaceholder}
//                     alt="tasks icon placeholder"
//                   />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Tasks"
//                   className="sidebar-list-item-text"
//                   sx={{
//                     fontWeight: 700,
//                   }}
//                 />
//               </ListItem>
//               <ListItem className="sidebar-list-item">
//                 <ListItemIcon className="sidebar-list-item-icon">
//                   <img
//                     src={settingsIconPlaceholder}
//                     alt="settings icon placeholder"
//                   />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Settings"
//                   className="sidebar-list-item-text"
//                 />
//               </ListItem>
//             </List>
//           </Box>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };

// export default SideBar;
