import { AppBar, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

import { Box } from "@mui/system";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 1,
        m: 1,
        borderRadius: 1,
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Item>
            <DirectionsCarIcon />
            <Typography variant="h6">SearchCars</Typography>
          </Item>
        </Box>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;
