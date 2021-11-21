import { Box } from "@mui/system";
import Layout from "components/Layout";
import SearchBar from "components/SearchBar";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        borderRadius: 1,
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

const Home = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
        }}
      >
        <Item>
          <img
            alt="logo-flecha"
            width="20%"
            src={process.env.PUBLIC_URL + "/images/image_search_cars.png"}
          />
        </Item>
        <Item>
          <SearchBar />
        </Item>
      </Box>
    </Layout>
  );
};

export default Home;
