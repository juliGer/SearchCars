export const CarService = {
  getCars: async () => {
    const getResult = await fetch(`http://localhost:12000/cars/`);
    const categoriasResult = await getResult.json();
    return categoriasResult;
  },
  getCarsFilter: async (search) => {
    const getResult = await fetch(`http://localhost:12000/cars/filter_cars/?search=${search}`);
    const categoriasResult = await getResult.json();
    return categoriasResult;
  }
};
