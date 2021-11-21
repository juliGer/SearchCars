import { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Alert,
  IconButton,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import Layout from "components/Layout";
import SearchBar from "components/SearchBar";
import CloseIcon from "@mui/icons-material/Close";
import { CarService } from "services/CarService";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [searchCar, setSearchCar] = useState(false);
  const [open, setOpen] = useState(false);

  const onChangeInput = (e) => {
    const value = e.target.value || undefined;
    setSearchCar(value);
  };
  const handleClick = (e) => {
    setOpen(true);
    searchCar
      ? CarService.getCarsFilter(searchCar)
          .then((data) => {
            console.log(data);
            setCars(data);
          })
          .catch((error) => {
            console.log(error);
          })
      : CarService.getCars()
          .then((data) => {
            setCars(data);
          })
          .catch((error) => {
            console.log(error);
          });
  };
  const action = (
    <IconButton
      aria-label="close"
      color="inherit"
      size="small"
      onClick={() => {
        setOpen(false);
      }}
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  );
  return (
    <Layout>
      <br />
      <br />

      <Grid
        container
        spacing={0}
        flexDirection="column"
        textAlign="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Card>
            <CardContent>
              {open &&
                (cars && cars.length ? (
                  <Alert
                    action={action}
                    style={{ display: "flex", justifyContent: "center" }}
                    severity="success"
                  >
                    {cars.length} results found
                  </Alert>
                ) : (
                  <Alert
                    action={action}
                    style={{ display: "flex", justifyContent: "center" }}
                    severity="error"
                  >
                    No results found
                  </Alert>
                ))}

              <Typography variant="h4">Welcome to SearchCars!</Typography>
              <img
                alt="search-cars"
                width="40%"
                src={process.env.PUBLIC_URL + "/images/image_search_cars.png"}
              />
              <Grid container display="flex" justifyContent="center">
                <Grid item>
                  <SearchBar
                    handleClick={handleClick}
                    onChangeInput={onChangeInput}
                  />
                </Grid>
                <Grid container display="flex" justifyContent="center">
                  <Grid item>
                    {cars &&
                      cars.length !== 0 &&
                      cars.map((car) => (
                        <List>
                          <ListItem>
                            <DirectionsCarIcon />
                            <List>
                              <ListItem>Name: {car.name}</ListItem>
                              <ListItem>Plate: {car.plate}</ListItem>
                            </List>
                          </ListItem>
                        </List>
                      ))}
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
