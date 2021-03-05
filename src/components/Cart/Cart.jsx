import { Button, Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

import useStyle from "./styles";

const Cart = ({
  cart,
  updateCartQtyHandler,
  removeFromCartHandler,
  emptyCartHandler,
}) => {
  const classes = useStyle();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link to="/" className={classes.link}>
        Start adding some!
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((el) => (
          <Grid item xs={12} sm={4} key={el.id}>
            <CartItem item={el} />
            {console.log(el.id)}
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography varinat="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={emptyCartHandler}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return <h1>Loading ..</h1>;

  return (
    <div>
      <Container>
        <div className={classes.toolbar}></div>
        <Typography variant="h3" gutterBottom>
          Your Shopping Cart
        </Typography>
        {!cart.total_items ? <EmptyCart /> : <FilledCart />}
      </Container>
    </div>
  );
};

export default Cart;
