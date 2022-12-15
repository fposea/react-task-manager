import { Breadcrumbs, Link } from "@mui/material";

export const MuresanTasksList = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator="|"
      // maxItems={3}
      // itemsAfterCollapse={2}
      // itemsBeforeCollapse={2}
    >
      <Link underline="hover" href="../">
        Home
      </Link>
      <Link underline="hover" href="../forgot">
        Forgot Password
      </Link>
      <Link underline="hover" href="../recover">
        Recover Password
      </Link>

      <Link underline="hover" href="../test">
        Test
      </Link>
    </Breadcrumbs>
  );
};
