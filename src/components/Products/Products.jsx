import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const PRODUCTS_ITEMS = [
  { id: 1, name: "Shoes", description: "Running shoes.", price: "5$" },
  { id: 2, name: "HP Laptop", description: "Best Performance.", price: "5$" },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center">
        {PRODUCTS_ITEMS.map((productItem) => (
          <Grid
            item
            key={productItem.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            justify="center"
          >
            <Product product={productItem} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
