import { Box, Typography } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box mb="25px">
      <Typography
        variant="h2"
        sx={{ color: "#330033", mb: "5px" }}
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Typography variant="h5" sx={{ color: "#330066" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
