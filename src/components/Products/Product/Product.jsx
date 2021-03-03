import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product }) => {
  const classes = { root: {}, media: {} };
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image="" title={product.name} />
        <CardContent>
          <div>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {product.price}
            </Typography>
          </div>
          <Typography variant="h2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
